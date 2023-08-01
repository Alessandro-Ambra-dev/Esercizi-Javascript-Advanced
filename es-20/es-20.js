

// async function buttonClick(){
//     let request = await fetch("https://jsonplaceholder.typicode.com/posts", {method: "post"});
//     let inp = document.getElementById("todo-title");
//     let inp2 = document.getElementById("todo-completed");
//     if(inp.lenght > 1 && inp2.cheked == true){

//     }
// }
async function checkForm(){
    let form = document.querySelector("form");
    let input = document.getElementById("todo-title");
    let input2 = document.getElementById("todo-completed");
    let button = document.getElementById("submit-todo");
    let response =  await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: "title and Flag completed"
    });
    form.appendChild(input, input2, button)
    let text = button.createTextNode(response)
    button.click(text)
}

console.log(checkForm)