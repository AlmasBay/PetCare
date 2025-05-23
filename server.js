// server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 5000;

// Разрешаем только запросы с домена GitHub Pages
app.use(cors({
  origin: 'https://almasbay.github.io', // Разрешить доступ с любого поддомена
}));



app.get('/api/places', async (req, res) => {
  const { lat, lng } = req.query;
  const apiKey = process.env.GOOGLE_API_KEY; // Используем переменную окружения для API ключа
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&keyword=pet+store&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data); // Отправляем данные на клиентскую сторону
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
