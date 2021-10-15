const { test, expect } = require("@jest/globals")
const Intern = require("../lib/Intern")

test('creates intern object', () => {
    const intern = new Intern('kc', '1', 'hudi1007@gmail.com', 'UCI');

    expect(intern.name).toBe('kc');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('hudi1007@gmail.com');
    expect(intern.school).toBe('UCI');
});

test('gets the interns school', () => {
    const intern = new Intern('kc', '1', 'hudi1007@gmail.com', 'UCI');

    expect(intern.getSchool()).toBe('School: UCI');
});

test('gets the interns role', () => {
    const intern = new Intern('kc', '1', 'hudi1007@gmail.com', 'UCI');

    expect(intern.getRole()).toBe('Role: Intern');
});