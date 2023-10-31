const Course = require("./../models/courseModel");

exports.getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({
      status: "success",
      results: courses.length,
      data: {
        courses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const courseid = req.params.id;
    const course = await Course.findOne({ id: courseid });

    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        couse: newCourse,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const courseid = req.params.id;
    const course = await Course.findOneAndUpdate(
      { id: courseid },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const courseid = req.params.id;
    await Course.findOneAndDelete(courseid);

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
