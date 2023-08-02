

async function buttonClick(){
    let request = await fetch("https://jsonplaceholder.typicode.com/posts", {method: "post"});
    let inp = document.getElementById("todo-title");
    let inp2 = document.getElementById("todo-completed");
    if(inp.lenght > 1 && inp2.cheked == true){

    }
}
let button = document.getElementById("submit-todo");
button.addEventListener("click", checkForm())
async function checkForm(){
    let input = document.getElementById("todo-title");
    let input2 = document.getElementById("todo-completed");
    let response =  await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: {
            title: input.value,
            toDO: input2.checked
        }
    });
    console.log(response);
}

// console.log(checkForm())

