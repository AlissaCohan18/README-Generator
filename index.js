// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/templateMD");
const createMD = require("./utils/generateMD");

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
      {
        type: "input",
        name: "url",
        message: "What is the deployed url?",
      },
    ])
    .then((readmeInput) => {
      console.log(readmeInput);
      return readmeInput;
    });
};

promptQuestions()
  .then((readmeInput) => {
    //create array of the objects to enable .filter/.map
    return generateMarkdown([readmeInput]);
  })
  .then((pageREADME) => {
    return createMD(pageREADME);
  })
 .then((copyFileResponse) => {
   console.log(copyFileResponse);
 })
  .catch((err) => {
    console.log(err);
  });
