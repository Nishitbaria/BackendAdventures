const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000;

//adding middleware to parse the request body
app.use(express.json());

//mounting the routes
const blog = require("./routes/blog");
app.use("/api/v1", blog);

//connect to database
const connectWithDb = require("./config/database");
connectWithDb();

//listen to port
app.listen(port, () => {
  console.log(`Server is running on port  ${port}}`);
});

//deafult route
app.get("/", (req, res) => {
  res.send("Hello World");
});
