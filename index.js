const genMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');


// function to write README file
function writeToFile(fileName, data) {
    this.data = data
    fs.writeFileSync("README.md", genMarkdown(data), function(err) {
        if (err) throw err
    });
    console.log("ReadMe Created!")
}

// function to initialize program
function init() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your Project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Give a brief description of the Project.',
            },
            {
                type: 'input',
                name: 'install',
                message: 'Give some instructions on how to install your Project!',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What are some usages for this Project?',
            },
            {
                type: 'input',
                name: 'guidelines',
                message: 'What are some contribution guidelines?',
            },
            {
                type: 'input',
                name: 'test',
                message: 'Give some instructions on how to test your Project!',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What license are you using?',
                choices: ['apache-2.0', 'artistic-2.0', 'mpl-2.0','mit', 'osl-3.0', 'ms-pl','gpl-3.0', 'lppl-1.3c', 'unlicense'],
            },
            {
                type: 'input',
                name: 'gituser',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
        ])
        .then((answer) => {
            writeToFile("README.md", answer)
            console.log(answer)

        });
    }
    
        
        


// function call to initialize program
init();
