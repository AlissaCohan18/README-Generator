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
        name: "contents",
        message: "What is in the table of contents?",
      },
      {
        type: "input",
        name: "installation",
        message: "What are the Installation Instructions?",
      },
      {
        type: "input",
        name: "usage",
        message: "What is your usage information?",
      },
      //type:list user must select only one option from the list
      {
        type: "list",
        name: "license",
        message: "Select the appropriate license",
        choices: ['Apache 2.0','ISC','MIT','Mozilla','Eclipse',''],
      },      
      {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?",
      },
      {
        type: "input",
        name: "tests",
        message: "What are the test instructions?",
      },
      {
        type: "input",
        name: "questions",
        message: "What questions to include?",
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
