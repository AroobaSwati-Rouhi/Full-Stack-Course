let students = [];

function saveData(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let fname = document.getElementById("fname").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;

  let student = {
    name: name,
    fname: fname, 
    age: age,
    email: email  
  };

  students.push(student);

  console.log(students);

  document.getElementById("output").innerText = JSON.stringify(students, null, 2);

  document.getElementById("name").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  
}