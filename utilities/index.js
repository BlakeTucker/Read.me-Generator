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
        type: 'input',
        name: 'github',
        message: 'Github username'
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
       {
        type: 'input',
        name: 'Test',
        message: 'Tests:'
       },
       {
        type: 'input',
        name: 'email',
        message: 'Add your email address.'
       },
       {
        type: 'input',
        name: 'contribute',
        message: 'What did you contribute, if you did so.'
       },
       {
        type: 'input',
        name: 'install',
        message: 'How to install your project.'
       },

]