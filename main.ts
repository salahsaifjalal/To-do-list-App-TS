import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.bgMagentaBright("This is a CLI based to-do-list App "));
let toDoList = [];
let checkCondition=true;

while(checkCondition) {
const userQuestionAnswer = await inquirer.prompt([

    {
        name: "userQuestion",
        type: "input",
        message:chalk.bold.bgGreen("What would you like to add in your to-do-list?")
    },
    {
        name: "userNextQuestion",
        type: "confirm",
        message: chalk.bold.bgBlackBright("Would you like to add more in your to-do-list?"),
        default: "true"
    }

])

toDoList.push(userQuestionAnswer.userQuestion);
checkCondition=userQuestionAnswer.userNextQuestion
}

console.log(toDoList)