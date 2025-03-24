import React, { useState, useEffect } from "react";
import { getTasksAPI, addTaskAPI } from "./service/TodoAPI";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const [reload, setReload] = useState(false);

  useEffect(() => {
    console.log("Effect executed!");
    setTasks(getTasksAPI());
  }, [reload]);

  const addTask = () => {
    // Validation for empty input as
    if (inputValue.trim() === "") {
      setError("Task cannot be empty.");
      return;
    }

    // Validation for minimum length
    if (inputValue.trim().length < 3) {
      setError("Task must be at least 3 characters long.");
      return;
    }

    // Validation for maximum length
    if (inputValue.trim().length > 50) {
      setError("Task cannot exceed 50 characters.");
      return;
    }

    addTaskAPI(inputValue.trim());
    setReload(!reload);

    setInputValue("");
    setError("");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">To-Do List</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              id="forminput"
              type="text"
              placeholder="Enter a Task"
              className={`form-control ${error ? "is-invalid" : ""}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addTask}>
              Add Task
            </button>
          </div>

          {error && <div className="text-danger my-2">{error}</div>}

          <ul className="list-group mt-6">
            {tasks.map((task) => (
              <li className="list-group-item" key={task.id}>
                {task.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
