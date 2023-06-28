


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function validateMobile(mobile) {
    const re = /^[0-9]{10}$/;
    return re.test(mobile);
  }
  
  function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return re.test(password);
  }
  
  function userSign(event) {
    event.preventDefault();
    let userName = document.querySelector("#nam").value;
    let userEmail = document.querySelector("#email").value;
    let userPassword = document.querySelector("#password").value;
    let input = document.querySelector("#phone");
    let iti = window.intlTelInput(input, {
      preferredCountries: ["in"],
      separateDialCode: true,
      utilsScript: "build/js/utils.js",
    });
    let userMobile = iti.getNumber(intlTelInputUtils.numberFormat.E164);
    let userArr = JSON.parse(localStorage.getItem("userData")) || [];
  
    if (!userName || !userEmail || !userPassword || !userMobile) {
      alert("Please fill in all the fields.");
      return;
    }
  
    if (!validateEmail(userEmail)) {
      alert("Please enter valid email ID.");
      return;
    }
  
    if (!validateMobile(userMobile)) {
      alert("Please enter a valid phone number.");
      return;
    }
  
    if (!validatePassword(userPassword)) {
      alert("Please enter a valid password with at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.");
      return;
    }
  
    const existingUser = userArr.find(user => user.userEmail === userEmail || user.userMobile === userMobile);
  
    if (existingUser) {
      alert("User with this email or mobile number already exists.");
      return;
    }
  
    let userObj = {
      userName: userName,
      userMobile: userMobile,
      userEmail: userEmail,
      userPassword: userPassword
    }
  
    userArr.push(userObj);
    localStorage.setItem("userData", JSON.stringify(userArr));
  
    fetch('/send-confirmation-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: userEmail,
        subject: 'Please confirm your email',
        html: '<p>Please click <a href="https://example.com/verify-email">here</a> to verify your email address.</p>'
      })
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
  
  
    alert("You have successfully signed up");
    window.location.href = '../mainpage/index.html';
  }
  
  document.querySelector("form").addEventListener("submit", userSign);
  
 /* window.location.href = 'Homepage.html';*/