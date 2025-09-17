import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

const dataPath = path.join(__dirname, "..", "data", "springs.sample.json");
const springs = JSON.parse(readFileSync(dataPath, "utf-8"));

app.get("/api/springs", (req, res) => {
  res.json(springs);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
