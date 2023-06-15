/**
 * @jest-environment jsdom
 */

import deleteCompleted from "./completed.js";

describe('Clear All', () => {
    it('Clear all finished tasks',()=>{
        const myArray = [];
        myArray.push(
            { description: 'hello', completed: true, num: 1 },
            { description: 'start', completed: false, num: 2 },
            { description: 'middle', completed: true, num: 3 },
            { description: 'finish', completed: false, num: 4 },
            { description: 'well-done', completed: false, num: 5 },
    );
    deleteCompleted(myArray);
    console.log(myArray);

    expect(JSON.parse(localStorage.getItem('toDo'))).toEqual(
        [
            { description: 'start', completed: false, num: 1 },
            { description: 'finish', completed: false, num: 2 },
            { description: 'well-done', completed: false, num: 3 },
        ],
      );
    });
    
    });