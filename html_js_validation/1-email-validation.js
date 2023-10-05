document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateEmail();
});

function validateEmail() {
    const email = document.getElementById('email').value;
    const error = document.getElementById('error');
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(email)) {
        error.textContent = ''; // Clear the error message when the email is valid
    } else {
        error.textContent = 'Please enter a valid email address.';
    }
}
