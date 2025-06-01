const express = require('express');
const app = express();

const personajes = require('./personajes');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'Backend Dragon Ball API en Vercel 🔥' });
});

app.use('/', personajes); // ✅ Montamos el endpoint

module.exports = app;