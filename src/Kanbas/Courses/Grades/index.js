import db from "../../Database";
import { useParams } from "react-router-dom";
import { AiOutlineImport } from "react-icons/ai";
import { AiOutlineExport } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { AiFillFilter } from "react-icons/ai";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <h1>Grades</h1>
      <div
        className="d-flex justify-content-end mb-3"
        style={{ paddingRight: 20 }}
      >
        <button type="button" className="btn btn-secondary me-2">
          <AiOutlineImport /> Import
        </button>
        <Dropdown>
          <Dropdown.Toggle className="btn btn-secondary me-2">
            <AiOutlineExport /> Export
          </Dropdown.Toggle>
        </Dropdown>
        <button type="button" className="btn btn-secondary">
          <BsFillGearFill />
        </button>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h3>Student Names</h3>
          <select class="form-select">
            <option value="" disabled selected>
              Search Students
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <h3>Assignment Names</h3>
          <select class="form-select" placeholder="Search Students">
            <option value="" disabled selected>
              Search Assignments
            </option>
          </select>
        </div>
      </div>
      <br />
      <button class="btn btn-secondary" type="button">
        <AiFillFilter /> Apply Filters
      </button>
      <div
        className="table-responsive"
        style={{ paddingRight: 20, paddingTop: 20 }}
      >
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
