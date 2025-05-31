// creating references for our form inputs and button.

const userName = document.getElementById("name-input");

const userEmail = document.getElementById("email-input");

const userPhone = document.getElementById("phone-input");

const submitUserButton = document.getElementById("submit-user-button");

const usersContainer = document.getElementById("users-container");

let idIndex = 0;

// event listener
submitUserButton.addEventListener("click", validateInputs);


// functions

function validateInputs(e) {
    e.preventDefault();

    // grab the values from name, email and phone, check if all are filled with info. if they all have info console log a message that says so otherwise alert some inputs are empty please fix that.

    const name = userName.value;
    const email = userEmail.value;
    const phone = userPhone.value;

    // IF conditional
    // logical operators && || ! 
    if (name && email && phone) {

        // create a function to create the single user card -- UI

        createUserUi(name, email, phone);

        // reset the input value to empty
        userName.value = "";
        userEmail.value = "";
        userPhone.value = "";
    }
    else {
        alert("some inputs are empty please fix that")
    }


}

// function for user card UI

function createUserUi(name, email, phone) {

    // create the user card and assign a class of user.
    const user = document.createElement("div");
    user.classList.add("user");
    // using template literals
    user.setAttribute("id", `id-${idIndex}`)

    // create a h2 element and assign a class of name, and change inner text to the username

    const nameText = document.createElement("h2");
    nameText.classList.add("name");
    nameText.innerText = name;

    // create a p element and assign a class of email, and change inner text to the useremail

    const emailText = document.createElement("p");
    emailText.classList.add("email");
    emailText.innerText = email;

    // create a p element and assign a class of phone, and change inner text to the userphone

    const phoneText = document.createElement("p");
    phoneText.classList.add("phone");
    phoneText.innerText = phone;

    // create a button element and add a class of delete and set inner text to delete user
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete User"; deleteBtn.dataset.value = idIndex;

    // DELETE EVENT LISTENER
    deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        deleteUser(deleteBtn);
    })

    // append nameText, emailText, phoneText and the deleteBtn into user
    user.appendChild(nameText);
    user.appendChild(emailText);
    user.appendChild(phoneText);
    user.appendChild(deleteBtn);

    // append the user into usersContainer
    console.log(user)
    usersContainer.appendChild(user);
    idIndex++;
}

// create the delete user Fn
function deleteUser(button) {
    // grab the ids
    const parentId = button.parentElement.id;
    const buttonDataValue = `id-${button.dataset.value}`;

    // if the parentId is equal to the buttonDataValue delete the user element
    if (parentId === buttonDataValue) {
        button.parentElement.remove();
    }
}