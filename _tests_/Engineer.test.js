const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('Creates enginineer object', () => {
    const engineer = new Engineer('kc', '1', 'hudi1007@gmail.com', 'kcshellacool');

    expect(engineer.name).toBe('kc');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('hudi1007@gmail.com');
    expect(engineer.github).toBe('kcshellacool');
});

test('gets engineers github', () => {
    const engineer = new Engineer('kc', '1', 'hudi1007@gmail.com', 'kcshellacool');

    expect(engineer.getGithub()).toBe('https://github.com/kcshellacool/')
})

test('gets role of engineer', () => {
    const engineer = new Engineer('kc', '1', 'hudi1007@gmail.com', 'kcshellacool');

    expect(engineer.getRole()).toBe('Role: Engineer');
});