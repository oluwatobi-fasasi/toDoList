/**
 * @jest-environment jsdom
 */

import status from './status.js';

describe('test status ', () => {
  it('should update task status when checkbox is checked', () => {
    const myArray = [];
    myArray.push(
      { description: 'hello', completed: false, num: 1 },
      { description: 'start', completed: false, num: 2 },
      { description: 'middle', completed: false, num: 3 },
      { description: 'finish', completed: false, num: 4 },
      { description: 'well-done', completed: false, num: 5 },
    );
    const checked = myArray[2];
    status(checked, myArray);

    expect(checked.completed).toBe(true);
  });
});