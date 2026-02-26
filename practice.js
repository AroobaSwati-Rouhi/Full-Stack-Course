// task 1
// Largest of Three Numbers
// Create three numbers and print the largest.

let d=12;
let e=3;
let f=22;

if (d>e && d>f) {
    console.log(d, "is largest");
} 
else if (e>d && e>f){
    console.log(e , "is largest");
}
else{
    console.log(f, "is largest");
}

// task 2
// Positive, Negative or Zero
// Check a number and print:
// • Positive
// • Negative
// • Zero

let g=-1;
if (g>0){
    console.log(g, "Number is positive");
}
else if(g==0)
{
    console.log(g, "Number is Zero");

}
else
    console.log(g, "Number is Negative");

// task 3
// Simple Login System
// Create:
// let correctUsername = "admin";
// let correctPassword = "1234";
// Check:
// • If both correct → "Login Successful"
// • Else → "Invalid Credentials"

let correctUsername = "admin";
let correctPassword = "1234";
let z=correctUsername;
let i=correctPassword;
if (z==correctUsername && i==correctPassword){

    console.log("You logged in successfully");
    
}
else
console.log("Invalid Credentials");

// task 4
// Electricity Bill
// Units consumed:
// • 0–100 → 10 per unit
// • 101–200 → 15 per unit
// • 200+ → 20 per unit
// Calculate total bill.

let units=320;

if (units=>0 && units<=100)
{
console.log(units*10);

}else
    if(units>100 && units<=200){
console.log(units*15);

    }else
    console.log(units*20);

    // task 5
    // Print Even Numbers 1–50

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// task 6
// Reverse Counting
// Print numbers from 20 to 1.

for (i=20; i>=1; i--){
  console.log(i);
}

// task7
// Factorial Calculator
// Find factorial of a number.
// Example:
// 5! = 5 × 4 × 3 × 2 × 1

let y=7;
let factorial=1;

for(i=1; i<=y; i++){
   factorial=factorial*i

}
 console.log(y + "! = " + factorial);

//  task 8
// Count Digits
// Take a number like:
// 12345
// Count how many digits it has.

let number = 12345;
let count = number.toString().length;

console.log("Digits:", count); // 5

// task 9
// Sum of Even Numbers (1–100)
let xy=0;
for(i=2; i<=100; i=i+2){
   xy= xy+i;
    
}
console.log(xy);

// task 10
// Prime Number Checker
// Check if a number is prime.

let num = 6;
let isPrime = true;

 for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

if (isPrime) {
  console.log(num + " is Prime");
} else {
  console.log(num + " is Not Prime");
}

// // task 11
// ATM Machine
// User enters amount.
// • If balance sufficient → deduct amount
// • Else → "Insufficient balance

let balance = 1000;      
let withdraw = 300;    

if (withdraw <= balance) {
  balance = balance - withdraw;
  console.log("Withdrawal successful");
  console.log("Remaining balance: " + balance);
} else {
  console.log("Insufficient balance");
}

// Task 12
// Password Strength Checker
// Check if password:
// • At least 8 characters
// • Contains number
// • Contains uppercase letter

let password = "Arooba123";
// let password = "rooba3";
let hasMinLength = password.length >= 8;
let hasNumber = /[0-9]/.test(password);
let hasUppercase = /[A-Z]/.test(password);

if (hasMinLength && hasNumber && hasUppercase) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}

// // Task 13
// FizzBuzz
// From 1–50:
// • Multiple of 3 → "Fizz"
// • Multiple of 5 → "Buzz"
// • Both → "FizzBuzz

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

