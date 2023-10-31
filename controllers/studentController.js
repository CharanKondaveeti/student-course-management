const Student = require("./../models/studentModel");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      status: "success",
      results: students.length,
      data: {
        students,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const studentid = req.params.id;
    const student = await Student.findOne({ id: studentid });

    res.status(200).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        Student: newStudent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const studentid = req.params.id;
    const student = await Student.findOneAndUpdate(
      { id: studentid },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const studentid = req.params.id;
    await Student.findOneAndDelete(studentid);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
