import React from "react";
import Task from "./Task";

function TaskLane({ status, tasks, onDeleteTask, onMoveTask }) {
  return (
    <div className="task-lane">
      <h3>{status}</h3>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onMoveTask={onMoveTask}
        />
      ))}
    </div>
  );
}

export default TaskLane;
