export default function editTodo(toDo, i, newDescription) {
    toDo[i].description = newDescription;
    localStorage.setItem('toDo', JSON.stringify(toDo));
    return toDo;
  }