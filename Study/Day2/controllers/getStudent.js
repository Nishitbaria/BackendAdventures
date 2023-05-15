//import tbe student databse Scama
const student = require("../models/StudentSchema");

exports.getStudent = async (req, res) => {
  try {
    //fetch data from request student database
    const getStudent = await student.find({});

    //response to db
    res.status(200).json({
      sucess: true,
      data: getStudent,
      message: "All Student entry Fetch successfully  ✨",
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

exports.getStudentById = async (req, res) => {
  try {
    const id = req.params.id;

    //fetch data from request student database

    const getStudentbyid = await student.findById(id);

    if (!getStudentbyid) {
      return res.status(404).json({
        sucess: false,
        message: "Student entry not found",
      });
    }
    //response to db
    res.status(200).json({
      sucess: true,
      data: getStudentbyid,
      message: "Student entry Fetch successfully  ✨",
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

exports.getStudentByName = async (req, res) => {
  try {
    const { Name } = req.params;

    const getStudentByName = await student.find({
      Name: { $regex: `^${Name}*` },
    });

    if (!getStudentByName) {
      return res.status(404).json({
        success: false,
        message: "Student entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: getStudentByName,
      message: "Student entry fetched successfully ✨",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
