const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser() {
  localStorage.setItem("My obj", JSON.stringify(user));
  let string = localStorage.getItem("My obj");
  let obj = JSON.parse(string);
  console.log(obj);
  let consoleString = JSON.stringify(obj);
  let consoleObj = JSON.parse(consoleString)
  console.log(consoleString);
  console.log(consoleObj);
}
saveUser();
