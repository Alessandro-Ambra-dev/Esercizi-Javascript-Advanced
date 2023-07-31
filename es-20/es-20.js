fetch("https://jsonplaceholder.typicode.com/todos/4")
  .then((val) => val.json())
  .then((val) => el(val))
  .catch((err) => console.log(err));

async function el(obj) {
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  if (obj.completed == true) {
    checkbox.checked = true;
  } else {
    console.log("Error");
  }
  let div = document.getElementById("container");
  let h2 = document.createElement("h2");
  let name = document.createTextNode(obj.title);
  h2.appendChild(name);
  div.appendChild(h2);
  div.appendChild(checkbox);
}
