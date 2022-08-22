const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const manager = new Manager("Dave", 1, "test@test.com", 100);
  expect(manager.officeNumber).toBe(100);
});

test("getRole() should return \"Manager\"", () => {
  const manager = new Manager("Dave", 1, "test@test.com", 100);
  expect(manager.getRole()).toBe("Manager");
});

test("Can get office number via getOffice()", () => {
  const manager = new Manager("Dave", 1, "test@test.com", 100);
  expect(manager.getOfficeNumber()).toBe(100);
});