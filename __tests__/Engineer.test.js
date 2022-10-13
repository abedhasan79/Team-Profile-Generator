const Engineer = require('../lib/Engineer');

describe('Engineer class', ()=>{
    describe('getName method', ()=>{
        it('gets the name of engineer', ()=>{
            const engineer = new Engineer('Abed', 2, 'abed@gmail.com', 'abedhasan79');
            expect(engineer.getName()).toBe('Abed');
        });
    });

    describe('getId method', ()=>{
        it('gets the id of engineer', ()=>{
            const engineer = new Engineer('Abed', 2, 'abed@gmail.com', 'abedhasan79');
            expect(engineer.getId()).toBe(2);
        });
    });

    describe('getEmail method', ()=>{
        it('gets the email of engineer', ()=>{
            const engineer = new Engineer('Abed', 2, 'abed@gmail.com', 'abedhasan79');
            expect(engineer.getEmail()).toBe('abed@gmail.com');
        });
    });

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