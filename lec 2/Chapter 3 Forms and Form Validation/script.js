/* What is a Form in JavaScript? -> A form in web development is an HTML structure used to collect user input. It typically contains elements like:
<input> (text, password, email, etc.)
<textarea>
<select>
<button></button>*/

/*What is Form Validation in JavaScript? -> Form validation is the process of checking whether the user’s input is correct, complete, and secure before submitting the form.
It ensures:
Required fields are filled
Data format is correct (e.g., email format)
No invalid or harmful data is submitted*/


// name should be atleast 2 letters
let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    
    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";
    }else{
        document.querySelector("#hide").style.display = "none";
    }
});

// regex
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email"));    // false

function isValidName(name) {
    const regex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
    return regex.test(name);
}

console.log(isValidName("John Doe"));    // true
console.log(isValidName("Anne-Marie")); // true
console.log(isValidName("John123"));    // false