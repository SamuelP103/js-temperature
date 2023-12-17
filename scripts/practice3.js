let yourName="Samuel";

/*
if(confirm("Are you "+ yourName + "?")){
	console.log("Hello " + yourName);
}else{
	console.log("Then what is your name?");
}
if(6>=8){
	console.log("true " + yourName);
}else{
	console.log("false");
}
*/
function login(){
    //console.log("Hello");

//create database
let userDB="bob";
let passDB="joe";
// get variables from user

//let user = prompt("whats your user");
//let password = prompt("whats your password");
let user=document.getElementById("txtUserName").value;
let password=document.getElementById("txtPassword").value;
console.log(user,password);

if (user===userDB && password===passDB){
    document.getElementById("notifications").innerHTML=`Welcome to the system ${user}`;

}
else{ 
    document.getElementById("notifications").innerHTML=`incorrect credentials`;
    }
}

function register(){
    let student = document.getElementById("txtStudent").value;

    document.getElementById("studentsList").innerHTML+=`<li>
        ${student}</li>
        `;
}







function topFood(){
let food1=document.getElementById("favFood").value;

document.getElementById("list").innerHTML+=`<li>${food1}</li>`;


}

