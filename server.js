const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('CampusHub backend running.');
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
