const express = require("express");
const courseControllers = require("../controllers/courseControllers");
const router = express.Router();

router
  .route("/")
  .get(courseControllers.getAllCourse)
  .post(courseControllers.createCourse);

router
  .route("/:id")
  .get(courseControllers.getCourse)
  .patch(courseControllers.updateCourse)
  .delete(courseControllers.deleteCourse);

module.exports = router;
