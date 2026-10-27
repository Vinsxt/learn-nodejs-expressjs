// http://localhost:8383

const express = require('express');
const app = express();
const PORT = 8383;

let data = ['Vincent']

// Middleware
app.use(express.json());

// Website Endpoints - Type 1

app.get('/', (req, res) => {
  console.log("User requested the home page website");
  res.send(`
    <body style="background:pink;
      color:blue">
      <h1>Data</h1>
      <p>${JSON.stringify(data)}</p>
      <a href="/dashboard">Dashboard</a>
    </body>
    <script>console.log("This is a inspect console.log");</script>
    `);
});

app.get('/dashboard', (req, res) => {
  res.send(`
    <body>
      <h1>Dashboard</h1>
      <a href="/">Home</a>
    </body>
    `);
});

// API Endpoints (Non-visual) - Type 2

app.get('/api/data', (req, res) => {
  console.log('API request for data');
  res.status(599).send(data);
});

app.post('/api/data', (req, res) => {
  // someone wants to create a user (click a sign up button)
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name);
  res.sendStatus(201);
})

app.delete('/api/data', (req, res) => {
  data.pop();
  console.log("Deleted last entry");
  res.sendStatus(200);
})

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`);
});

