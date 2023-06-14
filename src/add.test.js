/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';
import { AddToDo } from './add.js';


describe('test add ', () => {
  it('Add tasks to local storage', () => {
    
    const input = document.querySelectorAll('list-container');
    console.log(new AddToDo());
    const newAddToDo = new AddToDo();

    newAddToDo.addToDo('hello')
    newAddToDo.addToDo('start')
    newAddToDo.addToDo('middle')
    newAddToDo.addToDo('finish')
    newAddToDo.addToDo('well-done')

    // const ssss = JSON.parse(localStorage.getItem('toDo'))
    // console.log(ssss)

    expect(JSON.parse(localStorage.getItem('toDo'))).toEqual([
      { description: 'hello', completed: false, num: 1 },
      { description: 'start', completed: false, num: 2 },
      { description: 'middle', completed: false, num: 3 },
      { description: 'finish', completed: false, num: 4 },
      { description: 'well-done', completed: false, num: 5 },
    ]);
  });
});