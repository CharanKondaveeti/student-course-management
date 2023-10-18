const Enrollment = require("./../models/enrollmentModel");

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

module.exports = router;
