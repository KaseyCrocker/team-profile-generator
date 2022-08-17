const Employee = require('../lib/Employee');

describe("Employee", () => {
    test("Can instantiate Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    test("Can set name via constructor arguments", () => {
        const employee = new Employee('Dave');
        expect(employee.name).toBe('Dave');
    });

    test("Can set id via constructor argument", () => {
        const emplyoee = new Employee('Dave', 100);
        expect(emplyoee.id).toBe(100);
    });

    test("Can set email via constructor argument", () => {
        const employee = new Employee('Dave', 1, 'test@test.com');
        expect(employee.email).toBe('test@test.com');
    });

    describe("getName", () => {
        test("Can get name via getName()", () => {
            const employee = new Employee('Dave');
            expect(employee.getName()).toBe('Dave');
        });
    });
        
    describe("getId", () => {
        test("Can get id via getId()", () => {
            const employee = new Employee('Dave', 100);
            expect(employee.getId()).toBe(100);
        });
    });
        
    describe("getEmail", () => {
        test("Can get email via getEmail()", () => {
            const employee = new Employee('Dave', 1, 'test@test.com');
            expect(employee.getEmail()).toBe('test@test.com');
        });
    });
        
    describe("getRole", () => {
        test("getRole() should return \"Employee\"", () => {
            const employee = new Employee('Dave', 1, "test@test.com");
            expect(employee.getRole()).toBe('Employee');
        });
    });
    
});