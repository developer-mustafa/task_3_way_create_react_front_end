import React, { createContext, useContext, useReducer } from "react";
import TaskReducer from "../Reducer/TaskReducer";
import data from "../data";

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, data);

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
  };
  return (
    <TaskContext.Provider
      value={{ tasks, handleAddTask, handleEditTask, handleDeleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
const useTask = () => useContext(TaskContext);
export { TaskContextProvider, useTask };
