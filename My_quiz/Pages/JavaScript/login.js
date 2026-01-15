import {users} from "./DataSet/users.js";

const loginForm = document.getElementById("login-form");
const email = document.getElementById("email");
const pwd = document.getElementById("password");
const emailErr = document.getElementById("emailErr");
const pwdErr = document.getElementById("pwdErr")

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const userFound = users.find(item=>item.Email==email.value)
    if(userFound){
        if(pwd.value==userFound.Password){
            window.location.href="http://127.0.0.1:5500/Pages/AssessmentPage.html";
        } else {
            pwdErr.innerHTML="Incorrect Password"
            pwdErr.style.color="red";
        }
    } else {
        emailErr.innerHTML="No user found";
        emailErr.style.color="red";
    }
})