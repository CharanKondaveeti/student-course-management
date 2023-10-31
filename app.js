const express = require("express");

const studentRouter = require("./routes/studentRoutes");
const courseRouter = require("./routes/courseRoutes");
const enrollmentRouter = require("./routes/enrollmentRoutes");

const app = express();

app.use(express.json());
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1", enrollmentRouter);

module.exports = app;
