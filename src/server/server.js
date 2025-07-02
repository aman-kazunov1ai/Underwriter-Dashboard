import express from 'express';
import cors from 'cors';
import client from './db.js';

const app = express();
const PORT = 5000;

app.use(cors());

client.connect()
  .then(() => console.log('✅ Connected to DB'))
  .catch(err => console.error('❌ DB connection error', err));

app.get('/api/customers', async (req, res) => {
  try {
    const result = await client.query('SELECT customer_id, customer_name FROM customer');
    res.json(result.rows);
  } catch (error) {
    console.error('❌ Query error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
