// api/index.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola desde Node.js en Vercel 🚀' });
});

app.post('/saludo', (req, res) => {
  const { nombre } = req.body;
  res.json({ saludo: `Hola, ${nombre || 'anónimo'}!` });
});

// Exporta como handler para Vercel
module.exports = app;
