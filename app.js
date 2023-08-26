let emailInput = document.querySelector('#email');
let warningText = document.querySelector('#error-message');
let formDetails = document.getElementById('formInput');
let modalCard = document.querySelector('.modal');
let containerEl = document.querySelector('.container');

emailInput.addEventListener('change', () =>  {
    let email = emailInput.value;

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        warningText.style.display = 'block';
        emailInput.style.borderColor = 'hsl(4, 100%, 67%)'
        emailInput.style.color = 'hsl(4, 100%, 67%)'
        emailInput.style.backgroundColor = 'hsl(240, 2%, 91%)'
    } else {
        warningText.style.display = 'none';
        emailInput.style.borderColor = ''
        emailInput.style.color = ''
        emailInput.style.backgroundColor = ''
    }
})

formDetails.addEventListener('submit', (event) => {
    event.preventDefault();

    let myFormData = new FormData(event.target);
    let userEmail = myFormData.get("email");

    let modal = `
    <div class="modalcard">
      <img src="assets/images/icon-success.svg" alt="">
      <h2>Thanks for subscribing!</h2>
      <p>A confirmation email has been sent to <strong>${userEmail}</strong> Please open it and click the button inside to confirm your subscription.</p>
      <button>Dismiss message</button>
      <div>`

      containerEl.style.display = 'none'
      modalCard.innerHTML = modal;
    })