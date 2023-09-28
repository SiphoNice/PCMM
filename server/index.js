const express = require("express");
const cors = require("cors");
const { Client } = require("pg");
const app = express();
// Database connection
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
// Create a new  incidents
app.post("/create_safety_incident", async (req, res) => {
  try {
    const { mine_id, latitude, longitude, description, severity } = req.body;
    const add_incident = await client.query(
      "INSERT INTO incidents(mine_id,latitude,longitude,description,severity) VALUES($1,$2,$3,$4,$5) RETURNING * ",
      [mine_id, latitude, longitude, description, severity]
    );
    res.json(add_incident.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/select_all_safety_incident_data", async (req, res) => {
  try {
    const safety_incident = await client.query("SELECT * FROM incidents");
    res.json(safety_incident.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//Select all join
app.get("/select_all_safety_incident", async (req, res) => {
  try {
    const safety_incident = await client.query(
      "SELECT * FROM incidents INNER JOIN mines ON incidents.mine_id = mines.id"
    );
    res.json(safety_incident.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/select_count_safety_incident/:severity", async (req, res) => {
  try {
    const { severity } = req.params;
    const safety_incident = await client.query(
      "SELECT COUNT(severity) FROM incidents WHERE severity ILIKE $1",
      [severity]
    );
    res.json(safety_incident.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// fetch a specific incidents
app.get("/select_where_safety_incident/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const safety_incident = await client.query(
      "SELECT * FROM incidents WHERE id= $1",
      [id]
    );
    res.json(safety_incident.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// Update incidents
app.put("/update_safety_incident/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { latitude, longitude, description, severity } = req.body;
    const update_safety_incident = await client.query(
      "UPDATE incidents SET latitude=$1, longitude=$2, description=$3, severity=$4 WHERE id=$5",
      [latitude, longitude, description, severity, id]
    );

    res.json("Incident updated");
  } catch (err) {
    console.error(err.message);
  }
});
// Delete incidents
app.delete("/delete_safety_incident/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delete_safety_incident = await client.query(
      "DELETE FROM incidents WHERE id=$1",
      [id]
    );
    res.json("Incident deleted");
  } catch (err) {
    console.error(err.message);
  }
});
// Get all contact details
app.get("/select_all_contacts", async (req, res) => {
  try {
    const contacts = await client.query("SELECT * FROM contacts");
    res.json(contacts.rows);
  } catch (err) {
    console.log(err.message);
  }
});
app.delete("/delete_contact_details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delete_contact_details = await client.query(
      "DELETE FROM contacts WHERE id=$1",
      [id]
    );
    res.json("Contact details");
  } catch (err) {
    console.error(err.message);
  }
});
// Get all contact details
app.get("/select_all_mines", async (req, res) => {
  try {
    const mines = await client.query("SELECT * FROM mines");
    res.json(mines.rows);
  } catch (err) {
    console.log(err.message);
  }
});
app.get("/select_all_mines/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const safety_incident = await client.query(
      "SELECT * FROM mines INNER JOIN contacts ON mines.contact_person_id = contacts.id WHERE mines.id=$1",
      [id]
    );
    res.json(safety_incident.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//Select all production figures and mines
app.get("/select_all_production_figures/:year", async (req, res) => {
  try {
    const { year } = req.params;
    const production_figures = await client.query(
      "SELECT * FROM production_figures CROSS JOIN mines WHERE year=$1",
      [year]
    );
    res.json(production_figures.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// Select all from production figures
app.get("/select_all_production_figures", async (req, res) => {
  try {
    const { year } = req.params;
    const production_figures = await client.query(
      "SELECT * FROM production_figures"
    );
    res.json(production_figures.rows);
    
  } catch (err) {
    console.error(err.message);
  }
});


app.listen(3001, () => {
  console.log("Server is running on Port 3001");
});
