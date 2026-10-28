import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5001;


// Get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url);
// Get the directory name from the file path
const __dirname = dirname(__filename);


// middleware
app.use(express.json());

// Serves the HTML file from the /public directory, set them as static files so that they can be accessed by the browser
app.use(express.static(path.join(__dirname, "../public")));

// endpoint
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});