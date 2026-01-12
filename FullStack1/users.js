const tableBody = document.getElementById("table-body");
const viewModal = document.getElementById("view-modal");
const viewTable = document.getElementById("user-table");
const username = document.getElementById("username");
const background = document.getElementById("background-overlay");
const viewClose = document.getElementById("view-close");
const updateModal = document.getElementById("update-modal");
const updateClose = document.getElementById("cancel-update");
const deleteModal = document.getElementById("delete-modal");
const deleteClose = document.getElementById("cancel-delete");
const deleteUsername = document.getElementById("delete-uname");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const contactNo = document.getElementById("contactNo");
const address = document.getElementById("address");
const role = document.getElementById("role");
const gender = document.getElementsByName("gender");
const dob = document.getElementById("dob");
const updateForm = document.getElementById("update-form");
const deleteBtn = document.getElementById("delete-user-btn");
const notification = document.getElementById("notification");
const searchbar = document.getElementById("search-bar");

// Get all users
(function () {
    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:9020/api/users/getAllUsers")
            const data = await response.json();
            console.log(data)
            tableBody.innerHTML = `
                ${data.object.map((item, index) => (
                `<tr>
                        <td>${index + 1}</td>
                        <td>${item.userId}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td class="actions">
                            <span onclick="viewUser(${item.userId})">&#128065;</span><hr>
                            <span onclick="updateView(${item.userId})">&#128394;</span><hr>
                            <span onclick="deleteView(${item.userId})">&#128465;</span>
                        </td>
                    </tr>`
            )).join("")
                }
            `
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    }
    fetchUsers();
})();

// Get user by Id
const viewUser = async (empId) => {
    viewModal.style.display = "block"
    background.style.display = "block"
    try {
        const response = await fetch(`http://localhost:9020/api/users/getUserById/${empId}`);
        const data = await response.json();
        console.log(data)
        username.innerHTML = data.object.username
        viewTable.innerHTML = `
            <tr>
                <td>Username</td>
                <td>:</td>
                <td>${data.object.username}</td>
            </tr>
            <tr>
                <td>Employee ID</td>
                <td>:</td>
                <td>${data.object.userId}</td>
            </tr>
             <tr>
                <td>Email</td>
                <td>:</td>
                <td>${data.object.email}</td>
            </tr>
            <tr>
                <td>Contact no</td>
                <td>:</td>
                <td>${data.object.contact}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>:</td>
                <td>${data.object.address}</td>
            </tr>
            <tr>
                <td>Role</td>
                <td>:</td>
                <td>${data.object.role}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>:</td>
                <td>${data.object.gender}</td>
            </tr>
            <tr>
                <td>Date of birth</td>
                <td>:</td>
                <td>${data.object.dateOfBirth}</td>
            </tr>
        `
    } catch (error) {
        console.error("Failed to fetch users:", error);
    }
}

let userIdToUpdate;

// View user to update
const updateView = async (empId) => {
    updateModal.style.display = "block"
    background.style.display = "block"
    userIdToUpdate = empId
    try {
        const response = await fetch(`http://localhost:9020/api/users/getUserById/${empId}`);
        const data = await response.json();
        console.log(data)

        uname.value = data.object.username
        email.value = data.object.email
        contactNo.value = data.object.contact
        address.value = data.object.address
        role.value = data.object.role
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].value == data.object.gender)
                gender[i].checked = true;
        }
    } catch (error) {
        console.error("Failed to fetch user ", error)
    }
}

// Update user
updateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let genderClicked;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderClicked = gender[i].value;
        }
    }

    const userObj = {
        username: uname.value,
        email: email.value,
        password: password.value,
        contact: contactNo.value,
        address: address.value,
        role: role.value,
        gender: genderClicked,
        dateOfBirth: dob.value,
    };
    console.log(userObj)

    const updateUser = async () => {
        try {
            const response = await fetch(`http://localhost:9020/api/users/updateUser/${userIdToUpdate}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObj)
            })
            const result = await response.json();
            console.log(result);
            updateModal.style.display = "none"
            notification.style.display = "block"
            notification.innerHTML += result.message
        } catch (error) {
            console.error("Failed to update user ", error)
        }
    }
    updateUser();
    updateForm.reset();
})

let userIdToDelete;

// View user to delete
const deleteView = async (empId) => {
    deleteModal.style.display = "block"
    background.style.display = "block"
    userIdToDelete = empId
    try {
        const response = await fetch(`http://localhost:9020/api/users/getUserById/${empId}`)
        const data = await response.json();
        console.log(data)
        deleteUsername.innerHTML = data.object.username
    } catch (error) {
        console.error("Failed to fetch user ", error)
    }
}

// Delete user
deleteBtn.addEventListener("click", () => {

    const deleteUser = async () => {
        try {
            const response = await fetch(`http://localhost:9020/api/users/deleteUser/${userIdToDelete}`, {
                method: 'DELETE'
            })
            const data = await response.json();
            console.log(data)
            deleteModal.style.display = "none"
            notification.style.display="block"
            notification.innerHTML += data.message
        } catch (error) {
            console.error("Failed to fetch user ", error)
        }
    }
    deleteUser();
})

searchbar.addEventListener("keyup", ()=>{
    const fetchUsers = async () => {
        try {
            let response;
            if(searchbar.value == "")
                response = await fetch("http://localhost:9020/api/users/getAllUsers")
            else 
                response = await fetch(`http://localhost:9020/api/users/searchUser?keyword=${searchbar.value}`)

            const data = await response.json();
            console.log(data)
            tableBody.innerHTML = `
                ${data.object.map((item, index) => (
                `<tr>
                        <td>${index + 1}</td>
                        <td>${item.userId}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td class="actions">
                            <span onclick="viewUser(${item.userId})">&#128065;</span><hr>
                            <span onclick="updateView(${item.userId})">&#128394;</span><hr>
                            <span onclick="deleteView(${item.userId})">&#128465;</span>
                        </td>
                    </tr>`
            )).join("")
                }
            `
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    }
    fetchUsers();
})

background.addEventListener("click", () => {
    viewModal.style.display = "none"
    updateModal.style.display = "none";
    deleteModal.style.display = "none";
    background.style.display = "none";
    notification.style.display = "none";
    window.location.reload();
})

viewClose.addEventListener("click", () => {
    viewModal.style.display = "none";
    background.style.display = "none";
})

updateClose.addEventListener("click", () => {
    updateModal.style.display = "none";
    background.style.display = "none";
})

deleteClose.addEventListener("click", () => {
    deleteModal.style.display = "none";
    background.style.display = "none";
})
