import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Modal from "../modal/Modal";
import { useTask } from "../../Context/TaskContext";

const TaskApp = () => {
  const { tasks, handleAddTask, handleEditTask, handleDeleteTask } = useTask();
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

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
          use Reducer + Context Api
        </span>
      </h2>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} onEdit={handleEditTask} onAlert={handleAlert} />
      {show && (
        <Modal
          onAction={() => {
            handleDeleteTask(deleteId);
            setShow(false);
          }}
          onHide={() => setShow(false)}
        >
          Are You Sure ?
        </Modal>
      )}
    </div>
  );
};

export default TaskApp;
