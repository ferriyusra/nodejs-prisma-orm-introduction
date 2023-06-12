function tagFunction(array, ...args) {
  console.info(array)
  console.info(...args)
}

test("tag function", () => {
  const name = "fer";
  const age = 20;

  tagFunction`hello ${name} good ${age} too old`;
  tagFunction`say ${name} good ${age}`;
})

test("tag function sql", () => {
  // const name = "fer'; DROP table users;";
  const name = "fer";
  const age = 20;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;

})