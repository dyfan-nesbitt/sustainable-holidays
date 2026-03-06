// Read from localStorage
const match = JSON.parse(localStorage.getItem("matchedProfile"));
const compatibility = localStorage.getItem("compatibility");
const likedHolidays = JSON.parse(localStorage.getItem("likedHolidays"));

if (!match) {
  document.body.innerHTML = "<h2>No match found — go back and swipe!</h2>";
} else {
  document.getElementById("matchImage").src = match.image;
  document.getElementById("matchName").textContent =
    match.name + ", " + match.age;
  document.getElementById("matchBio").textContent = match.bio;
  document.getElementById("compatibilityScore").textContent = compatibility;

  // Show shared holidays
  const shared = likedHolidays.filter((id) => match.likedHolidays.includes(id));
  const container = document.getElementById("sharedHolidays");

  document.getElementById("compatibilityScore").textContent =
    `You have ${shared.length} out of ${holidays.length} in common with ${match.name}`;

  shared.forEach((id) => {
    const holiday = holidays.find((h) => h.id === id);
    if (holiday) {
      const pill = document.createElement("span");
      pill.className = "holiday-pill";
      pill.textContent = holiday.destination;
      container.appendChild(pill);
    }
  });

  // Save shared holidays for itinerary page
  localStorage.setItem("sharedHolidays", JSON.stringify(shared));
}
