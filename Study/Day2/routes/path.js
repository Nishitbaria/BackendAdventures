const express = require("express");
const router = express.Router();

//import student model
const { createStudent } = require("../controllers/createstudent");
const {
  getStudent,
  getStudentById,
  getStudentByName,
} = require("../controllers/getStudent");
const { updateStudent } = require("../controllers/updateStudent");
const { deleteStudent } = require("../controllers/deleteStudent");
//define new route handler for create student
router.post("/createstudent", createStudent);
router.get("/getstudent", getStudent);
router.get("/getstudent/:id", getStudentById);
router.get("/getstudentbyname/:Name", getStudentByName);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deletestudent/:id", deleteStudent);
module.exports = router;
