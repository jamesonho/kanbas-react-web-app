import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";

import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();

  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>
      <li className="list-group-item" style={{ paddingRight: 20 }}>
        <label htmlFor="moduleName">Module Name</label>
        <input
          id="moduleName"
          value={module.name}
          className="form-control"
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={module.description}
          className="form-control"
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <br />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="success" onClick={handleAddModule}>
            {" "}
            Add
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(handleUpdateModule)}
          >
            Update
          </Button>
        </div>
      </li>
      <br />

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
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="warning"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </Button>
              </div>
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
