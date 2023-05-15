//import student model

const student = require("../models/StudentSchema");

//define new route handler for create student

exports.createStudent = async (req, res) => {
  try {
    //fetch data from request body
    const { Name, Email, Age } = req.body;
    //create new student object and save it to database
    const newStudent = await student.create({ Name, Email, Age });
    // send the response to db to flag
    res.status(200).json({
      sucess: true,
      data: newStudent,
      message: "Student entry  created successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: "internal server errors",
      message: err.message,
    });
  }
};
