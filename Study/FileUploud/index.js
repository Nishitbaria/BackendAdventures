const express = require("express");
const { connect } = require("mongoose");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000;

//adding middleware to parse the request body
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const Port = process.env.PORT;

//commect the database
require("./config/database").connect();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

app.listen(port, () => {
  console.log(`Server is running on port  ${port}`);
});

//api ko mount karna
const Uploud = require("./routes/FileUploud");
app.use("/api/v1/uploud", Uploud);

//deafult route
app.get("/", (req, res) => {
  res.send("Hello World");
});
