const Engineer = require('../lib/Engineer');

//tests Engineer class
describe('Engineer class', ()=>{

    // tests getName method
    describe('getName method', ()=>{
        it('gets the name of engineer', ()=>{
            const engineer = new Engineer('Abed', 2, 'abed@gmail.com', 'abedhasan79');
            expect(engineer.getName()).toBe('Abed');
        });
    });

    //tests getID method
    describe('getId method', ()=>{
        it('gets the id of engineer', ()=>{
            const engineer = new Engineer('Abed', 2, 'abed@gmail.com', 'abedhasan79');
            expect(engineer.getId()).toBe(2);
        });
    });

    //test getEmail method
    describe('getEmail method', ()=>{
        it('gets the email of engineer', ()=>{
            const engineer = new Engineer('Abed', 2, 'abed@gmail.com', 'abedhasan79');
            expect(engineer.getEmail()).toBe('abed@gmail.com');
        });
    });

    //test getGithub method
    describe('getGithub method', ()=>{
        it('gets the git hub username of engineer', ()=>{
            const engineer = new Engineer('Abed', 2, 'abed@gmail.com', 'abedhasan79');
            expect(engineer.getGitHub()).toBe('abedhasan79');
        });
    });
    describe('getRole method', ()=>{
        it('gets the role of engineer', ()=>{
            const engineer = new Engineer('Abed', 2, 'abed@gmail.com', 'abedhasan79');
            expect(engineer.getRole()).toBe('Engineer');
        });
    });
})