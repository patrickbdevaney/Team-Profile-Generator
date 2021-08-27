const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require("./lib/employee")
const genTeamPage = require('./src/page-template')
const inquirer = require('inquirer');


const fs = require('fs');

let team= []

const managerarr;
const engineerarr = [];  
const internarr = [];

function start() {
    inquirer.prompt([
        {
            message: "Welcome",
            name: "teamname"
        }
    ])
        .then(function(data){
            const name = data.teamname
            finalTeamArray.push(teamName)
            manager();
        })

    
}


function manager(){ inquirer.prompt([
    {
        type: "input",
        message: "List the name of the team manager.",
        name: "name",
    },
    {
        type: "input",
        message: "What is the manager's id?",
        name: "id",
    },
    {
        type: "input",
        message: "Team manager's email?",
        name: "email",
    },
    {
        type: 'input',
        message: "What is the office number for the team manager?",
        name: 'officenumber',
    },
    {
        type: 'list',
        message: "Which kind of employee do you want to add?",
        name: "nextAction",
        choices: ["Engineer", "Intern", "none"],
    }

]) .then(function(data){
    const name = data.name
            const id = team.length + 1
            const email = data.email
            const officenumber = data.officenumber
            const teammember = new Manager(name, id, email, officenumber)
    team.push(manager)
    engineer();
})};

function engineer(){ inquirer.prompt([
    {
        type: "input",
        message: "List the name of the engineer.",
        name: "name",
    },
    {
        type: "input",
        message: "What is the engineer's id",
        name: "id",
    },
    {
        type: "input",
        message: "Engineer's email?",
        name: "email",
    },
    {
        type: "input",
        message: "List the Github username for the engineer.",
        name: "github",
    },
    {
        type: 'list',
        message: "Which kind of employee do you want to add?",
        name: "nextAction",
        choices: ["Engineer", "Intern", "none"],
    }

]) .then(function (data) {
    const name = data.name
    const id = team.length + 1
    const email = data.email
    const github = data.github
    const teammember = new Engineer(name, id, email, github)
    team.push(teammember)
    addTeamMembers()
    intern()
});
};

function intern (){ inquirer.prompt([
    {
        type: "input",
        message: "List the name of the intern",
        name: "name",
    },
    {
        type: "input",
        message: "What is the intern's id?",
        name: "id",
    },
    {
        type: "input",
        message: "Intern's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What school does the intern attend?",
        name: "school",
    },
    {
        type: 'list',
        message: "Which kind of employee do you want to add?",
        name: "nextAction",
        choices: ["Engineer", "Intern", "none"],
    }

]) .then(function (data) {
    const name = data.name
    const id = finalTeamArray.length + 1
    const email = data.email
    const school = data.school
    const teammember = new Intern(name, id, email, school)
    team.push(teammember)
    addTeamMembers()
});};

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Engineer", "Intern", "Build Team"],
            name: "newmember"
        }
    ])

        .then(function (data) {

            switch (data.newmember) {
                case "Yes, add an engineer":
                    engineer();
                    break;

                case "Yes, add an intern":
                    intern();
                    break;
                case "No, my team is complete":
                    team();
                    break;
            }
        });
     
        function build() {
        
            const htmlarr = []
            const html = `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${finalTeamArray[0]}</title>
            <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
            <style>
             ${style}
            </style>
        </head>

        <body>
    <div class="banner-bar">
        <h1>${team[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlarr.push(html);

    for (let i = 1; i< team.length; i+1) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${team[i].name}</h2>
                <h2>${team[i].title}</h2>
            </div>
            <div class="card-middle">
                <p>Employee ID: ${team[i].id}</p>
                <p>Email: <a href="mailto:${team[i].email}">${team[i].email}</a>></p>`

                const html = `
                </div>
                </body>
                </html>
                `
            htmlArray.push(htmlEnd);
            fs.writeFile(`./generated-html/${team[0]}.html`, htmlarr.join(""), function (err) {
                    
                })
            }
            
            start()}};