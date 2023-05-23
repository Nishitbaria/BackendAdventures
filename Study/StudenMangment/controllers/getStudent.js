const Student = require("../models/StudentSchema");

const getStudent = async (req, res) => {
  try {
    const students = await Student.find({});

    res.status(200).json({
      success: true,
      data: students,
      message: "All student entries fetched successfully ✨",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: student,
      message: "Student entry fetched successfully ✨",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};

const getStudentByName = async (req, res) => {
  try {
    const { Name } = req.params;

    const students = await Student.find({
      Name: { $regex: `^${Name}*` },
    });

    if (students.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: students,
      message: "Student entries fetched successfully ✨",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};

module.exports = {
  getStudent,
  getStudentById,
  getStudentByName,
};
