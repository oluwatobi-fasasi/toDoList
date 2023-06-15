function status(todo, toDo) {
  if (todo.completed === false) {
    todo.completed = true;
  } else {
    todo.completed = false;
  }
  localStorage.setItem('toDo', JSON.stringify(toDo));
}

export default status;