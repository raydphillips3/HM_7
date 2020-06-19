const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name"

        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        },
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "again"
        },

    ]).then(function (response) {
        console.log(response);
        console.log(response.again);
        var next = response.again;
        console.log("This is next " + next);
        if (next) {
            const collectInputs = async (inputs = []) => {
                const prompts = [
                    {
                        type: "list",
                        message: "What type of employee would you like to add?",
                        choices: ["Engineer", "Intern"],
                        name: "quest"
                    },
                
                    {
                        type: "input",
                        message: "What is the intern's name?",
                        name: "internName"
                    },
                    {
                        type: "input",
                        message: "Waht is the intern's ID?",
                        name: "internId"
                    },
                    {
                        type: "input",
                        message: "What is the intern's email address?",
                        name: "internEmail"
                    },
                    {
                        type: "input",
                        message: "What school does the intern attend?",
                        name: "school"
                    },
                    {
                        type: "confirm",
                        message: "Would you like to add another employee?",
                        name: "again"
                    },
                    //=========Engineer===================================
                    {
                        type: "input",
                        message: "What is the engineer's name?",
                        name: "engName"
                    },
                    {
                        type: "input",
                        message: "Waht is the engineer's ID?",
                        name: "engId"
                    },
                    {
                        type: "input",
                        message: "What is the engineer's email address?",
                        name: "engEmail"
                    },
                    {
                        type: "input",
                        message: "What is the engineer's GitHub username?",
                        name: "github"
                    },
                    {
                        type: "confirm",
                        message: "Would you like to add another employee?",
                        name: "again"
                    }
                ];

                const { again, ...answers } = await inquirer.prompt(prompts);
                const newInputs = [...inputs, answers];
                return again ? collectInputs(newInputs) : newInputs;
            }
            
                const main = async () => {
                const inputs = await collectInputs();
                console.log(inputs);
            };
            
            main();
        };
    })