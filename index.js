#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function main() {
    const tasks = [];
    console.log(chalk.red('\nWELCOME TO TO-DO APP!'));
    while (true) {
        const { task } = await inquirer.prompt({
            name: 'task',
            type: 'input',
            message: chalk.yellow('\nPLEASE ENTER YOUR TO-DO TASK:'),
            prefix: ''
        });
        tasks.push(task.toUpperCase()); //converts all added tasks to upper case
        const { moreTasks } = await inquirer.prompt({
            name: 'moreTasks',
            type: 'confirm',
            message: chalk.yellow('\nDO YOU HAVE MORE TASKS TO ADD?'),
            prefix: ''
        });
        if (!moreTasks)
            break; //breaks the operation if there are no more tasks
    }
    console.log(chalk.blue('\nYOUR ENTERED TASKS ARE:\n'));
    tasks.forEach((task, index) => {
        console.log(chalk.magenta(`${index + 1}. ${task}`)); //prints the next index without disturbing the previous one
    });
}
main();
