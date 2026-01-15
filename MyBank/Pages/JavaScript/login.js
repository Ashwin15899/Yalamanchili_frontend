import { accounts } from "./userAccountDetails.js";

const loginForm = document.getElementById("login-form");
const accNo = document.getElementById("accNo");
const password = document.getElementById("password");
const accNoerr = document.getElementById("accNoerr");
const pwdErr = document.getElementById("pwdErr");

const validateCredentials = (e) => {
    e.preventDefault();
    if (accNo.value == "") {
        accNoerr.innerHTML = "Please provide your account number";
        accNoerr.style.color = "red";
    }
    if (password.value == "") {
        pwdErr.innerHTML = "Please provide your password";
        pwdErr.style.color = "red";
    }

    const userFound = accounts.find(item => item.accNo == accNo.value)
    if (userFound) {
        if (password.value == userFound.password) {
            localStorage.setItem("currentAccountNo", accNo.value);
            window.location.href = "http://127.0.0.1:5500/Pages/user.html";
            console.log(userFound);
        } else {
            pwdErr.innerHTML = "Incorrect Password"
            pwdErr.style.color = "red";
        }
    } else {
        accNoerr.innerHTML = "No user found";
        accNoerr.style.color = "red";
    }
}

loginForm.addEventListener("submit", validateCredentials)
