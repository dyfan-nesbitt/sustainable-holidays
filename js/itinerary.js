// Get data from localStorage
const sharedHolidays = JSON.parse(localStorage.getItem("sharedHolidays"));
const match = JSON.parse(localStorage.getItem("matchedProfile"));
const likedHolidays = JSON.parse(localStorage.getItem("likedHolidays"));

// Pick lowest carbon shared holiday
const sharedHolidayObjects = likedHolidays
    .map((id) => holidays.find((h) => h.id === id))
    .filter(Boolean);

const chosen = sharedHolidayObjects.reduce((best, current) =>
  current.carbonScore < best.carbonScore ? current : best,
);

// Destination
document.getElementById("destinationName").textContent = chosen.destination;
document.getElementById("destinationImage").src = chosen.image;

// Crew
const crewContainer = document.getElementById("crew");

// Add user as "You"
const you = document.createElement("div");
you.className = "crew-member";
you.innerHTML = `<div style="width:50px;height:50px;border-radius:50%;background:#4ade80;display:flex;align-items:center;justify-content:center;"></div><span>You</span>`;
crewContainer.appendChild(you);

// Add match
const matchDiv = document.createElement("div");
matchDiv.className = "crew-member";
matchDiv.innerHTML = `<img src="${match.image}" alt=""><span>${match.name}</span>`;
crewContainer.appendChild(matchDiv);

// Activities
const activitiesContainer = document.getElementById("activities");
let totalCost = 0;
let totalCarbon = 0;

chosen.activities.forEach((activity, index) => {
  totalCost += activity.cost;
  totalCarbon += activity.carbon;

  const div = document.createElement("div");
  div.className = "activity";
  div.innerHTML = `
                <div class="activity-left">
                    <span class="activity-number">${index + 1}</span>
                    <span class="activity-time">${activity.time}</span>
                    <span class="activity-name">${activity.name}</span>
                </div>
                <div class="activity-right">
                    <div>£${activity.cost}</div>
                    <div>${activity.carbon}kg CO2</div>
                </div>
            `;
  activitiesContainer.appendChild(div);
});

// Add base carbon from transport
totalCarbon += chosen.carbonScore;

// Totals
const carbonClass =
  chosen.carbonRating === "green"
    ? "carbon-green"
    : chosen.carbonRating === "amber"
      ? "carbon-amber"
      : "carbon-red";

document.getElementById("totalCost").textContent = `Total: £${totalCost}`;
document.getElementById("totalCarbon").innerHTML =
  `Carbon: <span class="${carbonClass}">${totalCarbon}kg CO2</span>`;

// Google Maps - loads after page
window.initMap = function() {
    const mapInstance = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 0, lng: 0 },
    });

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: chosen.destination }, (results, status) => {
        if (status === "OK") {
            const center = results[0].geometry.location;
            mapInstance.setCenter(center);
            new google.maps.Marker({
                map: mapInstance,
                position: center,
                title: chosen.destination
            });
        }
    });
}