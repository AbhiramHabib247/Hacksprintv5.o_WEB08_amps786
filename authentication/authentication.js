// JavaScript code for handling form submission and redirection
document.getElementById("authenticationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Here you can handle form submission, for example, by uploading the file and then redirecting to another page
  // For demonstration purpose, let's simulate file upload delay and then redirect
  
  // Simulate file upload delay (5 seconds)
  setTimeout(function() {
      // Redirect to another page (xyz.html)
      window.location.href = "../homepage_after_signup.html";
  }, 1000); // Change 5000 to desired delay in milliseconds
});
