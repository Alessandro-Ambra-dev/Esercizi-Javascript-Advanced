const number = 15;
let check = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(new Error("Number is too low"));
  }
});

check
  .then((number) => {
    console.log(number);
  })
  .catch((err) => console.error(err));
