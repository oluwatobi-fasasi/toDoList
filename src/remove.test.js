/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';
// import { AddToDo } from './add.js';
// import ToDo from './render.js';
import removeTodo from './remove.js';

describe('test remove', () => {
  it('Remove task', () => {
    const myArray = [];
    myArray.push(
      { description: 'hello', completed: false, num: 1 },
      { description: 'start', completed: false, num: 2 },
      { description: 'middle', completed: false, num: 3 },
      { description: 'finish', completed: false, num: 4 },
      { description: 'well-done', completed: false, num: 5 },
    );
    removeTodo(myArray, 2);

    expect(myArray).toEqual(
      [
        { description: 'hello', completed: false, num: 1 },
        { description: 'start', completed: false, num: 2 },
        { description: 'finish', completed: false, num: 3 },
        { description: 'well-done', completed: false, num: 4 },
      ],
    );
  });

  it('Add tasks one li to html', () => {
    const myArray = [];
    myArray.push(
      { description: 'hello', completed: false, num: 1 },
      { description: 'start', completed: false, num: 2 },
      { description: 'middle', completed: false, num: 3 },
      { description: 'finish', completed: false, num: 4 },
      { description: 'well-done', completed: false, num: 5 },
    );
    const initiallength = myArray.length;
    removeTodo(myArray, 2);
    const finallength = myArray.length;

    expect(finallength).toEqual(initiallength - 1);
  });
});