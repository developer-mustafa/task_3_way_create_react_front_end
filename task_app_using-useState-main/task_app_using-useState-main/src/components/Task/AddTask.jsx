import React from "react";

const AddTask = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.text.value);
    e.target.text.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Task" name="text" />
      <button>add</button>
    </form>
  );
};

export default AddTask;
