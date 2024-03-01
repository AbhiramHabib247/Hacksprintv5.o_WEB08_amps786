document.getElementById('postTripForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const startPoint = document.getElementById('startPoint').value;
    const endPoint = document.getElementById('endPoint').value;
    const tripTime = document.getElementById('tripTime').value;
    const pricePerPerson = document.getElementById('pricePerPerson').value;
  
    const trip = {
        startPoint: startPoint,
        endPoint: endPoint,
        tripTime: tripTime,
        pricePerPerson: pricePerPerson
    };
  
    // Retrieve existing trips from localStorage
    let postedTrips = JSON.parse(localStorage.getItem('postedTrips')) || [];
    // Add the new trip to the array
    postedTrips.push(trip);
    // Store the updated array back in localStorage
    localStorage.setItem('postedTrips', JSON.stringify(postedTrips));
  
    // Redirect to the find_trip.html page
    window.location.href = "../ride/ride.html";
  });
  