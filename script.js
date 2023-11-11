


function validate() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = document.getElementById("errordiv");
    let emailInput = document.getElementById("emailInput");
    let email = emailInput.value;
    if (emailRegex.test(email) ||  email.trim() === "") {
        error.style.display = "none";
    } else {
       error.style.display = "block"
    }
}
