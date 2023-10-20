import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { Button } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <h2>Assignments</h2>
      <div className="d-flex" style={{ paddingRight: 20, paddingBottom: 10 }}>
        <input
          className=""
          type="text"
          placeholder="Search for Assignment"
          style={{ marginRight: "auto" }}
        />
        <Button variant="secondary" className="mx-1">
          <FiPlus /> Group
        </Button>
        <Button variant="danger" className="mx-1">
          <FiPlus /> Assignment
        </Button>
        <Button variant="secondary" className="mx-1">
          <BiDotsVerticalRounded />
        </Button>
      </div>
      <div className="list-group" style={{ paddingRight: 20 }}>
        <li
          className="list-group-item active bg-secondary text-white"
          style={{ backgroundColor: "lightgray", border: "none" }}
        >
          ASSIGNMENTS
        </li>
        <div style={{ borderLeft: "7px solid green" }}>
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item"
            >
              {assignment.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;
