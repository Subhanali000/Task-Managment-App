import React from "react";

function Task({ task, onDeleteTask, onMoveTask }) {
  const { id, title, description, status } = task;

  const statuses = ["To Do", "In Progress", "Done"];
  const currentIndex = statuses.indexOf(status);

  return (
    <div className="task">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="task-controls">
        <button
          onClick={() => onMoveTask(id, -1)}
          disabled={currentIndex === 0}
        >
          ◀
        </button>
        <button onClick={() => onDeleteTask(id)}>Delete</button>
        <button
          onClick={() => onMoveTask(id, 1)}
          disabled={currentIndex === statuses.length - 1}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Task;
