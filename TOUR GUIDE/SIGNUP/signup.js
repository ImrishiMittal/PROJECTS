document.addEventListener("DOMContentLoaded", function () {
    // Get form elements
    const usernameInput = document.getElementById("USERNAME");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const signupButton = document.querySelector(".btn-primary");
    const loginButton = document.querySelector(".login");

    // Add event listener for the 'Sign Up' button
    signupButton.addEventListener("click", function () {
        if (validateForm()) {
            const username = usernameInput.value.trim();
            // Store the username in localStorage
            localStorage.setItem('username', username);

            alert("Sign Up successful!");
            // Redirect to welcome.html after successful sign-up
            window.location.href = "/WELCOME/welcome.html"; // Change this to your actual path for the welcome page
        }
    });

    // Add event listener for the 'Login' button
    loginButton.addEventListener("click", function () {
        alert("Redirecting to login...");
        // You can add the logic to redirect to the login page here
        window.location.href = "/LOGIN/login.html"; // Update this with the correct login page URL if necessary
    });

    // Form validation function
    function validateForm() {
        let isValid = true;

        // Validate Username
        const username = usernameInput.value.trim();
        if (username === "" || !/^[a-zA-Z0-9]+$/.test(username)) {
            alert("Please enter a valid username. It should contain only letters and numbers.");
            isValid = false;
        }

        // Validate Email
        const email = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Validate Password
        const password = passwordInput.value.trim();
        if (password === "" || password.length < 6) {
            alert("Password must be at least 6 characters long.");
            isValid = false;
        }

        return isValid;
    }
});
