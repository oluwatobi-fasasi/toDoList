const deleteCompleted = (toDo) => {
  toDo = toDo.filter((todo) => !todo.completed);
  for (let i = 0; i < toDo.length; i += 1) {
    toDo[i].num = i + 1;
  }
  localStorage.setItem('toDo', JSON.stringify(toDo));
};

export default deleteCompleted;