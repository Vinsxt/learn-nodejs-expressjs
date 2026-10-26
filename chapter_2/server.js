// http://localhost:8383

const express = require('express');
const app = express();
const PORT = 8383;

let data = {
  name: 'Vincent'
}

// Website Endpoints - Type 1

app.get('/', (req, res) => {
  res.send('<h1>Homepage</h1>');
});

app.get('/dashboard', (req, res) => {
  res.send('<h1>Dashboard</h1>');
});

// API Endpoints (Non-visual) - Type 2

app.get('/api/data', (req, res) => {
  console.log('API request for data');
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`);
});

