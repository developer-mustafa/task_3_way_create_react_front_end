const IdGenerate = (tasks) => {
  let hightId = 0;
  tasks.forEach((task) => {
    if (task.id > hightId) {
      hightId = task.id;
    }
  });
  return hightId;
};

export default IdGenerate;
