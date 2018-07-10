const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/dog/:breed', (req, res) => {
  return fetch(`https://dog.ceo/api/breed/${req.params.breed}/images`)
    .then(response => {
      return response.json();
    }).then(results => {
      res.send(results);
    });
});

app.listen(process.env.PORT || 3000);
