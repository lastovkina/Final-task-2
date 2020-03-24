
$(document).ready(function() {

  // Configure Slider
  $('.carousel').carousel({
    interval: 6000,
    pause: 'hover'
  });

  // Get the current year for the copyright
  $('#year').text(new Date().getFullYear());

});

// Lightbox Init
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


var password = document.getElementById("InputPassword"), confirm_password = document.getElementById("InputPassword2");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;




function send(){
  // Selecting the input element and get its value 
  var usernameVal = document.getElementById("username").value;
  var messageVal = document.getElementById("message").value;
              
  var NewMessage = document.createElement("P");                
  NewMessage.innerHTML = "<strong>"+usernameVal+"</strong> <small>"+Date()+"</small>";              
  document.getElementById("messages").appendChild(NewMessage);
  var NewMessage = document.createElement("P");                
  NewMessage.innerHTML = messageVal;              
  document.getElementById("messages").appendChild(NewMessage);
  var NewMessage = document.createElement("HR");                            
  document.getElementById("messages").appendChild(NewMessage);
}