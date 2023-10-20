import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { PiDotsSixVerticalBold } from "react-icons/pi";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <ul
            key={index}
            className="list-group mb-4"
            style={{ paddingRight: 25 }}
          >
            <li
              className="list-group-item"
              style={{ backgroundColor: "lightgrey" }}
            >
              <p>
                <PiDotsSixVerticalBold /> <b>{module.name}</b> -{" "}
                {module.description}
              </p>
              {module.lessons &&
                module.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex}>
                    <h4>{lesson.name}</h4>
                    <p>{lesson.description}</p>
                  </div>
                ))}
            </li>
          </ul>
        ))}
    </div>
  );
}

export default ModuleList;
