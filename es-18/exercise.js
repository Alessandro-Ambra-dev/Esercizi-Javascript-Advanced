const isLogged = true;
function isUserLogged(isLogged) {
  return new Promise((resolve, reject) => {
    let number = Math.random();
    if (isLogged == true) {
      resolve(number);
    } else {
      reject(new Error("User not logged in"));
    }
  });
}

function isNumberOk(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: "24" });
    } else {
      reject(new Error("Number is too low"));
    }
  });
}

isUserLogged(true)
  .then(isNumberOk)
  .then((val) => console.log(val))
  .catch((err) => console.error(err))
  .finally(()=> console.log("User is online ;-) "))

