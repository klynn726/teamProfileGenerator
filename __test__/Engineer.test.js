const Engineer = require('../lib/Engineer.js');

test('engineer extends employee and adds github', () => {
  const engineer = new Engineer ("Sir Francis", "Drake", 22, "SeaDog@HMSGoldenHind.com", "OrderOfMagellan")
  expect(engineer.firstName).toEqual(expect.any(String));
  expect(engineer.lastName).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.role).toBe('Engineer');
});

test('given function getName', () => {
  const engineer = new Engineer ("Sir Francis", "Drake", 22, "SeaDog@HMSGoldenHind.com", "OrderOfMagellan")
  expect(engineer.firstName).toBe('Sir Francis');
  expect(engineer.lastName).toBe('Drake');
});

test('given function getId', () => {
  const engineer = new Engineer ("Sir Francis", "Drake", 22, "SeaDog@HMSGoldenHind.com", "OrderOfMagellan")
  expect(engineer.id).toEqual(expect.any(Number));
});


//expect.stringContaining in docs https://jestjs.io/docs/expect#expectstringcontainingstring
test('given function getEmail', () => {
  const engineer = new Engineer ("Sir Francis", "Drake", 22, "SeaDog@HMSGoldenHind.com", "OrderOfMagellan")
  expect(engineer.email).toEqual(expect.stringContaining('@'));
});

test('given function getRole', () => {
  const engineer = new Engineer ("Sir Francis", "Drake", 22, "SeaDog@HMSGoldenHind.com", "OrderOfMagellan")
  expect(engineer.role).toBe('Engineer');
})

test('github user name', () => {
  const engineer = new Engineer ("Sir Francis", "Drake", 22, "SeaDog@HMSGoldenHind.com", "OrderOfMagellan")
  expect(engineer.github).toBe('OrderOfMagellan');
})