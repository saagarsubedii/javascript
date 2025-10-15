/*const product = {
    name: "Pen",
    rating: 4.5,
    price: 100
};

console.log(product);*/

//arematic operators
/*let a = 10;
let b = 5;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);*/

//conditional statements
/*let age =18;

if (age >= 18){
    console.log("you are eligible to vote");
}
else{
    console.log("you are not eligible to vote");
}

let marks = 95;
if (marks >= 40){
    console.log("you are pass");
}
else{
    console.log("you are fail");
}

let num = 45;
if (num % 2 === 0){
    console.log(num, "is even number");
}
else{
    console.log(num, "is odd number");
}*/

/*let score =prompt("enter your score(0-100)");
let grade;

if (score >= 90 && score<=100)
{
    grade ='A';
}
else if(score >= 80 && score <89)
{
    grade ='b'
}
 else if(score >= 70 && score <80)
 {
    grade = 'c';
}
else if(score >= 60 && score <0)
{
    grade ='d';
}
console.log("according to your score,your grade is", grade);*/


//loops

/*for (let i=1; i<=5; i++){
    console.log("hello world", i);
}

for (let i=10; i<=1000; i++){
    console.log("sagar", i);
}

let sum = 0;
for(let i=1;  i<=5; i++){
    console.log(sum);
}*/

//document.getElementById("h1").textContent = "welcome to my website";
const PI = 3.14;
let radius;
let circle;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circle = 2*PI*radius;
    document.getElementById("myh2").textContent = circle;
    }