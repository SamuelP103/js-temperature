

// All code is below the top which was used as reference for creation






//console.log("Prac 2");
//let myName=prompt("Enter your name:");
//console.log(myName);
/*
function sum(){
    let num1=prompt("enter your number");
    let num2=prompt("number2");  
    num3=parseInt(num2)+parseInt(num1);
    console.log(num3);
    //document.write(num3);
    document.getElementById("solution").innerHTML=`<p> Total: ${num3} </p>`;
    //document.getElementById("solution").innerHTML=num3;
    //can do number instead of parseInt
}
function sub(){
    let num4=prompt("enter your number");
    let num5=prompt("number2");  
    num6=parseInt(num4)-parseInt(num5);
    console.log(num6);
    //document.write(num6);
    document.getElementById("solution").innerHTML=num6;
    //can do number instead of parseInt
}
*/
// Homework 2 starts here


/*
function ctf() {
    let temperature = prompt("What's the Temp in C?");
    let fahrenheit = parseInt(temperature) * 9/5 + 32;
    console.log(fahrenheit);
}

function ftc() {
    let temperature2 = prompt("What's the Temp in F?");
    let celsius = (parseInt(temperature2) - 32) * 5/9;
    console.log(celsius);
}
*/
// event is used as good practice to let person know it is to stop event from happening premature
function convertTemperature(event) {
    event.preventDefault();

    let temperature = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;

    if (unit === "celsius") {
        let fahrenheit = (parseFloat(temperature) * 9/5) + 32;
        document.getElementById("solution").innerText= `${fahrenheit} Fahrenheit.`;

        if (parseInt(fahrenheit) < 59.99999999) {
            document.body.style.backgroundImage = 'url("./snow.jpeg")'; 
        } else {
            document.body.style.backgroundImage = 'url("./spring.jpeg")';
        }
    } else {
        let celsius = (parseFloat(temperature) - 32) * 5/9;
        document.getElementById("solution").innerText = `${celsius} Celsius.`;

        if (parseInt(celsius) < 15.5999) {
            document.body.style.backgroundImage = 'url("./snow.jpeg")';
        } else {
            document.body.style.backgroundImage = 'url("./spring.jpeg")';
        }
    }
}
