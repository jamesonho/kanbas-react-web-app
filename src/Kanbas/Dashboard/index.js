import { Link } from "react-router-dom";
import db from "../Database";
import Card from "react-bootstrap/Card";
import blueImage from "./blue.jpg";
import { AiOutlineFileSearch } from "react-icons/ai";
import { React, useState } from "react";
import Button from "react-bootstrap/Button";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <label htmlFor="courseName">Course Name</label>
      <input
        id="courseName"
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <label htmlFor="courseNumber">Course Number</label>
      <input
        id="courseNumber"
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        id="startDate"
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        id="endDate"
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <br />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="success" onClick={addNewCourse}>
          Add
        </Button>
        <Button variant="primary" onClick={updateCourse}>
          Update
        </Button>
      </div>
      <h2>Published Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-md-4">
            <Button
              variant="warning"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </Button>

            <Button
              variant="danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}
            >
              Delete
            </Button>
            <Card style={{ marginBottom: "20px" }}>
              <Card.Img variant="top" src={blueImage} style={{ height: 200 }} />
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>
                  Course Number: {course.number}
                  <br />
                  Start Date: {course.startDate}
                  <br />
                  End Date: {course.endDate}
                </Card.Text>
                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  <AiOutlineFileSearch />
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
