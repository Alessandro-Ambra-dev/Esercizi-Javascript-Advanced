const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser() {
  localStorage.setItem("My obj", JSON.stringify(user));
  let object = localStorage.getItem("My obj");
  console.log(JSON.parse(object));
}

saveUser();
