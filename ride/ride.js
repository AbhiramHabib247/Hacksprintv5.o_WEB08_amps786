// Retrieve the posted trips data from localStorage
const postedTrips = JSON.parse(localStorage.getItem('postedTrips')) || [];

const availableTripsSection = document.getElementById("availableTripsSection");

if (postedTrips.length > 0) {
    // Create a table element
    const tripsTable = document.createElement("table");
    tripsTable.classList.add("trips-table");

    // Create table header
    const tableHeader = document.createElement("thead");
    tableHeader.innerHTML = `
        <tr>
            <th>Start Point___</th>
            <th>End Point___ </th>
            <th>Start Time____</th>
            <th>Price Per Person  </th>
        </tr>
    `;
    tripsTable.appendChild(tableHeader);

    // Create table body
    const tableBody = document.createElement("tbody");

    // Display each posted trip in a table row
    postedTrips.forEach(trip => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${trip.startPoint}</td>
            <td>${trip.endPoint}</td>
            <td>${trip.tripTime}</td>
            <td>$${trip.pricePerPerson }</td>
 `;
    });

    // Append table body to the table
    tripsTable.appendChild(tableBody);

    // Append the table to the availableTripsSection
    availableTripsSection.appendChild(tripsTable);
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


