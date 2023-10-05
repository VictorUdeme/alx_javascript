document.getElementById('numFields').addEventListener('change', function() {
    generateInputFields(this.value);
});

document.getElementById('dynamicForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function generateInputFields(num) {
    const container = document.getElementById('inputContainer');
    container.innerHTML = '';
    for (let i = 0; i < num; i++) {
        let input = document.createElement('input');
        input.type = 'text';
        input.name = 'field' + (i + 1);
        container.appendChild(input);
    }
}

function validateForm() {
    let inputs = document.getElementById('inputContainer').getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            alert('Please fill in all fields');
            return;
        }
    }
    
}