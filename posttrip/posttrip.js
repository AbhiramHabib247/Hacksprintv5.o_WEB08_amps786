document.getElementById('postTripForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const startPoint = document.getElementById('startPoint').value;
    const endPoint = document.getElementById('endPoint').value;
    const pricePerPerson = document.getElementById('pricePerPerson').value;
  
    const trip = {
        startPoint: startPoint,
        endPoint: endPoint,
        pricePerPerson: pricePerPerson
    };
  
    // Simulate saving the trip data to a database or local storage
    console.log("Posted Trip:", trip);
    // Redirect to the find_trip.html page
    window.location.href = "ride.html";
  });