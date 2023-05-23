const student = require("../models/StudentSchema");

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, Email, Age } = req.body;
    const updateStudentdata = await student.findByIdAndUpdate(
      { _id: id },
      { Name, Email, Age }
    );

    res.status(200).json({
      sucess: true,
      data: updateStudentdata,
      message: "Student entry  updated successfully",
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
