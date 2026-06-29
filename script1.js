// Task 1: Change Button Color
const btn = document.getElementById("colorBtn");

btn.addEventListener("click", function(){

    if(btn.style.backgroundColor=="green"){
        btn.style.backgroundColor="blue";
    }else{
        btn.style.backgroundColor="green";
    }

});

// Task 2: Greeting Based on Time
let hour = new Date().getHours();

if(hour<12){
    alert("Good Morning!");
}
else if(hour<18){
    alert("Good Afternoon!");
}
else{
    alert("Good Evening!");
}

// Task 3: Calculator
function addNumbers(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let sum = num1 + num2;

    document.getElementById("result").innerHTML =
    "Result = " + sum;

}