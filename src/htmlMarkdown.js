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
</body>

</html>`
}

function generateManagerHtml(manager) {
    return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <h5 class="card-title">Title: Manager</eh5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    `;
}

function generateEngineerHtml(engineer) {
    return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <h5 class="card-title">Title: Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
    `;
}

function generateInternHtml(intern) {
    return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <h5 class="card-title">Title: Intern</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    `;
}

function generateHTML(data) {
    const arr = [];
    
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        if (role === 'Manager') {
            const managerSection = generateManagerHtml(employee);
            arr.push(managerSection);
        }
    
        if (role === 'Engineer') {
           const engineerSection = generateEngineerHtml(employee);
            arr.push(engineerSection);
        }
    
        if (role === 'Intern') {
            const internSection = generateInternHtml(employee);
            arr.push(internSection);
        }
    }

    return generateHtmlMarkdown(arr.join(''));
}

module.exports  = generateHTML;