const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});

app.use(express.json());

//import student model API

const StudentRoute = require("./routes/path");

app.use("/api/v1", StudentRoute);

//connect to the database
const dbConnect = require("./configs/databse");
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE Student Data</h1>`);
});
