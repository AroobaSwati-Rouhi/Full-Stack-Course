let count=0;

function add(){
count=count+1;
console.log(count);

  document.getElementById("count").innerText = count;

}
function subtract(){
    if (count>0)
count=count-1;
console.log(count);
  document.getElementById("count").innerText = count;

}
function reset(){
count=0;
console.log(count);
  document.getElementById("count").innerText = count;

}