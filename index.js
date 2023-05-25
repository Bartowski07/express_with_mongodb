require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

const studentsRouter = require("./routes/student");

db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", studentsRouter);

app.get("/", (req, res) => {
  res.send("HELLO THERE!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
