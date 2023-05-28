const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("auth-submit");
const userData = [username,password];

function fieldCheck(submit, userData){
    userData.forEach(data =>{
        let placeholder = data.placeholder
        data.addEventListener("click", () =>{
            if (data.placeholder === ""){
                data.placeholder = placeholder;
            }
            else{
                data.placeholder = "";
            }
        })
    })
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        userData.forEach(item =>{
            if(item.value.trim() === ""){
                item.parentElement.classList.add("error-border");
            }
            else{
                item.parentElement.classList.remove("error-border");
            }
        })
    })
}

fieldCheck(submit, userData);