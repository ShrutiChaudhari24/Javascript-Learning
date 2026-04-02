let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailError = document.querySelector("#emailError");
    let passwordError = document.querySelector("#passwordError");

    // reset errors
    emailError.textContent = "";
    passwordError.textContent = "";
    emailError.style.display = "none";
    passwordError.style.display = "none";

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    // show error if invalid
    if(!emailans){
        emailError.textContent = "Email is incorrect";
        emailError.style.display = "block";
    }

    if(!passwordans){
        passwordError.textContent = "Password is incorrect";
        passwordError.style.display = "block";
    }
});