const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const intern = new Intern("Dave", 1, "test@test.com", "UCLA");
  expect(intern.school).toBe("UCLA");
});

test("getRole() should return \"Intern\"", () => {
  const intern = new Intern("Dave", 1, "test@test.com", "UCLA");
  expect(intern.getRole()).toBe("Intern");
});

test("Can get school via getSchool()", () => {
  const intern = new Intern("Dave", 1, "test@test.com", "UCLA");
  expect(intern.getSchool()).toBe("UCLA");
});