fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((val) => createList(val))
  .catch((err) => console.log(err));

async function createList(arr) {
  try {
    let ul =  document.getElementById(".todo-list");
    arr.forEach((el) => {
      let li = document.createElement("li");
      let title = document.createTextNode(el.title);
      li.appendChild(title);
      ul.appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }
}
