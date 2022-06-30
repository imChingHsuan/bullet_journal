//npm init first
//npm i express boby-parser mysql nodemon
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bulletJournal",
});

app.listen(3001);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM event";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const date = req.body.date;
  const title = req.body.title;
  const sqlInsert = "INSERT INTO event (date, title) VALUES (?,?)";
  db.query(sqlInsert, [date, title]);
});

app.delete("/api/delete/:eventId", (req, res) => {
  const eventId = req.params.eventId;
  const sqlDelete = "DELETE FROM event WHERE eventId =?";
  db.query(sqlDelete, eventId);
});

app.put("/api/update/:eventId", (req, res) => {
  const newEvent = req.body.newEvent;
  const eventId = req.params.eventId;
  const sqlUpdate = `UPDATE event SET title=? WHERE eventId=?`;
  db.query(sqlUpdate, [newEvent, eventId]);
});
