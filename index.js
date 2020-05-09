generateMarkdown = require('./assets/generateREADME.js');

const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

function getUser(userName) {
    return axios
        .get(
            `https://api.github.com/users/${userName}`
        )
        .catch(err => {
            console.log(`User not found`);
            process.exit(1);
        });
}

function askUser() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is your Github username?",
            name: "userName"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "userEmail",
        },
        {
            type: "input",
            message: "What is your project title?",
            name: "projectTitle",
        },
        {
            type: "input",
            message: "What is the description of this project?",
            name: "projectDescription",
        },
        {
            type: "input",
            message: "What is the path for this project's screenshot?",
            default: "assets/img/screenshot.gif",
            name: "projectImgSRC",
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            default: "`npm install`",
            name: "projectInstall",
        },
        {
            type: "input",
            message: "What command should be run to run the program?",
            default: "`node index.js`",
            name: "projectRun",
        },
        {
            type: "input",
            message: "What command should be run to start tests?",
            default: "`npm test`",
            name: "projectTest",
        },
        {
            type: "input",
            message: "Any additional information about the project?",
            name: "projectInfo",
        },
        {
            type: "input",
            message: "Please input an appropriate license type for this project",
            default: "MIT",
            name: "projectLicense",
        }
        ])
        .then((inquirerResponses) => {
            responses = inquirerResponses
            getUser(inquirerResponses.userName)
                .then((githubResponse) => {
                    // console.log(githubResponse.data.avatar_url);
                    inquirerResponses.avatarURL = githubResponse.data.avatar_url
                    let generatedReadme = generateMarkdown(inquirerResponses);
                    writeToFile('README.md', generatedReadme);
                })
        })

}

function writeToFile(file, data) {
    // use package fs 
    fs.writeFile(file, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}

askUser()