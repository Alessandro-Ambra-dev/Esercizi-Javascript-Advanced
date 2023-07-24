function repeatHello(callback) {
  let id = setInterval(() => console.log(callback), 1000);
  setTimeout(() => clearInterval(id), 5000);
}

repeatHello("Hello");
