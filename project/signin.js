






const continueButton = document.getElementById('click');

// add a click event listener to the button
continueButton.addEventListener('click', function(){
  const mobileNumber = document.getElementById('phone').value;
  if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
    alert('Please enter a valid mobile number');
    return;
  }
  
  const storedUserData = JSON.parse(localStorage.getItem('userData'));

  for (let i = 0; i < storedUserData.length; i++) {
    if (storedUserData[i].userMobile === mobileNumber) {
      // User already exists, redirect to login page
      window.location.href = "loginpage.html";
      return;
    }
  }

  // Store the mobile number in the local storage
  localStorage.setItem('phoneNumber', mobileNumber);

  // User is new, redirect to sign up page
  window.location.href = "signup.html";
});

// get the "Continue with email" button element
const emailButton = document.getElementById('email');

// add a click event listener to the button
emailButton.addEventListener('click', function(event) {
  // prevent the form from being submitted
  event.preventDefault();
  // redirect to the email.html page
  window.location.href = 'email.html';
});

// get the Google button element
const googleButton = document.getElementById('google');

// add a click event listener to the button
googleButton.addEventListener('click', function() {
  // redirect to the google.html page
  window.location.href = 'google.html';
});

// get the Facebook button element
const facebookButton = document.getElementById('facebook');

// add a click event listener to the button
facebookButton.addEventListener('click', function() {
  // redirect to the facebook.html page
  window.location.href = 'facebook.html';
});