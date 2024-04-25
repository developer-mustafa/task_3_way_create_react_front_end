import React, { useState } from "react";

const TaskItem = ({ task, onEdit, onAlert }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { id, text, isCompleted } = task || {};
  return (
    <div>
      {isEdit ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => onEdit({ ...task, text: e.target.value })}
          />
          <button onClick={() => setIsEdit(!isEdit)}>save</button>
        </>
      ) : (
        <>
          {" "}
          <label onClick={() => onEdit({ ...task, isCompleted: !isCompleted })}>
            <input type="checkbox" />
            {text}
          </label>
          <button onClick={() => setIsEdit(!isEdit)}>edit</button>
        </>
      )}

      <button onClick={() => onAlert(id)}>delete</button>
    </div>
  );
};

export default TaskItem;
