class Person {
  _firstName = "";
  _lastName = "";
  _age = "";
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  set firstName(newName) {
    if (typeof newName == "string") {
      this._firstName = newName;
    } else {
      console.log("Invalid name");
    }
  }
  get firstName() {
    return this._firstName;
  }
  set lastName(newLast) {
    if (typeof newLast == "string") {
      this._lastName = newLast;
    } else {
      console.log("invalid surname");
    }
  }
  get lastName() {
    return this._lastName;
  }
  set age(newAge) {
    if (newAge < 1) {
      this._age = 1;
    } else if (newAge > 100) {
      this._age = 100;
    } else {
      this._age = newAge;
    }
  }
  get age() {
    return this._age;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
