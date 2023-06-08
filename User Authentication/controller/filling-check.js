const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("auth-submit");
const errorUsername = document.getElementById("error-username");
const errorPassword = document.getElementById("error-password");
const errors = [errorUsername, errorPassword];
const userData = [username,password];

function placeholderCheck(userData){
    userData.forEach(data =>{
        let placeholder = data.placeholder
        data.addEventListener("focus", () =>{
            data.placeholder = "";
        })
        data.addEventListener("blur", () =>{
            data.placeholder = placeholder;
        })
    })
}

function fieldCheck(submit, userData){
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        userData.forEach(item =>{
            if(item.value.trim() === ""){
                item.parentElement.classList.add("error-border");
                item.parentElement.nextElementSibling.classList.add("error-active");
            }
            else{
                item.parentElement.classList.remove("error-border");
                item.parentElement.nextElementSibling.classList.remove("error-active");
            }
        })
    })
}

placeholderCheck(userData);
fieldCheck(submit, userData);