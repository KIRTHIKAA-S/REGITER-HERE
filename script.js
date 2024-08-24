document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    let isValid = true;
    const fields = ['firstname', 'lastname', 'email', 'contact', 'address', 'city'];

    fields.forEach(function(field) {
        const input = document.getElementById(field);
        if (input.value.trim() === '') {
            isValid = false;
            alert(`Please fill out the ${field} field.`);
            input.focus();
            return;
        }
    });

    if (isValid) {
        // Proceed with form submission by submitting the form to the PHP script
        this.submit();
    }
});
