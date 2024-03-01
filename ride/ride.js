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

// Function to display temporary message and redirect to homepage
function displayTemporaryMessageAndRedirect() {
    // Display temporary message
    alert("Thank You for using InSpot for your commuting needs. Your ride is confirmed.");
    // Redirect to homepage
    window.location.href = "../homepage.html";
}

// Add event listeners to select trip buttons
const selectTripButtons = document.querySelectorAll('.select-trip-btn');
selectTripButtons.forEach(button => {
    button.addEventListener('click', displayTemporaryMessageAndRedirect);
});
