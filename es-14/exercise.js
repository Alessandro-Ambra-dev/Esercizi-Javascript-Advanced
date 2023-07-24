function printAsyncName(callback, name) {
  let id = setInterval(()=>{console.log(callback)},1000)
  setTimeout(() => {
    clearInterval(id);
  }, 1000);
   let id2 = setInterval(() => {
     console.log(name);
   }, 2000);
   setTimeout(() => {
     clearInterval(id2);
   }, 2000);
}

printAsyncName("Hello","Sandro");
