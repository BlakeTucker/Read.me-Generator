const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project name:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
       },
       {
        type: 'list',
        name: 'licensing',
        message: 'What license/lisences will your project need?'
       },
       {
        type: 'input',
        name: 'Usage',
        message: 'Explain anything your user should know before/while using your project.'
       },
]