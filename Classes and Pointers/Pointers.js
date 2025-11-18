let num1 = 5;
let num2 = num1;
console.log(num1);
console.log(num2);
num1 = 10;
console.log(num1);
console.log(num2);

let obj1 = {
    value: 1
}
let obj2 = obj1;
console.log(obj1);
console.log(obj2);
obj1.value = 22;
console.log(obj1);
console.log(obj2);
let obj3 = {
    value: 57
}
obj2 = obj3
obj1 = obj2

console.log(obj1);
console.log(obj2);
console.log(obj3);