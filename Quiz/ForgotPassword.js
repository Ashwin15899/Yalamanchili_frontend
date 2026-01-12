import { users } from "./DataSet/users.js";

const form = document.getElementById("forgot-pwd-form");
const email = document.getElementById("email");
const userOtp = document.getElementById("otp");
const password = document.getElementById("password");
const cpassword = document.getElementById("confirmPassword");
const otpField = document.getElementById("otpField");
const emailErr = document.getElementById("emailErr");
const otpErr = document.getElementById("otpErr");
const pwdErr = document.getElementById("pwdErr");
const confirmpwdErr = document.getElementById("confirmpwdErr");
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{8,15}$/;
let otp;

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Verify email and generate OTP
    if (userOtp.disabled && password.disabled) {
        const userFound = users.find(item => item.Email === email.value);
        console.log(userFound)
        if (userFound) {
            alert("This is your OTP " + generateOtp())
            userOtp.disabled = false;
            userOtp.placeholder = "Enter OTP"
            userOtp.style.borderBottom = "1px solid black"
        } else {
            emailErr.innerHTML = "Email not found"
            emailErr.style.color = "red"
        }
    }

    // Verify OTP
    if (password.disabled) {
        let otpVerified = false
        otpVerified = userOtp.value == otp ? true : false
        if (otpVerified) {
            console.log("Valid otp")
            password.disabled = false;
            password.placeholder = "Enter new password"
            password.style.borderBottom = "1px solid black"
            cpassword.disabled = false;
            cpassword.placeholder = "Enter password again"
            cpassword.style.borderBottom = "1px solid black"
            otpField.style.display = "none"
        }
        if (userOtp.value != "" && !otpVerified) {
            otpErr.innerHTML = "Invalid OTP"
            otpErr.style.color = "red"
        }
    }

    // Validate and change password
    if (!password.disabled) {
        let validPassword = strongPasswordRegex.test(password.value) ? true : false;
        if (validPassword) {
            console.log("Valid password")
            if (password.value == cpassword.value) {
                const userFound = users.find(item => item.Email === email.value);
                userFound.Password = password.value
                alert("Password Changed successfully")
                window.location.href = "http://127.0.0.1:5500/index.html";
            } else {
                confirmpwdErr.innerHTML = "Password fields doesn't match"
                confirmpwdErr.style.color = "red";
            }
        }
        if (password.value != "" && !validPassword) {
            pwdErr.innerHTML = `Password should contain <br>
                            atleast 1 uppercase, 1 lowercase, <br>
                            1 special character<br>
                            min 8 to max 15 characters
                            `
            pwdErr.style.color = "red";
        }
    }
})

const generateOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000);
    otp = newOtp;
    return newOtp;
}
