document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var cardNumber = document.getElementById('cardNumber').value;
    var cardHolder = document.getElementById('cardHolder').value;
    var expiry = document.getElementById('expiry').value;
    var cvv = document.getElementById('cvv').value;

    // Basic validation
    if (cardNumber === '' || cardHolder === '' || expiry === '' || cvv === '') {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    // In a real application, you would send this data securely to a server-side script for processing

    showMessage('Payment successful!', 'success');
});

function showMessage(message, className) {
    var div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    var container = document.querySelector('.container');
    var form = document.querySelector('#paymentForm');
    container.insertBefore(div, form);
    setTimeout(function() {
        document.querySelector('.' + className).remove();
    }, 3000);
    window.location.href = "../homepage_after_payment.html";
  }
