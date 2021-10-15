const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('Creates new employee object', () => {
    const employee = new Employee('kc', '1', 'hudi1007@gmail.com');

    expect(employee.name).toBe('kc');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('hudi1007@gmail.com');
});

test('gets employees name', () => {
    const employee = new Employee('lydia', '2', 'lchun@iteris.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employees id', () => {
    const employee = new Employee('mario', '3', 'mario@iteris.com');

    expect(employee.getId()).toEqual(expect.any(String));
});

test('gets employees email', () => {
    const employee = new Employee('kc', '1', 'hudi1007@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets the employees role', () => {
    const employee = new Employee('kc', '1', 'hudi1007@gmail.com');

    expect(employee.getRole()).toBe("Role: Employee");
});