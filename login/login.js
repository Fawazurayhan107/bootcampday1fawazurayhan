document.addEventListener("DOMContentLoaded", () => {
    const LoginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    LoginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let isValid = true;

        const emailValue = emailInput.value;
        if (!validateEmail(emailValue)) {
            emailError.textContent ="Invalid email Format";
            isValid =false;
        } else{
            emailError.textContent ="";
        }
        // Password validation
        const passwordValue = passwordInput.value;
        const passwordStrength = checkPasswordStrength(passwordValue);

        if (passwordStrength !== "Strong") {
            passwordError.textContent = `Password is ${passwordStrength}`;
            isValid = false;
        } else {
            passwordError.textContent ="";
        }

        if (isValid) {
            alert("Login succesfull");
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function checkPasswordStrength(password) {
    if (password.length < 6) {
        return "Too short"
    }
    if (!/[0-9]/.test(password)){
        return "Missing Number";
    }
    if (!/[A-Z]/.test(password)){
        return "Missing Uppercase"  
    }
    return "Strong"
    
}