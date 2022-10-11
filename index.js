const inquirer = require('inquirer');
const fs = require('fs');

function generateHtmlMarkdown(data){
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

function createEngineer(){
    inquirer
        .prompt([
            {
                type:'input',
                message:'Engineer name?',
                name:'engineerName'
            },
            {
                type:'input',
                message:'Engineer id?',
                name:'engineerId'
            },
            {
                type:'input',
                message:'Engineer email?',
                name:'engineerEmail'
            },
            {
                type:'input',
                message:'Engineer Github?',
                name:'engineerGithub'
            }
        ])
        .then(response => writeToFile(fileName, generateHtmlMarkdown(response)));
}

function createIntern(){
    inquirer
        .prompt([
            {
                type:'input',
                message:'Intern name?',
                name:'internName'
            },
            {
                type:'input',
                message:'Intern id?',
                name:'internId'
            },
            {
                type:'input',
                message:'Intern email?',
                name:'internEmail'
            },
            {
                type:'input',
                message:'Intern School?',
                name:'internSchool'
            }
        ])
        .then(response => writeToFile(fileName, generateHtmlMarkdown(response)));
}

function createManager(){
    inquirer
        .prompt([
            {
                type:'input',
                message:'Manager name?',
                name:'managerName'
            },
            {
                type:'input',
                message:'Manager id?',
                name:'managerId'
            },
            {
                type:'input',
                message:'Manager email?',
                name:'managerEmail'
            },
            {
                type:'input',
                message:'Manager Office Number?',
                name:'managerOfficeNumber'
            }
        ])
        .then(response => writeToFile(fileName, generateHtmlMarkdown(response)));
}

function teamBuildOption(){
    
}

//creates a file
let fileName = 'dist/generatedIndex.html'
function writeToFile(fileName, data){
    fs.appendFile(fileName,data, (err) =>{
        err ? console.error(err) : console.log('Created')
    });
}

//initialize the app
function init(){
    createManager();
    

}

init();