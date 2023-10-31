const Enrollment = require("./../models/enrollmentModel");

exports.getAllEnrolls = async (req, res) => {
  try {
    const enrollments = await Enrollment.find();

    res.status(200).json({
      status: "success",
      results: enrollments.length,
      data: {
        enrollments,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.studentEnroll = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;
    const enrollment = new Enrollment({ student: studentId, course: courseId });

    await enrollment.save();

    res.status(201).json({ message: "Enrollment successful" });
  } catch (error) {
    res.status(500).json({ error: "Enrollment failed" });
  }
};
