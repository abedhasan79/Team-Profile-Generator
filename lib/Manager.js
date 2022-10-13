//gets the employee.js file
const Employee = require('./Employee');

//Manager class inherits properties from employee class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        //inherit from superclasss
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //get manager office number
    getOfficeNumber(){
        console.log(this.officeNumber);
        return this.officeNumber;
    }
    //overrides role in employee class
    getRole(){
        console.log('Manager');
        return `Manager`;
    }
}

// const manager = new Manager('Abed', 14, 'abedhasan79@gmail.com', 21);
// manager.getName();
// manager.getId();
// manager.getEmail();
// manager.getOfficeNumber();
// manager.getRole();
module.exports = Manager;