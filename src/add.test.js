/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';
import { AddToDo } from './add.js';
import ToDo from './render.js';

describe('test add ', () => {
  it('Add tasks to local storage', () => {
    const newAddToDo = new AddToDo();

    newAddToDo.addToDo('hello');
    newAddToDo.addToDo('start');
    newAddToDo.addToDo('middle');
    newAddToDo.addToDo('finish');
    newAddToDo.addToDo('well-done');

    expect(JSON.parse(localStorage.getItem('toDo'))).toEqual([
      { description: 'hello', completed: false, num: 1 },
      { description: 'start', completed: false, num: 2 },
      { description: 'middle', completed: false, num: 3 },
      { description: 'finish', completed: false, num: 4 },
      { description: 'well-done', completed: false, num: 5 },
    ]);
  });

  it('Add tasks one li to html', () => {
    const newAddToDo = new AddToDo();
    newAddToDo.addToDo('wel-done');
    const newrender = new ToDo();
    newrender.renderToDo();
    const list = document.querySelectorAll('.wrapper');
    const initiallength = list.length;
    newAddToDo.addToDo('wel-done');
    const newrender1 = new ToDo();
    newrender1.renderToDo();
    const finallength = document.querySelectorAll('.wrapper').length;

    expect(finallength).toEqual(initiallength + 1);
  });
});