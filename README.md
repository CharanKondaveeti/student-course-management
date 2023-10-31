# Node.js/Express and MongoDB Task

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Project Setup](#project-setup)
4. [Models](#models)
5. [API Routes](#api-routes)
6. [Running the Application](#running-the-application)
7. [API Usage](#api-usage)
8. [Error Handling](#error-handling)
9. [Assumptions and Considerations](#assumptions-and-considerations)
10. [Conclusion](#conclusion)

## Introduction
This repository contains a simple Node.js/Express application with MongoDB to manage students, courses, and enrollments. The application handles many-to-many relationships using a has-many-through approach.

## Prerequisites
Before getting started, make sure you have the following prerequisites installed:
- Node.js and npm
- MongoDB
- Git (if you're planning to clone/fork the repository)

## Project Setup
1. Clone or fork this repository.
2. Navigate to the project directory.
3. Run `npm install` to install project dependencies.

## Models
### Student Model
- MongoDB model for students with a `name` attribute.

### Course Model
- MongoDB model for courses with a `title` attribute.

### Enrollment Model
- MongoDB model for enrollments representing the relationship between students and courses. It uses references to both the student and course models.

## API Routes
### Students
- `GET /students`: Retrieve a list of all students.
- `GET /students/:id`: Retrieve a specific student by ID.
- `POST /students`: Create a new student.
- `PUT /students/:id`: Update a student by ID.
- `DELETE /students/:id`: Delete a student by ID.

### Courses
- `GET /courses`: Retrieve a list of all courses.
- `GET /courses/:id`: Retrieve a specific course by ID.
- `POST /courses`: Create a new course.
- `PUT /courses/:id`: Update a course by ID.
- `DELETE /courses/:id`: Delete a course by ID.

### Enrollments
- `POST /enrollments`: Enroll a student in a course.

## Running the Application
- Ensure MongoDB is running.
- Run `node server.js` to start the Node.js/Express server.
- The server will be accessible at `http://localhost:3000` by default.

## API Usage
- Use the API routes mentioned in the sections above to interact with the application.

## Error Handling
- Proper error handling is implemented in the routes for invalid requests and database errors.

## Assumptions and Considerations
- Include any assumptions or special considerations you made during the implementation here.

## Conclusion
In this repository, we have outlined how to set up and use the Node.js/Express application with MongoDB for managing students, courses, and enrollments.
