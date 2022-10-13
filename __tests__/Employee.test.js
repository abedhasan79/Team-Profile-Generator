const Employee = require('../lib/Employee');

describe('Employee class', ()=>{
    describe('getName method', ()=>{
        it('gets thhe name of employee', ()=>{
            const employee = new Employee('Abed', 2, 'abed@gmail.com');
            expect(employee.getName()).toBe('Abed');
        });
    });

    describe('getID method', ()=>{
        it('gets thhe id of employee', ()=>{
            const employee = new Employee('Abed', 2, 'abed@gmail.com');
            expect(employee.getId()).toBe(2);
        });
    });

    describe('getEmail method', ()=>{
        it('gets thhe email of employee', ()=>{
            const employee = new Employee('Abed', 2, 'abed@gmail.com');
            expect(employee.getEmail()).toBe('abed@gmail.com');
        });
    });

    describe('getRole method', ()=>{
        it('gets thhe role of employee', ()=>{
            const employee = new Employee('Abed', 2, 'abed@gmail.com');
            expect(employee.getRole()).toBe('Employee');
        });
    });
})