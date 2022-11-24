import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "0303",
  database: "appointmentsystem",
});

db.connect(function(err) {  
    if (err) throw err;  
app.post("/", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const stat = req.body.stat;
  const time = req.body.time;
  const date = req.body.date;
  const number = req.body.number;
  const docname = req.body.docname;

  db.query(
    "INSERT INTO patientsdetail (name, age, gender, stat, time, date, number, docname) VALUES (?,?,?,?,?,?,?,?)",
    [name, age, gender, stat, time, date, number, docname],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    }
  );
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM patientsdetail", (err, result) => {
    if (err) {
      console.log(err);
    } else {
        // console.log(result);
      res.send(result);
    }
  });
});

app.put("/", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const stat = req.body.stat;
  const time = req.body.time;
  const date = req.body.date;
  const number = req.body.number;
  const docname = req.body.docname;
  db.query(
    "UPDATE patientsdetail SET name= ?,age=?, gender=?, stat=?, time=?, date=?, number=?, docname=? WHERE id = ?",
    [name, age, gender, stat, time, date, number, docname, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.query("DELETE FROM patientsdetail WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(8080, () => {
  console.log("Yey, your server is running on port 8080");
});
});

