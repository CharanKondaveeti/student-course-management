const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollmentController");

router.route("/enroll").post(enrollmentController.studentEnroll);

module.exports = router;
