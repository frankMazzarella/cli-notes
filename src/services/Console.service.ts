import inquirer, { Answers } from 'inquirer';

export default class ConsoleService {
  public static prompt(questions: inquirer.QuestionCollection): Promise<Answers> {
    return new Promise((resolve) => {
      inquirer
        .prompt(questions)
        .then((answer) => {
          resolve(answer);
        });
    });
  }
}
