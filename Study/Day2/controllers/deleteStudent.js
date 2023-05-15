const student = require("../models/StudentSchema");

exports.deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteStudent = await student.findByIdAndDelete(id);
    res.status(200).json({
      sucess: true,
      data: deleteStudent,
      message: "Student entry  deleted successfully",
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
