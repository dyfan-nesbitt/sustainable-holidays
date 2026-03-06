// Destination name
// Image URL
// Activities list
// Estimated cost
// Carbon score
// Transport type
// Duration

const holidays = [
  {
    id: 1,
    destination: "Lisbon, Portugal",
    image:
      "images/lisbon-portugal.jpg",
    duration: 7,
    cost: 850,
    carbonScore: 320,
    carbonRating: "amber",
    transport: "flight",
    activities: [
      { name: "Tram City Tour", cost: 15, carbon: 2, time: "Morning" },
      { name: "Belem Tower Visit", cost: 10, carbon: 1, time: "Afternoon" },
      { name: "Local Food Market", cost: 25, carbon: 0, time: "Afternoon" },
      { name: "Sunset Viewpoint Hike", cost: 0, carbon: 0, time: "Evening" },
    ],
    tags: ["city", "walking", "food", "hot", "europe"],
    description:
      "Vibrant city built on seven hills overlooking the Tagus River.",
  },
  {
    id: 2,
    destination: "Bacelona, Spain",
    image:
      "images/barcelona-spain.png",
    duration: 6,
    cost: 1150,
    carbonScore: 380,
    carbonRating: "amber",
    transport: "flight",
    activities: [
      { name: "Sagrada Familia Tour", cost: 26, carbon: 1, time: "Morning" },
      { name: "Beach Day", cost: 0, carbon: 0, time: "Afternoon" },
      { name: "Tapas Cooking Class", cost: 45, carbon: 2, time: "Evening" },
      { name: "Park Guell Visit", cost: 10, carbon: 1, time: "Morning" },
    ],
    tags: ["city", "walking", "food", "hot", "europe"],
    description:
      "Vibrant city built on seven hills overlooking the Tagus River.",
  },
  {
    id: 3,
    destination: "Scottish Highlands, UK",
    image:
      "images/scottish-highlands.jpg",
    duration: 5,
    cost: 400,
    carbonScore: 85,
    carbonRating: "green",
    transport: "train",
    activities: [
      { name: "Ben Nevis Hike", cost: 0, carbon: 0, time: "Morning" },
      { name: "Loch Ness Boat Tour", cost: 20, carbon: 5, time: "Afternoon" },
      {
        name: "Whisky Distillery Tour",
        cost: 15,
        carbon: 1,
        time: "Afternoon",
      },
      { name: "Wild Camping", cost: 0, carbon: 0, time: "Evening" },
    ],
    tags: ["nature", "hiking", "adventure", "budget"],
    description: "Raw, dramatic landscapes with almost zero carbon footprint.",
  },
  {
    id: 4,
    destination: "Amsterdam, Netherlands",
    image: "images/amsterdam.jpg",
    duration: 4,
    cost: 600,
    carbonScore: 180,
    carbonRating: "green",
    transport: "train",
    activities: [
      { name: "Canal Bike Tour", cost: 18, carbon: 0, time: "Morning" },
      { name: "Rijksmuseum", cost: 22, carbon: 1, time: "Afternoon" },
      { name: "Street Food Tour", cost: 30, carbon: 1, time: "Evening" },
      { name: "Vondelpark Picnic", cost: 10, carbon: 0, time: "Afternoon" },
    ],
    tags: ["city", "culture", "cycling", "food"],
    description: "Europe's most bike-friendly city with world class culture.",
  },
  {
    id: 5,
    destination: "Amalfi Coast, Italy",
    image: "images/amalfi-coast.jpg",
    duration: 8,
    cost: 1400,
    carbonScore: 520,
    carbonRating: "red",
    transport: "flight",
    activities: [
      { name: "Coastal Hiking Trail", cost: 0, carbon: 0, time: "Morning" },
      { name: "Boat Trip to Capri", cost: 50, carbon: 15, time: "Afternoon" },
      { name: "Pasta Making Class", cost: 40, carbon: 1, time: "Evening" },
      { name: "Positano Beach", cost: 0, carbon: 0, time: "Afternoon" }
    ],
    tags: ["beach", "luxury", "food", "scenic", "relaxation"],
    description: "Stunning cliffside villages, crystal water and incredible food."
  },
  {
    id: 6,
    destination: "Lake District, UK",
    image: "images/lake-district.jpg",
    duration: 4,
    cost: 350,
    carbonScore: 60,
    carbonRating: "green",
    transport: "car",
    activities: [
      { name: "Scafell Pike Hike", cost: 0, carbon: 0, time: "Morning" },
      { name: "Kayaking on Windermere", cost: 25, carbon: 2, time: "Afternoon" },
      { name: "Country Pub Dinner", cost: 30, carbon: 2, time: "Evening" },
      { name: "Cycle Trail", cost: 15, carbon: 0, time: "Morning" }
    ],
    tags: ["nature", "hiking", "budget", "relaxation", "adventure"],
    description: "Britain's most beautiful national park right on your doorstep."
  },
  {
    id: 7,
    destination: "Reykjavik, Iceland",
    image: "images/reykjavik.jpg",
    duration: 6,
    cost: 1800,
    carbonScore: 620,
    carbonRating: "red",
    transport: "flight",
    activities: [
      { name: "Northern Lights Tour", cost: 80, carbon: 10, time: "Evening" },
      { name: "Blue Lagoon", cost: 60, carbon: 5, time: "Afternoon" },
      { name: "Geysir Geothermal Area", cost: 0, carbon: 0, time: "Morning" },
      { name: "Whale Watching", cost: 70, carbon: 20, time: "Morning" }
    ],
    tags: ["adventure", "nature", "luxury", "unique", "scenic"],
    description: "Volcanoes, geysers, northern lights and pure wilderness."
  },
  {
    id: 8,
    destination: "Prague, Czech Republic",
    image: "images/prague.jpg",
    duration: 5,
    cost: 550,
    carbonScore: 210,
    carbonRating: "amber",
    transport: "flight",
    activities: [
      { name: "Old Town Walking Tour", cost: 15, carbon: 0, time: "Morning" },
      { name: "Prague Castle Visit", cost: 12, carbon: 1, time: "Afternoon" },
      { name: "Beer Tasting Tour", cost: 35, carbon: 1, time: "Evening" },
      { name: "Boat Cruise on Vltava", cost: 20, carbon: 5, time: "Afternoon" }
    ],
    tags: ["city", "culture", "budget", "nightlife", "history"],
    description: "A fairy tale city with incredible architecture and cheap prices."
  },
  {
    id: 9,
    destination: "Algarve, Portugal",
    image: "images/algarve.jpg",
    duration: 7,
    cost: 900,
    carbonScore: 350,
    carbonRating: "amber",
    transport: "flight",
    activities: [
      { name: "Sea Cave Kayaking", cost: 35, carbon: 0, time: "Morning" },
      { name: "Praia da Marinha Beach", cost: 0, carbon: 0, time: "Afternoon" },
      { name: "Seafood Cooking Class", cost: 50, carbon: 2, time: "Evening" },
      { name: "Coastal Cliff Walk", cost: 0, carbon: 0, time: "Morning" }
    ],
    tags: ["beach", "nature", "food", "relaxation", "adventure"],
    description: "Golden cliffs, hidden sea caves and the best seafood in Europe."
  },
  {
    id: 10,
    destination: "Copenhagen, Denmark",
    image: "images/copenhagen.jpg",
    duration: 5,
    cost: 1100,
    carbonScore: 190,
    carbonRating: "green",
    transport: "train",
    activities: [
      { name: "Nyhavn Harbour Walk", cost: 0, carbon: 0, time: "Morning" },
      { name: "Bike City Tour", cost: 20, carbon: 0, time: "Afternoon" },
      { name: "Smørrebrød Food Tour", cost: 40, carbon: 1, time: "Afternoon" },
      { name: "Tivoli Gardens", cost: 15, carbon: 1, time: "Evening" }
    ],
    tags: ["city", "cycling", "food", "culture", "design"],
    description: "The world's happiest city with incredible food and design culture."
  }
];
