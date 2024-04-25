import React, { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import data from "../../data";
import Modal from "../modal/Modal";
import TaskReducer from "../../Reducer/TaskReducer";

const TaskApp = () => {
  const [tasks, dispatch] = useReducer(TaskReducer, data);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleAddTask = (task) => {
    dispatch({
      type: "addTask",
      payload: task,
    });
  };

  const handleEditTask = (task) => {
    dispatch({
      type: "editTask",
      payload: task,
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: "deleteTask",
      payload: id,
    });
    setShow(false);
  };

  const handleAlert = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  return (
    <div>
      <h2>
        Task Application with{" "}
        <span
          style={{ background: "red", padding: "5px ", borderRadius: "5px" }}
        >
          use Reducer
        </span>
      </h2>
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
