const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8787;
const API_KEY = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.warn('Warning: GEMINI API key not found in environment. Set VITE_GEMINI_API_KEY or GEMINI_API_KEY.');
}

app.post('/api/chat', async (req, res) => {
  try {
    const { input, conversationHistory } = req.body || {};

    if (!input) {
      return res.status(400).json({ error: 'Missing input' });
    }

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

    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!r.ok) {
      const text = await r.text();
      if (r.status === 429) return res.status(429).json({ error: 'Rate limit exceeded' });
      return res.status(r.status).json({ error: text });
    }

    const data = await r.json();

    // Try to extract assistant text from known shapes
    let message = null;
    if (data?.candidates && data.candidates[0]) {
      // new-style
      const cand = data.candidates[0];
      // try a few possible paths
      message = cand?.content?.parts?.[0]?.text || cand?.content?.[0]?.text || cand?.output || cand?.content?.text;
    }
    // fallback to top-level text
    message = message || data?.output || data?.text || JSON.stringify(data).slice(0, 1000);

    return res.json({ message, raw: data });
  } catch (err) {
    if (err.name === 'AbortError') {
      return res.status(504).json({ error: 'Request timed out' });
    }
    console.error('Server error:', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Chat proxy listening on http://localhost:${PORT}`);
});
