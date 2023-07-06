function multiplyByTwo(value) {
  let number = 2;
  function inner(){
    return value * number;
  }
  return inner;
}

console.log(multiplyByTwo(4)());
console.log(multiplyByTwo(5)());
console.log(multiplyByTwo(7)());