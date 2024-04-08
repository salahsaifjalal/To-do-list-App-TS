"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.log(chalk_1.default.bold.bgMagentaBright("This is a CLI based to-do-list App "));
var toDoList = [];
var userQuestionAnswer = await inquirer_1.default.prompt([
    {
        name: "userQuestion",
        type: "input",
        message: "What would you like to add in your to-do-list?",
    },
]);
toDoList.push(userQuestionAnswer.userQuestion);
console.log(chalk_1.default.bold.bgMagentaBright(templateObject_1 || (templateObject_1 = __makeTemplateObject(["toDoList"], ["toDoList"]))));
var templateObject_1;
