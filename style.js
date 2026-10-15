function login() {
    event.preventDefault();
    let email = document.getElementById("emaildata").value;
    let password = document.getElementById("passworddata").value;
    let error = document.getElementById("error");
    if (email === "admin@gmail.com" && password === "1234") {
        localStorage.setItem("isloggedin", "true");
        localStorage.setItem("user", email);
        localStorage.setItem("userpassword", password);

        // redirected
        window.location.href = "index.html";

    }
    else {
        error.innerText = "invaliid email or password ";
    }

}

function togglePassword() {
    let passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password";
    }
}




