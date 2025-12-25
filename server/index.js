import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8787;
const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
  console.error('❌ ERROR: GOOGLE_API_KEY not found in environment. Set it in .env or server environment.');
  console.error('Current env vars:', Object.keys(process.env).filter(k => k.includes('KEY') || k.includes('API')));
} else {
  console.log('✅ GOOGLE_API_KEY loaded successfully');
}

app.post('/api/chat', async (req, res) => {
  try {
    const { input, conversationHistory } = req.body || {};

    if (!input) {
      return res.status(400).json({ error: 'Missing input' });
    }

    if (!API_KEY) {
      console.error('API_KEY is missing!');
      return res.status(500).json({ error: 'API key not configured on server' });
    }

    console.log('Processing request:', { input: input.substring(0, 50) });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    const body = {
      contents: [
        {
          parts: [
            {
              text: `You are the Enigma Club assistant at FET (Faculty of Engineering and Technology), Jain University. Answer concisely.\n\nPrevious conversation:\n${conversationHistory || ''}\n\nUser: ${input}\n\nRespond helpfully.`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    console.log('Calling Google API...');
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      console.error(`Google API error (${r.status}):`, text);
      if (r.status === 429) return res.status(429).json({ error: 'Rate limit exceeded' });
      try {
        const parsed = JSON.parse(text || "{}");
        return res.status(r.status).json({ error: parsed });
      } catch (e) {
        return res.status(r.status).json({ error: text });
      }
    }

    let data;
    try {
      data = await r.json();
    } catch (e) {
      console.error('Failed to parse JSON from Google API:', e);
      return res.status(500).json({ error: 'Invalid response from AI' });
    }
    console.log('Google API response received');

    // Try to extract assistant text from known shapes
    let message = null;
    try {
      if (Array.isArray(data?.candidates) && data.candidates[0]) {
        const cand = data.candidates[0];
        message = cand?.content?.parts?.[0]?.text || cand?.content?.[0]?.text || cand?.output || cand?.content?.text;
      }
      // fallback to other common shapes
      message = message || data?.output || data?.text || data?.candidates?.[0]?.output || null;
    } catch (e) {
      console.error('Error extracting message from API response:', e);
      message = null;
    }

    return res.json({ message, raw: data });
  } catch (err) {
    if (err.name === 'AbortError') {
      console.error('Request timed out');
      return res.status(504).json({ error: 'Request timed out' });
    }
    console.error('Server error:', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Chat proxy listening on http://localhost:${PORT}`);
  console.log(`API Key Status: ${API_KEY ? '✅ LOADED' : '❌ MISSING'}`);
});
