


const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  // get input values
  const email = emailInput.value;
  const password = passwordInput.value;

  // perform validation
  if (email === 'example@example.com' && password === 'password123') {
    alert('Login successful!');
    // redirect to user dashboard or desired page
  } else {
    alert('Incorrect login details. Please try again.');
  }
});
window.location.href="Homepage.html"


