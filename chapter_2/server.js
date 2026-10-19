// http://localhost:8383

const express = require('express');
const app = express();
const PORT = 8383

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/dashboard', (req, res) => {
  res.send('Hello, this is the dashboard page!');
});

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`);
});

