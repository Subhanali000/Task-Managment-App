import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formInput, setFormInput] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: formInput.title,
      description: formInput.description,
      status: "To Do",
    };
    setTasks([...tasks, newTask]);
    setFormInput({ title: "", description: "" });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveTask = (id, direction) => {
    const statuses = ["To Do", "In Progress", "Done"];
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: statuses[statuses.indexOf(task.status) + direction],
            }
          : task
      )
    );
  };

  const renderTasks = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <div key={task.id} className="task">
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <div className="task-controls">
            <button onClick={() => moveTask(task.id, -1)} disabled={task.status === "To Do"}>
              ◀
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => moveTask(task.id, 1)} disabled={task.status === "Done"}>
              ▶
            </button>
          </div>
        </div>
      ));
  };

  return (
    <div className="app">
      <h1>Task Management App</h1>
      <div class ="container">
      <form onSubmit={handleFormSubmit} className="task-form">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formInput.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={formInput.description}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
      </div>
      <div className="task-board">
        {["To Do", "In Progress", "Done"].map((status) => (
          <div key={status} className="task-lane">
            <h3>{status}</h3>
            {renderTasks(status)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
