//gets the employee.js file
const Employee = require('./Employee');

//Intern class inherits properties from employee class
class Intern extends Employee{
    constructor(name, id, email, school){
        //inherit from superclasss
        super(name, id, email);
        this.school=school;
    }
    //gets interns school
    getSchool(){
        console.log(this.school);
        return this.school;
    }
    //overrides role in employee class
    getRole(){
        return `Intern`;
    }
}

// const intern = new Intern('Tashfia', 19, 'tashfiaHq@gmail.com', 'Gordon bell');
// intern.getName();
// intern.getId();
// intern.getEmail();
// intern.getSchool();
// intern.getRole();

module.exports = Intern;