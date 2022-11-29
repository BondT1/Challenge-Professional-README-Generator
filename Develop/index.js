// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('You must enter a title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what is project',
        message: 'What is your project?',
        validate: projectWhat => {
            if (projectWhat) {
                return true;
            } else {
                console.log('Please enter a description of what your project is');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project purpose',
        message: 'What is the purpose of your project?',
        validate: purpose => {
            if (purpose) {
                return true;
            } else {
                console.log('Please enter the purpose of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project features',
        message: 'What features did you use to create your project? (e.g coding language/features)',
        validate: features => {
            if (features) {
                return true;
            } else {
                console.log('Please enter the features used to create your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions on how to install your project',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('You must provide instructions on how to install your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('You must provide instructions and examples for use');
                return false;
            }
        }
    },
    { 
        type: 'choices',
        name: 'license',
        message: 'Which license would you like to use for your project?',
        choices: ['MIT', 'Apache', 'no license']
    },
    {
        type: 'input', 
        name: 'contributors',
        message: 'If you would like to allow contributions to your project please provide contributing guidelines. (if not, type N/A)',
        validate: contributors => {
            if (contributors) {
                return true;
            } else {
                console.log('Please enter contributor guidelines or N/A if you do not want to allow contributors');
            }
        }
    }, 
    {
        type: 'input', 
        name: 'test', 
        message: 'How can your project be tested? Provide instructions on how to run these tests',
        validate: test => {
            if (test) {
                return true;
            } else {
                console.log('Please provide some project test instructions');
            }
        }
    },
    {}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
