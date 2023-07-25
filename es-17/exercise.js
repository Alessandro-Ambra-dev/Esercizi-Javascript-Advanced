const isLogged = true;

let isUserLogged = new Promise((resolve, reject) => {
  if (isLogged == true) {
    resolve(Math.random());
  } else {
    reject(new Error("User not logged in"));
  }
});

let isNumberOk = new Promise((resolve, reject) => {
  let n = Math.random();
  if (n > 0.5) {
    resolve(console.log({ name: "John", age: 24 }));
  } else {
    reject(new Error("Number is too low"));
  }
});

isUserLogged
  .then(isNumberOk)
  .then((val) => console.log(val))
  .catch((err) => console.error(err));
