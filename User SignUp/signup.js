const passwordInput = document.querySelector(".user-data__password--input");
const passwordVisibility = document.querySelector(".eye");
const checkList = document.querySelectorAll(".password-check");

const requirements = [
    {
        regex: /.{9,}/,
        index: 0
    },
    {
        regex: /\d/,
        index: 1
    },
    {
        regex: /[A-Z]/,
        index: 2
    },
    {
        regex: /[!@#\$%\^\&*\)\(+=._-]/,
        index: 3
    },
]

passwordVisibility.addEventListener("click", () => {
    if (passwordVisibility.classList.contains("fa-eye")){
        console.log("1");
        passwordInput.type = "password";
        passwordVisibility.classList.replace("fa-eye", "fa-eye-slash");
    }else{
        console.log("2");
        passwordInput.type = "text";
        passwordVisibility.classList.replace("fa-eye-slash", "fa-eye");
    }
})

passwordInput.addEventListener("keyup", () =>{
    requirements.forEach(check =>{
        if (check.regex.test(passwordInput.value)){
            checkList[check.index].classList.add("valid");
            checkList[check.index].firstElementChild.classList.replace("fa-circle", "fa-circle-check");
        }else{
            checkList[check.index].classList.remove("valid");
            checkList[check.index].firstElementChild.classList.replace("fa-circle-check", "fa-circle");
        }
    passwordInput.value
    })
})