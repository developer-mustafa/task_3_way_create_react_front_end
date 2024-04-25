import IdGenerate from "../utilities/IdGenerate";

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "addTask": {
      console.log(action);
      return [
        ...state,
        {
          id: IdGenerate(state) + 1,
          text: action.payload,
          isCompleted: false,
        },
      ];
    }

    case "editTask": {
      const updatedTask = state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });

      return updatedTask;
    }

    case "deleteTask": {
      return state.filter((task) => task.id !== action.payload);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default TaskReducer;
