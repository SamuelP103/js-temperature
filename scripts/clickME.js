

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
    let temperatureS = document.getElementById("temperatureS").value;
    let temperatureE = document.getElementById("temperatureE").value;
    let unit = document.getElementById("unit").value;
    // this is part 1 to select elements in doc 
    let th2Element=document.querySelector('.th2');
    let th3Element=document.querySelector('.th3');
    let th4Element=document.querySelector('.th4');
    let th5Element=document.querySelector('.th5');
    let th6Element=document.querySelector('.th6');
    let backgroundContainer=document.querySelector('.background-container');
    


    if (unit === "celsius") {
        let fahrenheitS = (parseInt(temperatureS) * 9/5) + 32;
        let fahrenheitE = (parseInt(temperatureE) * 9/5) + 32;
        let averageF = (fahrenheitS+fahrenheitE)/2;
        document.getElementById("solution").innerText= `The temperature ranges from ${fahrenheitS.toFixed(0)} to ${fahrenheitE.toFixed(0)} fahrenheit. The average temperature is ${averageF.toFixed(0)} fahrenheit.`;

        function alpha(){
            for(let table= fahrenheitS; table<=fahrenheitE+1; table++){
                const tableF = ((table) - 32) * 5/9;
                console.log(table.toFixed(1));
                console.log(tableF.toFixed(1));
                document.getElementById("avg").innerText += ` ${table.toFixed(0)}C° -> ${tableF.toFixed(1)}F°` 
            };
        }
        function beta(){

            for(let table= fahrenheitS; table>=fahrenheitE-1; table--){
                const tableF = ((table) - 32) * 5/9;
                console.log(table.toFixed(0));
                console.log(tableF.toFixed(0));
                document.getElementById("avg").innerText += ` ${table.toFixed(0)}C° ->  ${tableF.toFixed(1)}F°`;
            }
        }
        if (fahrenheitS<fahrenheitE){
        alpha();
        }
        else{
        beta();
        }

        if (parseInt(averageF) >= 60) {
            backgroundContainer.style.backgroundImage = 'url("./images/spring.png")'; 
        }else if(parseInt(averageF) >= 15){
            backgroundContainer.style.backgroundImage = 'url("./images/aut.png")';
        }
        else {
            backgroundContainer.style.backgroundImage = 'url("./images/snow.jpeg")';
        }
        if (parseInt(averageF) >= 105) {
            th6Element.style.backgroundImage = 'url("./images/fire.png")';
            th5Element.style.backgroundImage = 'url("./images/fire.png")';
            th4Element.style.backgroundImage = 'url("./images/fire.png")';
            th3Element.style.backgroundImage = 'url("./images/fire.png")';
            th2Element.style.backgroundImage = 'url("./images/fire.png")';
        } else {
            th6Element.style.backgroundImage = '';
            th5Element.style.backgroundImage = '';
            th4Element.style.backgroundImage = '';
            th3Element.style.backgroundImage = '';
            th2Element.style.backgroundImage = '';
        }
        if (parseInt(averageF) <= 70) {
            th5Element.style.backgroundColor = '';
        } else {
            th5Element.style.backgroundColor = 'red';
        }
        if (parseInt(averageF) <= 35) {
            th4Element.style.backgroundColor = '';
        } else {
            th4Element.style.backgroundColor = 'red';
        }
        if (parseInt(averageF) <= 0) {
            th3Element.style.backgroundColor = '';
        } else {
            th3Element.style.backgroundColor = 'red';
        }
        if (parseInt(averageF) >= 0) {
            th2Element.style.backgroundColor = 'red';
        } else {
            th2Element.style.backgroundImage = 'url("./images/ice.png")';
        }
        

    } else {
        let celsiusS = (parseFloat(temperatureS) - 32) * 5/9;
        let celsiusE = (parseFloat(temperatureE) - 32) * 5/9;
        let averageC = (celsiusS+celsiusE)/2;
        document.getElementById("solution").innerText = `The temperature ranges from ${celsiusS.toFixed(0)} to ${celsiusE.toFixed(0)} celsius. The average temperature is ${averageC.toFixed(0)} celsius.`;

        function alpha(){

            for(let table= celsiusS; table<=celsiusE+1; table++){
                const tableF = (table * 9/5) + 32;
                console.log(table.toFixed(0));
                console.log(tableF.toFixed(0));
                document.getElementById("avg").innerText += ` ${table.toFixed(0)}C° -> ${tableF.toFixed(1)}F°`;
                
    
            }
        }
        function beta(){

            for(let table= celsiusS; table>=celsiusE-1; table--){
                const tableF = (table * 9/5) + 32;
                console.log(table.toFixed(0));
                console.log(tableF.toFixed(0));
                document.getElementById("avg").innerText += ` ${table.toFixed(0)}C° ->  ${tableF.toFixed(1)}F°`;
            }
        }
        if (celsiusS<celsiusE){
        alpha();
        }
        else{
        beta();
        }

        if (parseInt(averageC) >= 20) {
            backgroundContainer.style.backgroundImage = 'url("./images/spring.png")';
        }else if(parseInt(averageC) >= 5){
            backgroundContainer.style.backgroundImage = 'url("./images/aut.png")';
        }
        else {
            backgroundContainer.style.backgroundImage = 'url("./images/snow.jpeg")';
        }
        //part 2 to select elements in doc
        if (parseInt(averageC) >= 30.0999) {
            th6Element.style.backgroundImage = 'url("./images/fire.png")';
            th5Element.style.backgroundImage = 'url("./images/fire.png")';
            th4Element.style.backgroundImage = 'url("./images/fire.png")';
            th3Element.style.backgroundImage = 'url("./images/fire.png")';
            th2Element.style.backgroundImage = 'url("./images/fire.png")';
        } else {
            th6Element.style.backgroundImage = '';
            th5Element.style.backgroundImage = '';
            th4Element.style.backgroundImage = '';
            th3Element.style.backgroundImage = '';
            th2Element.style.backgroundImage = '';
        }
        if (parseInt(averageC) <= 15.0999) {
            th5Element.style.backgroundColor = '';
        } else {
            th5Element.style.backgroundColor = 'red';
        }
        if (parseInt(averageC) <= 0) {
            th4Element.style.backgroundColor = '';
        } else {
            th4Element.style.backgroundColor = 'red';
        }
        if (parseInt(averageC) <= -15) {
            th3Element.style.backgroundColor = '';
        } else {
            th3Element.style.backgroundColor = 'red';
        }
        if (parseInt(averageC) >= -15) {
            th2Element.style.backgroundColor = 'red';
        } else {
            th2Element.style.backgroundImage = 'url("./images/ice.png")';
        }
    }
}
