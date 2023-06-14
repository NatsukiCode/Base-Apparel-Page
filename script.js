const theButton = document.getElementById('submitBtn');
theButton.addEventListener('click', runValidation);

function runValidation(){
    let emailAddressInput = document.getElementById('emailAddress');

    let emailErrorMessage = document.getElementById('emailErrorMessage');

    let emailIconError = document.getElementById('emailIconError');

    emailErrorMessage.style.display = 'none';
    emailIconError.style.display = 'none';
    emailAddressInput.classList.remove('error');

    if (emailAddressInput.value === '') {
        emailErrorMessage.innerText = 'Please provide a valid email';
        emailErrorMessage.style.display = 'block';
        emailAddressInput.classList.add('error');
        emailIconError.style.display = 'block';
        emailAddressInput.placeholder = '';
    }

}