import ModuleList from "../Modules/ModuleList";
import { Button, DropdownButton } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 3 }}>
        <h2>Home</h2>
        <div
          className="d-flex justify-content-end mb-3"
          style={{ paddingRight: 20 }}
        >
          <Button variant="secondary" className="me-2">
            Collapse All
          </Button>
          <Button variant="secondary" className="me-2">
            View Progress
          </Button>
          <DropdownButton
            variant="secondary"
            title="Publish All"
            className="me-2"
          ></DropdownButton>
          <Button variant="danger" className="me-2">
            <FiPlus /> Module
          </Button>
          <Button variant="secondary" className="me-2">
            <BiDotsVerticalRounded />
          </Button>
        </div>
        <ModuleList />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h2>Status</h2>
        <div>
          <Button
            variant="secondary"
            className="mb-2 text-start"
            style={{ width: "90%" }}
          >
            Import Existing Content
          </Button>
          <Button
            variant="secondary"
            className="mb-2 text-start"
            style={{ width: "90%" }}
          >
            Import From Commons
          </Button>
          <Button
            variant="secondary"
            className="mb-2 text-start"
            style={{ width: "90%" }}
          >
            Choose Home Page
          </Button>
          <Button
            variant="secondary"
            className="mb-2 text-start"
            style={{ width: "90%" }}
          >
            View Course Stream
          </Button>
          <Button
            variant="secondary"
            className="mb-2 text-start"
            style={{ width: "90%" }}
          >
            New Annoucement
          </Button>
          <Button
            variant="secondary"
            className="mb-2 text-start"
            style={{ width: "90%" }}
          >
            New Analytics
          </Button>
          <Button
            variant="secondary"
            className="mb-2 text-start"
            style={{ width: "90%" }}
          >
            View Course Notifications
          </Button>
        </div>
        <h2>To Do</h2>
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{ width: "90%", color: "red" }}
          >
            Grade A1 - ENV + HTML
          </li>
          <li
            className="list-group-item"
            style={{ width: "90%", color: "red" }}
          >
            Grade A2 - CSS + BOOTSTRAP
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
