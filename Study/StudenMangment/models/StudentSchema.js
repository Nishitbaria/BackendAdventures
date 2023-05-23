const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    maxLength: 20,
    minLength: 3,
    default: "Student from Kpgu",
  }, // remove white space from the beginning and end of a string}
  Email: {
    type: String,
    required: true,
    maxLength: 200,
    minLength: 3,
    default: "student@kpgu.ac.in",
  },
  Age: {
    type: Number,
    required: true,
    maxLength: 20,
    minLength: 3,
    default: 20,
  },
});

module.exports = mongoose.model("student", StudentSchema);
