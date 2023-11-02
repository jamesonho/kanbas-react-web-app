import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    if (assignmentId && assignmentId !== "new") {
      // updating an existing assignment
      dispatch(updateAssignment({ ...assignment }));
    } else {
      // adding a new assignment
      dispatch(addAssignment({ ...assignment, course: courseId }));
      // reset title
      dispatch(setAssignment({ title: "" }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <h2>Assignment</h2>

      <label htmlFor="assignmentName">Assignment Name</label>
      <input
        id="assignmentName"
        value={assignment.title}
        className="form-control"
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
      />

      <label htmlFor="description">Description</label>
      <textarea id="description" className="form-control" />

      <label htmlFor="dueDate">Due Date</label>
      <input type="date" id="dueDate" className="form-control" />

      <label htmlFor="availableFrom">Available From</label>
      <input type="date" id="availableFrom" className="form-control" />

      <label htmlFor="availableUntil">Available Until</label>
      <input type="date" id="availableUntil" className="form-control" />

      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
