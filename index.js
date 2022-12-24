// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [];
const promptQuestions = (readmeInput) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
      },
    ])
    .then((readmeInput) => {
      console.log(readmeInput);
    });
};

promptQuestions()
//   .then((readmeInput) => {
//     return generateMarkdown(readmeInput);
//   })
//   .then((pageREADME) => {
//     return fs.writeFile(pageREADME);
//   })
//   .then((writeFileResponse) => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then((copyFileResponse) => {
//     console.log(copyFileResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
