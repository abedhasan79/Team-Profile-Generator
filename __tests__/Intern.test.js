const Intern = require('../lib/Intern');

//tests intern class
describe('Intern class', ()=>{
    describe('getName method', ()=>{
        it('gets the name of intern', ()=>{
            const intern = new Intern('Abed', 2, 'abed@gmail.com', 'Gordon Bell');
            expect(intern.getName()).toBe('Abed');
        });
    });

    //tests getID method
    describe('getId method', ()=>{
        it('gets the id of intern', ()=>{
            const intern = new Intern('Abed', 2, 'abed@gmail.com', 'Gordon Bell');
            expect(intern.getId()).toBe(2);
        });
    });

    //test getEmail method
    describe('getEmail method', ()=>{
        it('gets the email of intern', ()=>{
            const intern = new Intern('Abed', 2, 'abed@gmail.com', 'Gordon Bell');
            expect(intern.getEmail()).toBe('abed@gmail.com');
        });
    });

    //tests getSchool method
    describe('getSchool method', ()=>{
        it('gets the school of intern', ()=>{
            const intern = new Intern('Abed', 2, 'abed@gmail.com', 'Gordon Bell');
            expect(intern.getSchool()).toBe('Gordon Bell');
        });
    });

    //tests getRole method
    describe('getRole method', ()=>{
        it('gets the role of intern', ()=>{
            const intern = new Intern('Abed', 2, 'abed@gmail.com', 'Gordon Bell');
            expect(intern.getRole()).toBe('Intern');
        });
    });
})