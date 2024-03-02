document.getElementById('postTripForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const startPoint = document.getElementById('startPoint').value;
    const endPoint = document.getElementById('endPoint').value;
  
    const trip = {
        startPoint: startPoint,
        endPoint: endPoint,
    };
  
    let postedTrips = JSON.parse(localStorage.getItem('postedTrips')) || [];

    postedTrips.push(trip);

    localStorage.setItem('postedTrips', JSON.stringify(postedTrips));
  
    window.location.href = "../ride/ride.html";
  });