import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8787;

// This is just a placeholder route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Static FAQ mode active' });
});

app.listen(PORT, () => {
  console.log(`Backend placeholder running on http://localhost:${PORT}`);
});