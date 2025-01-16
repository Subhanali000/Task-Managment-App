import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [formInput, setFormInput] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formInput.title.trim()) {
      onAddTask(formInput);
      setFormInput({ title: "", description: "" });
    }
  };

  return (
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
  );
}

export default TaskForm;
