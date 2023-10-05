document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validatePassword();
});

function validatePassword() {
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(password)) {
        error.textContent = '';
        
    } else {
        error.textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.';
    }
}