const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGitHub(){
        console.log(this.github);
        return this.github;
    }
    getRole(){
        console.log('Engineer');
        return `Engineer`;
    }
}

// const engineer = new Engineer('Tasneem', 18, 'tasneemhoque@gmail.com', 'tasneemHoque');
// engineer.getName();
// engineer.getId();
// engineer.getEmail();
// engineer.getGitHub();
// engineer.getRole();

module.exports = Engineer;