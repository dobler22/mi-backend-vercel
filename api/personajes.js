const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());

const dataPath = path.join(__dirname, '../data/dragonball.json');

function getData() {
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
}

app.get('/personajes', (req, res) => {
  const personajes = getData();
  res.json(personajes);
});

app.get('/personajes/:id', (req, res) => {
  const personajes = getData();
  const personaje = personajes.find(p => p.id === parseInt(req.params.id));
  if (personaje) {
    res.json(personaje);
  } else {
    res.status(404).json({ error: 'Personaje no encontrado' });
  }
});

module.exports = app;
