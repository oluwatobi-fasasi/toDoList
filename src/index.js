import './style.css';

class ToDo {
  constructor() {
    this.toDo = [
      {
        description: 'take bath',
        completed: false,
        index: 0,
      },
      {
        description: 'eat',
        completed: false,
        index: 1,
      },
      {
        description: 'read',
        completed: false,
        index: 2,
      },
    ];
    this.listContainer = document.getElementById('list-container');
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
      const label = document.createElement('label');
      label.textContent = `${todo.description}`;
      const Icon = document.createElement('span');
      Icon.classList.add('material-symbols-sharp');
      Icon.textContent = 'more_vert';

      divInputLabel.appendChild(checkBox);
      divInputLabel.appendChild(label);

      divCard.appendChild(divInputLabel);
      divCard.appendChild(Icon);

      div.appendChild(hr);
      div.appendChild(divCard);

      this.listContainer.appendChild(div);
    }
  }

  init() {
    this.renderToDo();
  }
}

const newToDo = new ToDo();
newToDo.init();