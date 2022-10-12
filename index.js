const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML=require('./src/htmlMarkdown');

const team = [];

function createManager() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Manager name?',
                name: 'managerName'
            },
            {
                type: 'input',
                message: 'Manager id?',
                name: 'managerId'
            },
            {
                type: 'input',
                message: 'Manager email?',
                name: 'managerEmail'
            },
            {
                type: 'input',
                message: 'Manager Office Number?',
                name: 'managerOfficeNumber'
            }


        ])
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            console.log(manager);
            team.push(manager);
        });
}


function createEmployee() {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'add an engineer or intern to your team',
                name: 'engineerOrIntern',
                choices: ['Engineer', 'Intern']
            },

            {
                type: 'input',
                message: 'employee name?',
                name: 'employeeName',

            },
            {
                type: 'input',
                message: 'employee id?',
                name: 'employeeId',

            },
            {
                type: 'input',
                message: 'employee email?',
                name: 'employeeEmail',

            },
            {
                type: 'input',
                message: 'Intern School?',
                name: 'internSchool',
                when: (input) => input.engineerOrIntern === "Intern"
            },
            {
                type: 'input',
                message: 'Engineer Github?',
                name: 'engineerGithub',
                when: (input) => input.engineerOrIntern === "Engineer"
            },
            {
                type: 'confirm',
                message: 'add more team members?',
                name: 'addEmployee',
                default: false
            }

        ])
        .then(response => {
            
            if (response.engineerOrIntern === 'Engineer') {
                const engineer = new Engineer(response.employeeName, response.employeeId, response.employeeEmail, response.engineerGithub);
                console.log(engineer);
                team.push(engineer);
            }
            if (response.engineerOrIntern === 'Intern') {
                const intern = new Intern(response.employeeName, response.employeeId, response.employeeEmail, response.internSchool);
                console.log(intern);
                team.push(intern);
            }
            

            if (response.addEmployee) {
                return createEmployee();
            } else {
                return team;
            }
        });
}


//creates a file
let fileName = 'dist/generatedIndex.html'
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Created')
    });
}

//initialize the app
createManager()
    .then(createEmployee)
    .then(team => { return generateHTML(team) })
    .then(html => { return writeToFile(fileName, html) })
    .catch(err => { console.log(err) });