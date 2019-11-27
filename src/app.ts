/* tslint:disable no-console */

import ConsoleService from './services/Console.service';
import StorageService from './services/Storage.service';

StorageService.loadData();

console.clear();
console.log('Welcome to notes I guess..');
console.log();
console.log(`You have ${StorageService.getTotalNotes()} notes`);
console.log(`You have ${StorageService.getTotalTodos()} todo items`);
console.log();

initialPrompt()
  .then((answer) => {
    switch (answer.result) {
      case 1:
        console.log('view ntoes');
        break;

      case 2:
        console.log('view todo');
        break;

      case 3:
        console.log('add note');
        break;

      case 4:
        console.log('add a todo');
        break;

      case 5:
        console.log('see ya');
        process.exit();
    }
  });

function initialPrompt() {
  return ConsoleService.prompt([{
    type: 'list',
    message: 'What would you like to do:',
    name: 'result',
    filter: value => parseInt(value.substring(2, 1), 10),
    choices: [
      '[1] View your notes',
      '[2] View your todos',
      '[3] Add a new note',
      '[4] Add a new todo',
      '[5] Exit',
    ],
  }]);
}
