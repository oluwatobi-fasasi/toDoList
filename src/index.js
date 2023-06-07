import './style.css';
import activ from './add.js';
import removeTodo from './remove.js';
import editTodo from './edit.js';
import deleteCompleted from './completed.js';

class ToDo {
  constructor() {
    this.toDo = JSON.parse(localStorage.getItem('toDo')) || [];
    this.listContainer = document.getElementById('list-container');
    this.clearAllCompleted = document.getElementById('clear');
  }

  renderToDo() {
    this.listContainer.innerHTML = '';
    for (let i = 0; i < this.toDo.length; i += 1) {
      const todo = this.toDo[i];
      const div = document.createElement('div');
      div.classList.add('wrapper');
      const hr = document.createElement('hr');
      const divCard = document.createElement('div');
      divCard.classList.add('card');
      const divInputLabel = document.createElement('div');
      divInputLabel.classList.add('input-label');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.classList.add('box');
      const label = document.createElement('input');
      label.value = `${todo.description}`;
      label.classList.add('list');
      const Icon = document.createElement('span');
      Icon.classList.add('material-symbols-sharp');
      Icon.textContent = 'more_vert';
      const deleteIcon = document.createElement('span');
      deleteIcon.classList.add('material-symbols-outlined');
      deleteIcon.textContent = 'delete';
      deleteIcon.style.display = 'none';

      divInputLabel.appendChild(checkBox);
      divInputLabel.appendChild(label);

      divCard.appendChild(divInputLabel);
      divCard.appendChild(Icon);
      divCard.appendChild(deleteIcon);

      div.appendChild(hr);
      div.appendChild(divCard);

      this.listContainer.appendChild(div);

      Icon.addEventListener('click', () => {
        Icon.style.display = 'none';
        deleteIcon.style.display = 'inline';
        deleteIcon.addEventListener('click', () => {
          this.toDo = removeTodo(this.toDo, i);
          localStorage.setItem('toDo', JSON.stringify(this.toDo));
          window.location.reload();
          this.renderToDo();
        });
      });

      label.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          const newDescription = label.value.trim();
          if (newDescription !== '') {
            this.toDo = editTodo(this.toDo, i, newDescription);
            this.renderToDo();
          } else {
            label.value = todo.description;
          }
        }
      });

      checkBox.addEventListener('change', () => {
        label.classList.toggle('checked');
        if (todo.completed === false) {
          todo.completed = true;
        } else {
          todo.completed = false;
        }
        localStorage.setItem('toDo', JSON.stringify(this.toDo));
      });
    }
  }

  init() {
    activ();
    this.clearAllCompleted.addEventListener('click', () => {
      deleteCompleted();
    });
    this.renderToDo();
  }
}

const newToDo = new ToDo();
newToDo.init();