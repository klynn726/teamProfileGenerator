const Intern = require('../lib/intern.js');

test('intern extends employee and adds school', () => {
  const intern = new Intern ("Walter", "Raleigh", 52, "ElDorado@Roanoke.com", "Oxford");
  expect(intern.firstName).toEqual(expect.any(String));
  expect(intern.lastName).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.role).toBe('Intern');
});

test('given function getName', () => {
  const intern = new Intern ("Walter", "Raleigh", 52, "ElDorado@Roanoke.com", "Oxford");
  expect(intern.firstName).toBe('Walter');
  expect(intern.lastName).toBe('Raleigh');
});

test('given function getId', () => {
  const intern = new Intern ("Walter", "Raleigh", 52, "ElDorado@Roanoke.com", "Oxford");
  expect(intern.id).toEqual(expect.any(Number));
});


//expect.stringContaining in docs https://jestjs.io/docs/expect#expectstringcontainingstring
test('given function getEmail', () => {
  const intern = new Intern ("Walter", "Raleigh", 52, "ElDorado@Roanoke.com", "Oxford");
  expect(intern.email).toEqual(expect.stringContaining('@'));
});

test('given function getRole', () => {
  const intern = new Intern ("Walter", "Raleigh", 52, "ElDorado@Roanoke.com", "Oxford");
  expect(intern.role).toBe('Intern');
})

test('school', () => {
  const intern = new Intern ("Walter", "Raleigh", 52, "ElDorado@Roanoke.com", "Oxford");
  expect(intern.school).toEqual(expect.any(String));
})