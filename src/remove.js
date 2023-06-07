function removeTodo(toDo, i) {
    toDo.splice(i, 1);
    for (let i = 0; i < toDo.length; i += 1) {
      toDo[i].index = i + 1;
    }
    return toDo;
  }
  
  export default removeTodo;