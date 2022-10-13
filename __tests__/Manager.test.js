const Manager = require('../lib/Manager');

describe('Manager class', ()=>{
    describe('getName method', ()=>{
        it('gets the name of manager', ()=>{
            const manager = new Manager('Abed', 2, 'abed@gmail.com', 5);
            expect(manager.getName()).toBe('Abed');
        });
    });

    describe('getId method', ()=>{
        it('gets the id of manager', ()=>{
            const manager = new Manager('Abed', 2, 'abed@gmail.com', 5);
            expect(manager.getId()).toBe(2);
        });
    });

    describe('getEmail method', ()=>{
        it('gets the email of manager', ()=>{
            const manager = new Manager('Abed', 2, 'abed@gmail.com', 5);
            expect(manager.getEmail()).toBe('abed@gmail.com');
        });
    });

    describe('getOfficeNumber method', ()=>{
        it('gets the office number of manager', ()=>{
            const manager = new Manager('Abed', 2, 'abed@gmail.com', 5);
            expect(manager.getOfficeNumber()).toBe(5);
        });
    });
    describe('getRole method', ()=>{
        it('gets the role of manager', ()=>{
            const manager = new Manager('Abed', 2, 'abed@gmail.com', 5);
            expect(manager.getRole()).toBe('Manager');
        });
    });
})