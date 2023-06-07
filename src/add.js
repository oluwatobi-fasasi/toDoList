class AddToDo {
    constructor() {
      this.toDo = JSON.parse(localStorage.getItem('toDo')) || [];
      this.form = document.getElementById('submit-form');
      this.userInput = document.getElementById('add-list');
    }
  
    addToDo(description) {
      const addToDoObj = { description, completed: false, index: this.toDo.length + 1 };
      this.toDo.push(addToDoObj);
      localStorage.setItem('toDo', JSON.stringify(this.toDo));
    }
  
    activ() {
      this.userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.addToDo(this.userInput.value.trim());
          this.form.submit();
          this.form.reset();
        }
      });
    }
  }
  
  export default function activ() {
    const newToDo = new AddToDo();
    newToDo.activ();
  }