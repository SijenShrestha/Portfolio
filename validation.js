function validateForm() {
    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Get form values
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Initialize valid flag
    var isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name cannot be blank.";
        document.getElementById("nameError").style.color = "red"; // Red error message
        isValid = false;
    }

    // Password match validation
    if (password !== confirmPassword) {
        document.getElementById("passwordError").textContent = "Passwords do not match.";
        document.getElementById("passwordError").style.color = "red"; // Red error message
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        return false;
    }

    // If everything is valid, submit the form
    alert("Form submitted successfully!");
}
