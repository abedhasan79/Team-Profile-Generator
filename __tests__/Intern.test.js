const Intern = require('../lib/Intern');

describe('Intern class', ()=>{
    describe('getName method', ()=>{
        it('gets the name of intern', ()=>{
            const intern = new Intern('Abed', 2, 'abed@gmail.com', 'Gordon Bell');
            expect(intern.getName()).toBe('Abed');
        });
    });

    describe('getId method', ()=>{
        it('gets the id of intern', ()=>{
            const intern = new Intern('Abed', 2, 'abed@gmail.com', 'Gordon Bell');
            expect(intern.getId()).toBe(2);
        });
    });

    describe('getEmail method', ()=>{
        it('gets the email of intern', ()=>{
            const intern = new Intern('Abed', 2, 'abed@gmail.com', 'Gordon Bell');
            expect(intern.getEmail()).toBe('abed@gmail.com');
        });
    });

    describe('getSchool method', ()=>{
        it('gets the school of intern', ()=>{
            const intern = new Intern('Abed', 2, 'abed@gmail.com', 'Gordon Bell');
            expect(intern.getSchool()).toBe('Gordon Bell');
        });
    });
    describe('getRole method', ()=>{
        it('gets the role of intern', ()=>{
            const intern = new Intern('Abed', 2, 'abed@gmail.com', 'Gordon Bell');
            expect(intern.getRole()).toBe('Intern');
        });
    });
})