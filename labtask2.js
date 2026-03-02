let numbers = [1, 2, 3, 4, 5];
let count= 0;
for(i=0; i<=numbers.length; i++)
    {
count= count+ i;
}
console.log(count);
// another method

let number = [1, 2, 3, 4, 5, 20];

let sum = number.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log("Sum:", sum);


// Add numbr in array
number.push(10, 34);
console.log(number);

// Remove the first number from the array

number.shift(0);
console.log(number);

// Reverse the array
number.reverse();
console.log(number);

// Check if a specific number exists in the array [

if (number=0){
    console.log("yes the number", number + " is present in Array");
    
}
else
console.log("False");

// Create a new array with each number multiplied by 2 using map()

let doubledNumbers = numbers.map(function(num) 
{
  return num * 2;
}
);
console.log(doubledNumbers);

// Use filter() to find all numbers greater than 3

let numbersGreaterThan3 = numbers.filter(function(num) {
  return num > 3;
});

console.log(numbersGreaterThan3);

// Use find() to get the first number that is divisible by 2
let firstDivisible = numbers.find(function(num) {
  return num % 2 == 0;
});

console.log(firstDivisible);

