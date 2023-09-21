const express = require("express");
const cors = require("cors");
const { Client } = require("pg");
const app = express();
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "5432",
  password: "Google@211",
  database: "pcmm_assignment",
});
client.connect();
app.use(cors());
app.use(express.json());
app.post("/create_safety_incident", async (req, res) => {
  try {
    const { mine_id, latitude, longitude, description, severity } = req.body;
    const add_incident = await client.query(
      "INSERT INTO incidents(mine_id,latitude,longitude,description,severity) VALUES($1,$2,$3,$4,$5) RETURNING * ",
      [mine_id, latitude, longitude, description, severity]
    );
    res.json(add_incident.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});
app.get("safety_incident", async (req, res) => {
  try {
    const safety_incident = await client.query("SELECT * FROM incidents");
    res.json(safety_incident.rows);
  } catch (err) {
    console.log(err.log);
  }
});
app.get("/contacts", (req, res) => {
  res.json({ contacts: ["contact 1", "contact 2"] });
});

app.listen(3001, () => {
  console.log("Server is running on Port 3001");
});
