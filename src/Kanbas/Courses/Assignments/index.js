import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
import { useNavigate } from "react-router-dom";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const dispatch = useDispatch();

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  const navigate = useNavigate();

  const handleDelete = (assignmentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove the assignment?"
    );
    if (confirmed) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

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
        <Button
          variant="danger"
          className="mx-1"
          onClick={() => {
            navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
          }}
        >
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
            <div style={{ display: "flex", width: "100%" }}>
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item"
                onClick={() => dispatch(setAssignment(assignment))}
                style={{ flex: 1 }}
              >
                {assignment.title}
              </Link>
              <Button
                variant="danger"
                onClick={() => handleDelete(assignment._id)}
                style={{ flex: "none" }}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;
