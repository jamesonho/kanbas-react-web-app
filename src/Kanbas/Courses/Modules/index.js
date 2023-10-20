import ModuleList from "./ModuleList";
import { Button, DropdownButton } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";

function Modules() {
  return (
    <div>
      <h2>Modules</h2>
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
  );
}
export default Modules;
