import { Link } from "react-router-dom";
import db from "../Database";
import Card from "react-bootstrap/Card";
import blueImage from "./blue.jpg";
import { AiOutlineFileSearch } from "react-icons/ai";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-md-4">
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
