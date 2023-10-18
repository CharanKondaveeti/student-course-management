const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "studentModel" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "courseModel" },
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);
