import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.bgMagentaBright("This is a CLI based to-do-list App "));
let toDoList = [];

const userQuestionAnswer = await inquirer.prompt([

    {
        name: "userQuestion",
        type: "input",
        message:"What would you like to add in your to-do-list?"
    }

]);

toDoList.push(userQuestionAnswer.userQuestion);

//console.log(chalk.bold.bgMagentaBright("toDoList"));
console.log(toDoList)