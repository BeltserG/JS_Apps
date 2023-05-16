const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("auth-submit");

const userData = [username,password];

submit.addEventListener("click", () => {
    userData.forEach(item =>{
        if(item.value.trim() === ""){
            item.parentElement.style.border = "2px solid rgb(187, 24, 24)";
        };
    })
})