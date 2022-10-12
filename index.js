const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function generateHtmlMarkdown(employeeInfo) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="../dist/style.css">

</head>

<body>
    <header>
        <div class="jumbotron jumbotron-fluid">
            <div class="container text-center">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
    </header>

    <main class="main">
        <div class="container-fluid row  justify-content-center">
                ${employeeInfo}
        </div>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
    <script src="../index.js"></script>
</body>

</html>`
}

function generateManagerHtml(manager) {
    return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <h5 class="card-title">Manager</eh5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${manager.id}</li>
                <li class="list-group-item">${manager.email}</li>
                <li class="list-group-item">${manager.officeNumber}</li>
            </ul>
        </div>
    `;
}

function generateEngineerHtml(engineer) {
    return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <h5 class="card-title">Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${engineer.id}</li>
                <li class="list-group-item">${engineer.email}</li>
                <li class="list-group-item">${engineer.github}</li>
            </ul>
        </div>
    `;
}

function generateInternHtml(intern) {
    return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <h5 class="card-title">Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${intern.id}</li>
                <li class="list-group-item">${intern.email}</li>
                <li class="list-group-item">${intern.school}</li>
            </ul>
        </div>
    `;
}

function generateHTML(data) {
    let arr = [];
    let employee;
    let role;
    let managerSection;
    let engineerSection;
    let internSection;
    for (let i = 0; i < data.length; i++) {
        employee = data[i];
        role = employee.getRole();
    }

    if (role === 'Manager') {
        managerSection = generateManagerHtml(employee);
        arr.push(managerSection);
    }

    if (role === 'Engineer') {
        engineerSection = generateEngineerHtml(employee);
        arr.push(engineerSection);
    }

    if (role === 'Intern') {
        internSection = generateInternHtml(employee);
        arr.push(internSection);
    }

    return generateHtmlMarkdown(arr.join(''));
}
let team = [];

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
            let employee;
            if (response.engineerOrIntern === 'Engineer') {
                employee = new Engineer(response.employeeName, response.employeeId, response.employeeEmail, response.engineerGithub);
            }
            if (response.engineerOrIntern === 'Intern') {
                employee = new Intern(response.employeeName, response.employeeId, response.employeeEmail, response.internSchool);
            }
            team.push(employee);

            if (response.addEmployee) {
                return createEmployee(team);
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