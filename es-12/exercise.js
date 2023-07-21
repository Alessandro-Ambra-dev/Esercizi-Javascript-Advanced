const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const json = JSON.stringify(person, (key, val) => {
  if (typeof val === "string") {
    return undefined;
  } else return val;
});

const obj = JSON.parse(json)

console.log(obj); // Should return: { id: 1, age: 25 }
