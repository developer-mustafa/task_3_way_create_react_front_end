import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import data from "../../data";
import Modal from "../modal/Modal";

const IdGenerate = (tasks) => {
  let hightId = 0;
  tasks.forEach((task) => {
    if (task.id > hightId) {
      hightId = task.id;
    }
  });
  return hightId;
};

const TaskApp = () => {
  const [tasks, setTask] = useState(data);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleAddTask = (task) => {
    setTask([
      ...tasks,
      {
        id: IdGenerate(tasks) + 1,
        text: task,
        isCompleted: false,
      },
    ]);
  };

  const handleEditTask = (task) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === task.id) {
        return task;
      }
      return item;
    });
    setTask(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
    setShow(false);
  };
  const handleAlert = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  return (
    <div>
      <h2>Task Application with use State</h2>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} onEdit={handleEditTask} onAlert={handleAlert} />
      {show && (
        <Modal
          onAction={() => handleDeleteTask(deleteId)}
          onHide={() => setShow(false)}
        >
          Are You Sure ?
        </Modal>
      )}
    </div>
  );
};

export default TaskApp;
