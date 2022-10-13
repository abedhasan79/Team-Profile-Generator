//gets the employee.js file
const Employee = require('./Employee');

//engineer class inherits properties from employee class
class Engineer extends Employee{

    constructor(name, id, email, github){
        //inherit from superclasss
        super(name, id, email);
        this.github = github;
    }
    //gets user github name
    getGitHub(){
        console.log(this.github);
        return this.github;
    }
    //overrides role in employee class
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