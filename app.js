const path = require('path');

const express = require('express');

const app = express();

app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.status(200).render('index', {
    name: 'World',
  });
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
