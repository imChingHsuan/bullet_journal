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

app.get("/event/get", (req, res) => {
  const eventSelect = "SELECT * FROM event";
  db.query(eventSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/event/insert", (req, res) => {
  const date = req.body.date;
  const title = req.body.title;
  const eventInsert = "INSERT INTO event (date, title) VALUES (?,?)";
  db.query(eventInsert, [date, title]);
});

app.delete("/event/delete/:eventId", (req, res) => {
  const eventId = req.params.eventId;
  const eventDelete = "DELETE FROM event WHERE eventId =?";
  db.query(eventDelete, eventId);
});

app.put("/event/update/:eventId", (req, res) => {
  const newEvent = req.body.newEvent;
  const eventId = req.params.eventId;
  const eventUpdate = `UPDATE event SET title=? WHERE eventId=?`;
  db.query(eventUpdate, [newEvent, eventId]);
});

// 開始
app.get("/date/get/:dateTime", (req, res) => {
  const dateTime = req.params.dateTime;
  const dateSelect = "SELECT weather,note FROM date WHERE dateTime = ?";
  db.query(dateSelect, dateTime, (err, result) => {
    res.send(result);
  });
});

app.get("/event/get/:dateTime", (req, res) => {
  const dateTime = req.params.dateTime;
  const tdEventSelect =
    "SELECT eventId,title,done,reminder FROM event WHERE dateTime = ?";
  db.query(tdEventSelect, dateTime, (err, result) => {
    res.send(result);
  });
});

app.put("/check/:eventId", (req, res) => {
  const eventId = req.params.eventId;
  const checkUpdate = "UPDATE event SET done = 1 WHERE eventId = ?";
  db.query(checkUpdate, eventId, (err, result) => {
    console.log(result);
  });
});
