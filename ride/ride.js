// Retrieve the posted trips data from localStorage
const postedTrips = JSON.parse(localStorage.getItem('postedTrips')) || [];

const availableTripsSection = document.getElementById("availableTripsSection");

if (postedTrips.length > 0) {
    // Display each posted trip
    postedTrips.forEach(trip => {
        const tripElement = document.createElement("div");
        tripElement.classList.add("trip");

        // Create trip details text
        const tripDetails = document.createElement("div");
        tripDetails.innerHTML = `
            <p>Start Point: ${trip.startPoint}</p>
            <p>End Point: ${trip.endPoint}</p>
            <p>Start Time: ${trip.tripTime}</p>
            <p>Price Per Person: $${trip.pricePerPerson}</p>
        `;
        tripElement.appendChild(tripDetails);

        // Create Select Trip button
        const selectTripButton = document.createElement("button");
        selectTripButton.classList.add("select-trip-btn");
        selectTripButton.textContent = "Select Trip";
        selectTripButton.addEventListener('click', displayTemporaryMessageAndRedirect);
        tripElement.appendChild(selectTripButton);

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
    window.location.href = "../paygateway/paygetway.html";
}


