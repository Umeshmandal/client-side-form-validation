const contactForm = document.getElementById("contactForm");
const signupForm = document.getElementById("signupForm");

const contactSection = document.getElementById("contactSection");
const signupSection = document.getElementById("signupSection");


// ================================
// CONTACT FORM ELEMENTS
// ================================

const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactPhone = document.getElementById("contactPhone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


// ================================
// SIGN UP FORM ELEMENTS
// ================================

const username = document.getElementById("username");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const passwordAgain = document.getElementById("passwordAgain");


// ================================
// SHOW ERROR
// ================================

function showError(input, errorId, text) {

    document.getElementById(errorId).textContent = text;

    input.classList.add("invalid");
    input.classList.remove("valid");
}


// ================================
// CLEAR ERROR
// ================================

function clearError(input, errorId) {

    document.getElementById(errorId).textContent = "";

    input.classList.remove("invalid");
    input.classList.add("valid");
}


// ================================
// NAME VALIDATION
// ================================

function validateContactName() {

    const value = contactName.value.trim();

    if (value === "") {

        showError(
            contactName,
            "contactNameError",
            "Name is required."
        );

        return false;
    }

    if (!/^[A-Za-z ]{2,}$/.test(value)) {

        showError(
            contactName,
            "contactNameError",
            "Enter a valid name."
        );

        return false;
    }

    clearError(contactName, "contactNameError");

    return true;
}


// ================================
// EMAIL VALIDATION
// ================================

function validateContactEmail() {

    const value = contactEmail.value.trim();

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (value === "") {

        showError(
            contactEmail,
            "contactEmailError",
            "Email is required."
        );

        return false;
    }

    if (!pattern.test(value)) {

        showError(
            contactEmail,
            "contactEmailError",
            "Enter a valid email address."
        );

        return false;
    }

    clearError(contactEmail, "contactEmailError");

    return true;
}


// ================================
// PHONE VALIDATION
// ================================

function validateContactPhone() {

    const value = contactPhone.value.trim();

    if (value === "") {

        showError(
            contactPhone,
            "contactPhoneError",
            "Phone number is required."
        );

        return false;
    }

    if (!/^[6-9][0-9]{9}$/.test(value)) {

        showError(
            contactPhone,
            "contactPhoneError",
            "Enter a valid 10-digit phone number."
        );

        return false;
    }

    clearError(contactPhone, "contactPhoneError");

    return true;
}


// ================================
// SUBJECT VALIDATION
// ================================

function validateSubject() {

    const value = subject.value.trim();

    if (value === "") {

        showError(
            subject,
            "subjectError",
            "Subject is required."
        );

        return false;
    }

    if (value.length < 3) {

        showError(
            subject,
            "subjectError",
            "Subject must contain at least 3 characters."
        );

        return false;
    }

    clearError(subject, "subjectError");

    return true;
}


// ================================
// MESSAGE VALIDATION
// ================================

function validateMessage() {

    const value = message.value.trim();

    if (value === "") {

        showError(
            message,
            "messageError",
            "Message is required."
        );

        return false;
    }

    if (value.length < 10) {

        showError(
            message,
            "messageError",
            "Message must contain at least 10 characters."
        );

        return false;
    }

    clearError(message, "messageError");

    return true;
}


// ================================
// CONTACT FORM SUBMIT
// ================================

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const validName = validateContactName();
    const validEmail = validateContactEmail();
    const validPhone = validateContactPhone();
    const validSubject = validateSubject();
    const validMessage = validateMessage();

    if (
        validName &&
        validEmail &&
        validPhone &&
        validSubject &&
        validMessage
    ) {

        contactSection.classList.add("hidden");
        signupSection.classList.remove("hidden");

    }

});


// ================================
// SIGN UP VALIDATION
// ================================

function validateUsername() {

    const value = username.value.trim();

    if (value === "") {

        showError(
            username,
            "usernameError",
            "Username is required."
        );

        return false;
    }

    if (!/^[A-Za-z0-9_]{3,20}$/.test(value)) {

        showError(
            username,
            "usernameError",
            "Username must contain 3-20 characters."
        );

        return false;
    }

    clearError(username, "usernameError");

    return true;
}


// ================================
// SIGN UP EMAIL
// ================================

function validateSignupEmail() {

    const value = signupEmail.value.trim();

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (value === "") {

        showError(
            signupEmail,
            "signupEmailError",
            "Email is required."
        );

        return false;
    }

    if (!pattern.test(value)) {

        showError(
            signupEmail,
            "signupEmailError",
            "Enter a valid email address."
        );

        return false;
    }

    clearError(signupEmail, "signupEmailError");

    return true;
}


// ================================
// PASSWORD VALIDATION
// ================================

function validateSignupPassword() {

    const value = signupPassword.value;

    const pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (value === "") {

        showError(
            signupPassword,
            "signupPasswordError",
            "Password is required."
        );

        return false;
    }

    if (!pattern.test(value)) {

        showError(
            signupPassword,
            "signupPasswordError",
            "Use 8+ characters with uppercase, lowercase, number and special character."
        );

        return false;
    }

    clearError(
        signupPassword,
        "signupPasswordError"
    );

    return true;
}


// ================================
// PASSWORD AGAIN
// ================================

function validatePasswordAgain() {

    const value = passwordAgain.value;

    if (value === "") {

        showError(
            passwordAgain,
            "passwordAgainError",
            "Please enter your password again."
        );

        return false;
    }

    if (value !== signupPassword.value) {

        showError(
            passwordAgain,
            "passwordAgainError",
            "Passwords do not match."
        );

        return false;
    }

    clearError(
        passwordAgain,
        "passwordAgainError"
    );

    return true;
}


// ================================
// SIGN UP SUBMIT
// ================================

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const validUsername = validateUsername();
    const validEmail = validateSignupEmail();
    const validPassword = validateSignupPassword();
    const validPasswordAgain = validatePasswordAgain();

    if (
        validUsername &&
        validEmail &&
        validPassword &&
        validPasswordAgain
    ) {

        const success =
            document.getElementById("signupSuccess");

        success.textContent =
            "Registration successful! Welcome to our website.";

        success.classList.add("show");

        signupForm.reset();

    }

});


// ================================
// REAL-TIME VALIDATION
// ================================

contactName.addEventListener("blur", validateContactName);

contactEmail.addEventListener("blur", validateContactEmail);

contactPhone.addEventListener("blur", validateContactPhone);

subject.addEventListener("blur", validateSubject);

message.addEventListener("blur", validateMessage);

username.addEventListener("blur", validateUsername);

signupEmail.addEventListener("blur", validateSignupEmail);

signupPassword.addEventListener(
    "blur",
    validateSignupPassword
);

passwordAgain.addEventListener(
    "blur",
    validatePasswordAgain
);


// ================================
// PHONE NUMBERS ONLY
// ================================

contactPhone.addEventListener("input", function() {

    this.value = this.value.replace(/\D/g, "");

});
// ================================
// RESET CONTACT FORM
// ================================

contactForm.addEventListener("reset", function() {

    setTimeout(function() {

        document
            .querySelectorAll("#contactForm input, #contactForm textarea")
            .forEach(function(element) {

                element.classList.remove("valid");
                element.classList.remove("invalid");

            });

        document
            .querySelectorAll("#contactForm .error")
            .forEach(function(error) {

                error.textContent = "";

            });

    }, 0);

});


// ================================
// RESET SIGN UP FORM
// ================================

signupForm.addEventListener("reset", function() {

    setTimeout(function() {

        document
            .querySelectorAll("#signupForm input")
            .forEach(function(element) {

                element.classList.remove("valid");
                element.classList.remove("invalid");

            });

        document
            .querySelectorAll("#signupForm .error")
            .forEach(function(error) {

                error.textContent = "";

            });

        document
            .getElementById("signupSuccess")
            .classList.remove("show");

    }, 0);

});

