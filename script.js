'use strict'

//.1.

let array = [10,20,30,40,50]

const add = function(a,b,c,d,e){
  return a+ b+ c+ d +e

}

let sum = add(...array)
console.log(sum)


//.2.

let arrays = [4, 12, 62, 70, -10]
console.log(Math.max(...arrays))


//.3.

let myintroduction = 'My name is Ajay Giri and i am from Nepal'
console.log(myintroduction.length)


//.4.

function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const arr = [1, 2, 3, 4, 5]
const average = findAverage(arr);
console.log(average)


//.5.

function findMultiple(num) {
  const multiple = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 3 === 0 || num[i] % 5 === 0) {
      multiple.push(num[i]);
    }
  }
  return multiple;
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multiple = findMultiple(num)
console.log(multiple)















