document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Here you can add further validation or send the data to your backend

    // Display a success message
    const successMessage = document.createElement('div');
    successMessage.textContent = "You have successfully signed up, please sign in to start commuting.";
    document.body.appendChild(successMessage);

    // Redirect to a different page after a delay
    setTimeout(function() {
      window.location.href = "../authentication/authentication.html";
    }, 1000); // 2000 milliseconds = 2 seconds (adjust as needed)
  });
});


