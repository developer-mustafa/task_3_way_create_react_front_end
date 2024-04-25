import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onAlert }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} onAlert={onAlert} />
      ))}
    </div>
  );
};

export default TaskList;
