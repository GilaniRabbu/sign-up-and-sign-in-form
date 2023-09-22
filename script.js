function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var checkbox = document.getElementById("checkbox").checked;

    var errorMessage = "";

    if (!name || !email || !country || !phone || !password || !checkbox) {
        errorMessage = "All fields are required.";
    }

    if (errorMessage) {
        document.getElementById("error-message").innerHTML = errorMessage;
        return false;
    }

    return true;
}

function validateLoginForm() {
    var loginName = document.getElementById("login-name").value;
    var loginPassword = document.getElementById("login-password").value;

    var loginErrorMessage = "";

    if (!loginName || !loginPassword) {
        loginErrorMessage = "Required User Name & Password.";
    }

    if (loginErrorMessage) {
        document.getElementById("login-error-message").innerHTML = loginErrorMessage;
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    var eyeIcon = document.querySelector(".fa-eye-slash");
    var passwordInput = document.getElementById("password");

    eyeIcon.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        } else {
            passwordInput.type = "password";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        }
    });

    var newEyeIcon = document.querySelector(".fa-eye-low-vision");
    var LoginPass = document.getElementById("login-password");

    newEyeIcon.addEventListener("click", function () {
        if (LoginPass.type === "password") {
            LoginPass.type = "text";
            newEyeIcon.classList.remove("fa-eye-low-vision");
            newEyeIcon.classList.add("fa-eye");
        } else {
            LoginPass.type = "password";
            newEyeIcon.classList.remove("fa-eye");
            newEyeIcon.classList.add("fa-eye-low-vision");
        }
    });

    var phoneInput = document.getElementById("phone");
    var iti = window.intlTelInput(phoneInput, {
        initialCountry: "auto",
        separateDialCode: true,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
    });

    iti.setCountry("bd");

    var signInLink = document.getElementById("sign-in-link");
    var createAccountLink = document.getElementById("create-account-link");

    signInLink.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("registration").style.display = "none";
        document.getElementById("login").style.display = "block";
    });

    createAccountLink.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("registration").style.display = "block";
        document.getElementById("login").style.display = "none";
    });
});