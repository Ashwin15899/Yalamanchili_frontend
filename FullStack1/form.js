const mainForm = document.getElementById("main-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const showPassword = document.getElementById("show-pass");
const contact = document.getElementById("contact");
const address = document.getElementById("address");
const role = document.getElementById("role");
const gender = document.getElementsByName("gender");
const dob = document.getElementById("dob");
const acknowledge = document.getElementById("acknowledge");
const notification = document.getElementById("notification");
const background = document.getElementById("background-overlay");

mainForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let genderClicked;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderClicked = gender[i].value;
        }
    }
    const userObj = {
        username: username.value,
        email: email.value,
        password: password.value,
        contact: contact.value,
        address: address.value,
        role: role.value,
        gender: genderClicked,
        dateOfBirth: dob.value,
        agreement: acknowledge.checked ? true : false
    };
    console.log(userObj)

    const createUser = async () => {
        try {
            const response = await fetch("http://localhost:9020/api/users/createUser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObj)
            })
            const result = await response.json();
            background.style.display="block"
            notification.style.display="block";
            notification.innerHTML += result.message
        } catch (error) {
            console.log("Couldn't create user", error)
        }
    }
    createUser();
    
    mainForm.reset();
})

background.addEventListener("click", ()=>{
    notification.style.display="none";
    background.style.display="none"
})

showPassword.addEventListener("click", ()=>{
    if(password.type=="password")
        password.type= "text"
    else 
        password.type ="password"
})