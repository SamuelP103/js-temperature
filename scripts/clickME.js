

// All code is below the comments which were used as reference for creation






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
    // this is part 1 to select elements in doc 
    let th2Element=document.querySelector('.th2');
    let th3Element=document.querySelector('.th3');
    let th4Element=document.querySelector('.th4');
    let th5Element=document.querySelector('.th5');
    let th6Element=document.querySelector('.th6');

    if (unit === "celsius") {
        let fahrenheit = (parseFloat(temperature) * 9/5) + 32;
        document.getElementById("solution").innerText= `${fahrenheit} Fahrenheit.`;

        if (parseInt(fahrenheit) <= 59.99999999) {
            document.body.style.backgroundImage = 'url("./snow.jpeg")'; 
        } else {
            document.body.style.backgroundImage = 'url("./spring.jpeg")';
        }
        if (parseInt(fahrenheit) >= 105) {
            th6Element.style.backgroundImage = 'url("./fire.png")';
            th5Element.style.backgroundImage = 'url("./fire.png")';
            th4Element.style.backgroundImage = 'url("./fire.png")';
            th3Element.style.backgroundImage = 'url("./fire.png")';
            th2Element.style.backgroundImage = 'url("./fire.png")';
        } else {
            th6Element.style.backgroundImage = '';
            th5Element.style.backgroundImage = '';
            th4Element.style.backgroundImage = '';
            th3Element.style.backgroundImage = '';
            th2Element.style.backgroundImage = '';
        }
        if (parseInt(fahrenheit) <= 70) {
            th5Element.style.backgroundColor = '';
        } else {
            th5Element.style.backgroundColor = 'red';
        }
        if (parseInt(fahrenheit) <= 35) {
            th4Element.style.backgroundColor = '';
        } else {
            th4Element.style.backgroundColor = 'red';
        }
        if (parseInt(fahrenheit) <= 0) {
            th3Element.style.backgroundColor = '';
        } else {
            th3Element.style.backgroundColor = 'red';
        }
        if (parseInt(fahrenheit) >= 0) {
            th2Element.style.backgroundColor = 'red';
        } else {
            th2Element.style.backgroundImage = 'url("./ice.png")';
        }
    } else {
        let celsius = (parseFloat(temperature) - 32) * 5/9;
        document.getElementById("solution").innerText = `${celsius} Celsius.`;

        if (parseInt(celsius) < 15.5999) {
            document.body.style.backgroundImage = 'url("./snow.jpeg")';
        } else {
            document.body.style.backgroundImage = 'url("./spring.jpeg")';
        }
        //part 2 to select elements in doc
        if (parseInt(celsius) >= 30.0999) {
            th6Element.style.backgroundImage = 'url("./fire.png")';
            th5Element.style.backgroundImage = 'url("./fire.png")';
            th4Element.style.backgroundImage = 'url("./fire.png")';
            th3Element.style.backgroundImage = 'url("./fire.png")';
            th2Element.style.backgroundImage = 'url("./fire.png")';
        } else {
            th6Element.style.backgroundImage = '';
            th5Element.style.backgroundImage = '';
            th4Element.style.backgroundImage = '';
            th3Element.style.backgroundImage = '';
            th2Element.style.backgroundImage = '';
        }
        if (parseInt(celsius) <= 15.0999) {
            th5Element.style.backgroundColor = '';
        } else {
            th5Element.style.backgroundColor = 'red';
        }
        if (parseInt(celsius) <= 0) {
            th4Element.style.backgroundColor = '';
        } else {
            th4Element.style.backgroundColor = 'red';
        }
        if (parseInt(celsius) <= -15) {
            th3Element.style.backgroundColor = '';
        } else {
            th3Element.style.backgroundColor = 'red';
        }
        if (parseInt(celsius) >= -15) {
            th2Element.style.backgroundColor = 'red';
        } else {
            th2Element.style.backgroundImage = 'url("./ice.png")';
        }
    }
}
