const Employee = require('./Employee');
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        console.log(this.officeNumber);
        return this.officeNumber;
    }
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