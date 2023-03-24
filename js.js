// Code for subscription form
const form = document.querySelector('form');
const emailInput = form.querySelector('input[type="email"]');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value;
  console.log(`Email address submitted: ${email}`);
  // Code to send email address to server or database goes here
});
