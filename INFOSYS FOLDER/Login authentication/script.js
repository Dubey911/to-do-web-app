// Register

function register(){

let username=document.getElementById("regUsername").value;

let password=document.getElementById("regPassword").value;

if(username==="" || password===""){
alert("Fill all fields");
return;
}

let users=JSON.parse(localStorage.getItem("users")) || [];

let exists=users.find(user=>user.username===username);

if(exists){
alert("Username already exists");
return;
}

users.push({
username:username,
password:password
});

localStorage.setItem("users",JSON.stringify(users));

alert("Registration Successful");

window.location="index.html";

}

// Login

function login(){

let username=document.getElementById("loginUsername").value;

let password=document.getElementById("loginPassword").value;

let users=JSON.parse(localStorage.getItem("users")) || [];

let valid=users.find(user=>user.username===username && user.password===password);

if(valid){

localStorage.setItem("loggedInUser",username);

window.location="dashboard.html";

}else{

alert("Invalid Username or Password");

}

}

// Dashboard

if(window.location.pathname.includes("dashboard.html")){

let user=localStorage.getItem("loggedInUser");

if(!user){

window.location="index.html";

}else{

document.getElementById("welcome").innerHTML="Welcome, "+user;

}

}

// Logout

function logout(){

localStorage.removeItem("loggedInUser");

window.location="index.html";

}