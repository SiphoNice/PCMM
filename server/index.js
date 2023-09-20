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
client.query("select * from contacts", (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});

app.use(cors());
app.use(express.json());

app.get("/contacts", (req, res) => {
  res.json({ contacts: ["contact 1", "contact 2"] });
});

app.listen(3001, () => {
  console.log("Server is running on Port 3001");
});
