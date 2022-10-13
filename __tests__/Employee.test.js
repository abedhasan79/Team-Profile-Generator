const Employee = require('../lib/Employee');
//tests employee class
describe('Employee class', ()=>{
    // tests getName method
    describe('getName method', ()=>{
        it('gets thhe name of employee', ()=>{
            const employee = new Employee('Abed', 2, 'abed@gmail.com');
            expect(employee.getName()).toBe('Abed');
        });
    });

    //tests getID method
    describe('getID method', ()=>{
        it('gets thhe id of employee', ()=>{
            const employee = new Employee('Abed', 2, 'abed@gmail.com');
            expect(employee.getId()).toBe(2);
        });
    });

    //test getEmail method
    describe('getEmail method', ()=>{
        it('gets thhe email of employee', ()=>{
            const employee = new Employee('Abed', 2, 'abed@gmail.com');
            expect(employee.getEmail()).toBe('abed@gmail.com');
        });
    });

    //tests getRole method
    describe('getRole method', ()=>{
        it('gets thhe role of employee', ()=>{
            const employee = new Employee('Abed', 2, 'abed@gmail.com');
            expect(employee.getRole()).toBe('Employee');
        });
    });
})