let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let three = 3;
let five = 5;
let sixty = 60;
let ninety = 90;
const multiplesThree = someNumbers.some((number) => number / three !== 0);
const multiplesFive = someNumbers.some((number) => number / five !== 0);
const multiplesSixty = someNumbers.some((number) => number / sixty !== 0);
const multiplesNinety = someNumbers.some((number) => number / ninety !== 0);

console.log(multiplesThree, multiplesFive, multiplesSixty, multiplesNinety);
