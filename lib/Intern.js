const Employee = require('./Employee');
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school=school;
    }
    getSchool(){
        console.log(this.school);
        return this.school;
    }
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