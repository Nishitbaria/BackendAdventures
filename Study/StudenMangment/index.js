const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json()); // <-- Move this line before route declaration

// Import student model API
const StudentRoute = require("./routes/path");
app.use("/api/v1", StudentRoute);

// Connect to the database
const dbConnect = require("./configs/databse");
dbConnect();

// Default Route
app.get("/", (req, res) => {
  res.send("<h1>This is HOMEPAGE Student Data</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
