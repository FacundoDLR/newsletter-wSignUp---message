// email validation
const form = document.getElementById('contact-form');
const emailField = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const responseForm = document.getElementById('contact-form-response');
const responseEmail = document.getElementById('email-response');
const main = document.getElementById('main');
const resetButton = document.getElementById('reset-button');

const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValue = emailField.value;

    if (!regex.test(emailValue)) {
        errorMessage.textContent = emailField.title;
        emailField.classList.add('contact-form', 'shake');
        errorMessage.classList.add('shake');
        setTimeout(function () {
            emailField.classList.remove("shake");
            errorMessage.classList.remove('shake');
        }, 500);
        if (emailField.classList.contains('valid')) {
            emailField.classList.replace('valid', 'invalid');
        } else {
            emailField.classList.add('invalid');
        }
    } else {
        errorMessage.textContent = '';

        emailField.classList.add('contact-form');
        if (emailField.classList.contains('invalid')) {
            emailField.classList.replace('invalid', 'valid');
        } else {
            emailField.classList.add('valid');
            alert('sending form');
            setTimeout(() => {
                main.classList.add('none');
                responseForm.classList.remove('none');
                responseEmail.innerText = emailValue;
                form.reset();
            }, 1000);
        }
    }


}

form.addEventListener('submit', handleSubmit)

const resetState = () => {
    responseForm.classList.add('none');
    main.classList.remove('none');
    emailField.classList.remove('valid');
}
resetButton.addEventListener('click', resetState);