document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault();
    handleFormSubmit();
});

function handleFormSubmit() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();

    if (name === '' || email === '') {
        alert('Please fill in all required fields');
    } else {
        alert('Form submitted successfully!');
    }
}