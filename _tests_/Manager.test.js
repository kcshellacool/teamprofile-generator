const { test, expect } = require("@jest/globals")
const Manager = require("../lib/Manager")

test('creates manager object', () => {
    manager = new Manager('kc', '1', 'hudi1007@gmail.com', '123');

    expect(manager.name).toBe('kc');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('hudi1007@gmail.com');
    expect(manager.officeNumber).toBe('123');
});

test('gets managers office number', () => {
    manager = new Manager('kc', '1', 'hudi1007@gmail.com', '123');

    expect(manager.getOfficeNumber()).toBe('Office Number: 123');
});

test('gets managers role', () => {
    manager = new Manager('kc', '1', 'hudi1007@gmail.com', '123');

    expect(manager.getRole()).toBe("Role: Manager")
})