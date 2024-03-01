// Retrieve the posted trips data from localStorage
const postedTrips = JSON.parse(localStorage.getItem('postedTrips')) || [];

const availableTripsSection = document.getElementById("availableTripsSection");

if (postedTrips.length > 0) {
    // Display each posted trip
    postedTrips.forEach(trip => {
        const tripElement = document.createElement("div");
        tripElement.innerHTML = `
            <p>Start Point: ${trip.startPoint}</p>
            <p>End Point: ${trip.endPoint}</p>
            <p>Start Time: ${trip.tripTime}</p>
            <p>Price Per Person: $${trip.pricePerPerson}</p>
        `;
        availableTripsSection.appendChild(tripElement);
    });
} else {
    // Display a message if no trips are posted
    availableTripsSection.innerHTML = "<p>No trips posted yet.</p>";
}