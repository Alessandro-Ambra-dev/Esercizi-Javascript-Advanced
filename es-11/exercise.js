const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

const person2 = { ...person1 };
let str = JSON.stringify(person2);
let obj = JSON.parse(str);

obj.address.city = 'Milan';

console.log(person1);
console.log(obj);