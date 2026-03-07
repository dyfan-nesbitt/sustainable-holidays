const bookings = [ 
    { traveller: "Maya, Jake", destination: 1, carbonRating: "amber"},
    { traveller: "Jake, Tom", destination: 6, carbonRating: "green"},
    { traveller: "Sofia, Priya", destination: 7, carbonRating: "green"},
    { traveller: "Tom, Sofia", destination: 4, carbonRating: "red"},
    { traveller: "Priya, Maya", destination: 3, carbonRating: "green" },
    { traveller: "Maya, Jake",  destination: 4, carbonRating: "red" },
    { traveller: "Jake, Tom",  destination: 10, carbonRating: "red" },
    { traveller: "Sofia, Priya", destination: 3, carbonRating: "green" },
    { traveller: "Tom, Jake",   destination: 1, carbonRating: "amber" },
    { traveller: "Priya, Maya", destination: 1, carbonRating: "amber" }
];

const populated = bookings.map(b => {
    const holiday = holidays.find(h => h.id === b.destination);
    return { ...b, holiday };
});

document.getElementById("totalBookings").textContent = populated.length;

const avgCarbon = Math.round(
    populated.reduce((sum, b) => sum + b.holiday.carbonScore, 0) / populated.length
);

document.getElementById("avgCarbon").textContent = avgCarbon + "kg CO2";

const destinationCounts = {};
populated.forEach(b => {
    const name = b.holiday.destination;
    destinationCounts[name] = (destinationCounts[name] || 0) + 1;
});

new Chart(document.getElementById("destinationsChart"), {
    type: "bar",
    data: {
        labels: Object.keys(destinationCounts),
        datasets: [{
            label: "Bookings",
            data: Object.values(destinationCounts),
            backgroundColor: "#4ade80"
        }]
    },
    options: { responsive: true }
});

const carbonCounts = { green: 0, amber: 0, red: 0 };
populated.forEach(b => carbonCounts[b.carbonRating]++);

new Chart(document.getElementById("carbonChart"), {
    type: "pie",
    data: {
        labels: ["Green", "Amber", "Red"],
        datasets: [{
            data: [carbonCounts.green, carbonCounts.amber, carbonCounts.red],
            backgroundColor: ["#4ade80", "#fbbf24", "#f87171"]
        }]
    },
    options: { responsive: true }
});

const transportCounts = {};
populated.forEach(b => {
    const t = b.holiday.transport;
    transportCounts[t] = (transportCounts[t] || 0) + 1;
});

new Chart(document.getElementById("transportChart"), {
    type: "doughnut",
    data: {
        labels: Object.keys(transportCounts),
        datasets: [{
            data: Object.values(transportCounts),
            backgroundColor: ["#4ade80", "#fbbf24", "#f87171", "#60a5fa"]
        }]
    },
    options: { responsive: true }
});

const tbody = document.getElementById("bookingsBody");
populated.forEach(b => {
    const row = document.createElement("tr");
    const ratingColour = b.carbonRating === "green" ? "#4ade80" 
        : b.carbonRating === "amber" ? "#fbbf24" : "#f87171";
    row.innerHTML = `
        <td>${b.traveller}</td>
        <td>${b.holiday.destination}</td>
        <td>£${b.holiday.cost}</td>
        <td>${b.holiday.carbonScore}kg</td>
        <td style="color:${ratingColour}">${b.carbonRating}</td>
    `;
    tbody.appendChild(row);
});