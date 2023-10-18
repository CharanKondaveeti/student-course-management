const express = require("express");
const router = express.Router();
const courseControllers = require("../controllers/courseControllers");

router
  .route("/")
  .get(courseControllers.getAllCourse)
  .post(courseControllers.createCourse);

router
  .route("/:tittle")
  .get(courseControllers.getCourse)
  .patch(courseControllers.updateCourse)
  .delete(courseControllers.deleteCourse);

module.exports = router;
