


function validateForm() {
    var emailInput = document.getElementById("email");
  
    if (emailInput.value === "") {
      alert("Please enter a valid email");
      return false;
    } else {
      return true;
    }
  }
  
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Password reset link sent successfully");
    }
  });