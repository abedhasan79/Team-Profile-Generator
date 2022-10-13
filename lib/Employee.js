//employee class
class Employee {
    //constructer
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //get name
    getName() {
        console.log(this.name);
        return this.name;
    }
    //get id
    getId() {
        console.log(this.id);
        return this.id;
    }
    //get email
    getEmail() {
        console.log(this.email);
        return this.email;
    }
    //get role
    getRole() {
        return `Employee`;
    }
}

//export the employee class
module.exports = Employee;