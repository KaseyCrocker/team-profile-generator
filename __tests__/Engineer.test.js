const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const engineer = new Engineer("Dave", 1, "test@test.com", "GitHubUser");
  expect(engineer.github).toBe("GitHubUser");
});

test("getRole() should return \"Engineer\"", () => {
  const engineer = new Engineer("Dave", 1, "test@test.com", "GitHubUser");
  expect(engineer.getRole()).toBe("Engineer");
});

test("Can get GitHub username via getGithub()", () => {
  const engineer = new Engineer("Dave", 1, "test@test.com", "GitHubUser");
  expect(engineer.getGithub()).toBe("GitHubUser");
});