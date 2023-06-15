function removeTodo(toDo, i) {
  toDo.splice(i, 1);
  for (let i = 0; i < toDo.length; i += 1) {
    toDo[i].num = i + 1;
  }
  return toDo;
}

export default removeTodo;