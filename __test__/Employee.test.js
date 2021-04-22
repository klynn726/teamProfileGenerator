const Employee = require('../lib/Employee.js');

test('Employee enters name id and email', () => {
  const employee = new Employee ("Elizabeth", "Tudor", 1, "ETudor@cox.net");
// adapted from module player.test.js file
  expect(employee.firstName).toEqual(expect.any(String));
  expect(employee.lastName).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.role).toBe('Employee');

});

test('given function getName', () => {
  const employee = new Employee ("Elizabeth", "Tudor", 1, "ETudor@cox.net");
  expect(employee.firstName).toBe('Elizabeth');
  expect(employee.lastName).toBe('Tudor');
});

test('given function getId', () => {
  const employee = new Employee ("Elizabeth", "Tudor", 1, "ETudor@cox.net");
  expect(employee.id).toEqual(expect.any(Number));
});


//expect.stringContaining in docs https://jestjs.io/docs/expect#expectstringcontainingstring
test('given function getEmail', () => {
  const employee = new Employee ("Elizabeth", "Tudor", 1, "ETudor@cox.net");
  expect(employee.email).toEqual(expect.stringContaining('@'));
});

test('given function getRole', () => {
  const employee = new Employee ("Elizabeth", "Tudor", 1, "ETudor@cox.net");
  expect(employee.role).toBe('Employee');
})