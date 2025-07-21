document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Assumes there's only one form
    const usernameInput = document.getElementById("USERNAME");
    const emailInput = document.getElementById("email");
    const loginButton = document.querySelector(".login");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop the default form submission

        if (validateForm()) {
            const formData = new FormData(form);

            // Submit using fetch (Web3Forms or any endpoint you're using)
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert("Form submitted successfully!");

                    const username = usernameInput.value.trim();
                    localStorage.setItem('username', username);

                    // Redirect after successful submission
                    window.location.href = "/WELCOME/welcome.html"; // your desired page
                } else {
                    alert("Failed to submit form. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Error submitting form.");
            });
        }
    });

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "/LOGIN/login.html";
    });

    function validateForm() {
        let isValid = true;

        const username = usernameInput.value.trim();
        if (username === "" || !/^[a-zA-Z0-9\s._-]+$/.test(username)) {
            alert("Please enter a valid username. Only letters and numbers allowed.");
            isValid = false;
        }

        const email = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        return isValid;
    }
});
