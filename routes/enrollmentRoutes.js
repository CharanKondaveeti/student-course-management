const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollmentController");

router.route("/enrollments").get(enrollmentController.getAllEnrolls);
router.route("/enroll").post(enrollmentController.studentEnroll);

module.exports = router;
