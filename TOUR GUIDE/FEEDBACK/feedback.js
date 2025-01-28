const form = document.getElementById("feedbackForm");

        form.addEventListener("submit", (e) => {
            let isValid = true;

            // Name validation
            const name = document.getElementById("name");
            const nameError = document.getElementById("nameError");
            if (name.value.trim() === "") {
                nameError.textContent = "Name is required.";
                name.classList.add("error-input");
                isValid = false;
            } else {
                nameError.textContent = "";
                name.classList.remove("error-input");
            }

            // Email validation
            const email = document.getElementById("mail");
            const emailError = document.getElementById("emailError");
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                emailError.textContent = "Enter a valid email address.";
                email.classList.add("error-input");
                isValid = false;
            } else {
                emailError.textContent = "";
                email.classList.remove("error-input");
            }

            // Phone number validation
            const phone = document.getElementById("phone");
            const phoneError = document.getElementById("phoneError");
            if (!/^\d{10}$/.test(phone.value)) {
                phoneError.textContent = "Phone number must be exactly 10 digits.";
                phone.classList.add("error-input");
                isValid = false;
            } else {
                phoneError.textContent = "";
                phone.classList.remove("error-input");
            }

            // Age validation
            const age = document.getElementById("age");
            const ageError = document.getElementById("ageError");
            if (age.value.trim() === "" || age.value <= 0) {
                ageError.textContent = "Enter a valid age.";
                age.classList.add("error-input");
                isValid = false;
            } else {
                ageError.textContent = "";
                age.classList.remove("error-input");
            }

            // Gender validation
            const genderError = document.getElementById("genderError");
            const male = document.getElementById("male");
            const female = document.getElementById("female");
            if (!male.checked && !female.checked) {
                genderError.textContent = "Please select your gender.";
                isValid = false;
            } else {
                genderError.textContent = "";
            }

            // Rate validation
            const rateError = document.getElementById("rateError");
            const rates = document.getElementsByName("rate");
            const isRateSelected = Array.from(rates).some(rate => rate.checked);
            if (!isRateSelected) {
                rateError.textContent = "Please rate your experience.";
                isValid = false;
            } else {
                rateError.textContent = "";
            }

            // Suggestion validation
            const suggestion = document.getElementById("suggestion");
            const suggestionError = document.getElementById("suggestionError");
            if (suggestion.value.trim() === "") {
                suggestionError.textContent = "Suggestion cannot be empty.";
                suggestion.classList.add("error-input");
                isValid = false;
            } else {
                suggestionError.textContent = "";
                suggestion.classList.remove("error-input");
            }

            // Prevent form submission if invalid
            if (!isValid) {
                e.preventDefault();
            }
        });