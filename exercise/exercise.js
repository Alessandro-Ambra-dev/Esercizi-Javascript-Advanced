// let num1 = 10;
// let num2 = 20;
// console.log('Before swap: ', num1, num2); // Before swap: 10 20

// // Variable swapping
// let temp = num2;
// num2 = num1;
// num1 = temp;

// console.log('After swap: ', num1, num2); // After swap: 20 10


let arr= [10,20];

console.log(arr[0], arr[1]);

let [num2, num1] = arr;

console.log(num1, num2);


//Oppure:


let obj = {
    numero : 10,
    numero2 : 20
}

console.log(obj.numero, obj.numero2)

let {numero, numero2} = obj;

console.log (numero2, numero)