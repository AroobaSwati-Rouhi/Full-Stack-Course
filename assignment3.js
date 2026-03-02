// task 1

function getDayName(dayNumber) {
  let dayName;

  switch (dayNumber) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day number";
  }

  return dayName;
}

console.log(getDayName(3)); 
console.log(getDayName(8)); 

// task 2

function printNumbers(){
let i=1;
while (i<=10)
{
 console.log(i);
     i++; 
}
}
printNumbers();

// task 3

function printNum(){
let num=10;
do{
     console.log(num);
    num--;   
}

while(num >=1)
}
printNum();




