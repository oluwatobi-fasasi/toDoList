/**
 * @jest-environment jsdom
 */

import editTodo from "./edit.js";

describe('test edit', () => {
    it('Edit task',()=>{
        const myArray = [];
        myArray.push(
            { description: 'hello', completed: false, num: 1 },
            { description: 'start', completed: false, num: 2 },
            { description: 'middle', completed: false, num: 3 },
            { description: 'finish', completed: false, num: 4 },
            { description: 'well-done', completed: false, num: 5 },
    );
    editTodo(myArray, 0, 'first');
    editTodo(myArray, 2, 'third');
    editTodo(myArray, 4, 'fifth');

    expect(myArray).toEqual(
        [
            { description: 'first', completed: false, num: 1 },
            { description: 'start', completed: false, num: 2 },
            { description: 'third', completed: false, num: 3 },
            { description: 'finish', completed: false, num: 4 },
            { description: 'fifth', completed: false, num: 5 },,
        ],
      );
    });
    
    });

    
  
    
  