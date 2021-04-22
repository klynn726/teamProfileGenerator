const Manager = require('../lib/manager.js');

test('manager extends employee and adds office number', () => {
  const manager = new Manager ("Pope", "Pius V", 1, "PopePiusV@vatican.com", 4)
  expect(manager.firstName).toEqual(expect.any(String));
  expect(manager.lastName).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.role).toBe('Manager');
});

test('given function getName', () => {
  const manager = new Manager ("Pope", "Pius V", 1, "PopePiusV@vatican.com", 4)
  expect(manager.firstName).toBe('Pope');
  expect(manager.lastName).toBe('Pius V');
});

test('given function getId', () => {
  const manager = new Manager ("Pope", "Pius V", 1, "PopePiusV@vatican.com", 4)
  expect(manager.id).toEqual(expect.any(Number));
});


//expect.stringContaining in docs https://jestjs.io/docs/expect#expectstringcontainingstring
test('given function getEmail', () => {
  const manager = new Manager ("Pope", "Pius V", 1, "PopePiusV@vatican.com", 4)
  expect(manager.email).toEqual(expect.stringContaining('@'));
});

test('given function getRole', () => {
  const manager = new Manager ("Pope", "Pius V", 1, "PopePiusV@vatican.com", 4)
  expect(manager.role).toBe('Manager');
})

test('get office number', () => {
  const manager = new Manager ("Pope", "Pius V", 1, "PopePiusV@vatican.com", 4)
  expect(manager.officeNumber).toEqual(expect.any(Number));
})