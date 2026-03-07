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
    image: "images/lisbon-portugal.jpg",
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
    tags: ["City", "Culture", "Food", "History", "Walking", "Scenic", "Hot"],
    description:
      "Vibrant city built on seven hills overlooking the Tagus River.",
  },

  {
    id: 2,
    destination: "Barcelona, Spain",
    image: "images/barcelona-spain.png",
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
    tags: ["City", "Beach", "Culture", "Food", "Nightlife", "Walking", "Hot"],
    description:
      "Vibrant Mediterranean city known for Gaudí architecture and beaches.",
  },

  {
    id: 3,
    destination: "Scottish Highlands, UK",
    image: "images/scottish-highlands.jpg",
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
    tags: [
      "Nature",
      "Mountains",
      "Hiking",
      "Adventure",
      "Scenic",
      "Wildlife",
      "Cold",
    ],
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
    tags: [
      "City",
      "Culture",
      "Cycling",
      "Food",
      "Walking",
      "Nightlife",
      "Cold",
    ],
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
      { name: "Positano Beach", cost: 0, carbon: 0, time: "Afternoon" },
    ],
    tags: ["Beach", "Scenic", "Food", "Luxury", "Relaxation", "Hiking", "Hot"],
    description:
      "Stunning cliffside villages, crystal water and incredible food.",
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
      {
        name: "Kayaking on Windermere",
        cost: 25,
        carbon: 2,
        time: "Afternoon",
      },
      { name: "Country Pub Dinner", cost: 30, carbon: 2, time: "Evening" },
      { name: "Cycle Trail", cost: 15, carbon: 0, time: "Morning" },
    ],
    tags: [
      "Nature",
      "Mountains",
      "Hiking",
      "Cycling",
      "Relaxation",
      "Scenic",
      "Cold",
      "Budget",
    ],
    description:
      "Britain's most beautiful national park right on your doorstep.",
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
      { name: "Whale Watching", cost: 70, carbon: 20, time: "Morning" },
    ],
    tags: ["Nature", "Adventure", "Scenic", "Wildlife", "Unique", "Cold"],
    description: "Volcanoes, geysers, northern lights and pure wilderness.",
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
      { name: "Boat Cruise on Vltava", cost: 20, carbon: 5, time: "Afternoon" },
    ],
    tags: [
      "City",
      "Culture",
      "History",
      "Walking",
      "Nightlife",
      "Budget",
      "Cold",
    ],
    description:
      "A fairy tale city with incredible architecture and cheap prices.",
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
      { name: "Coastal Cliff Walk", cost: 0, carbon: 0, time: "Morning" },
    ],
    tags: [
      "Beach",
      "Nature",
      "Scenic",
      "Food",
      "Relaxation",
      "Adventure",
      "Hot",
    ],
    description:
      "Golden cliffs, hidden sea caves and the best seafood in Europe.",
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
      { name: "Tivoli Gardens", cost: 15, carbon: 1, time: "Evening" },
    ],
    tags: ["City", "Culture", "Cycling", "Food", "Walking", "Cold"],
    description:
      "The world's happiest city with incredible food and design culture.",
  },

  {
    id: 11,
    destination: "Cape Town, South Africa",
    image: "images/CapeTown.webp",
    duration: 10,
    cost: 800,
    carbonScore: 650,
    carbonRating: "red",
    transport: "flight",
    activities: [
      { name: "Hike Lion's Head", cost: 0, carbon: 0, time: "Afternoon" },
      {
        name: "Table Mountain Cable Car",
        cost: 20,
        carbon: 5,
        time: "Morning",
      },
      { name: "Robben Island Tour", cost: 50, carbon: 10, time: "Day Trip" },
      { name: "Cape of Good Hope", cost: 0, carbon: 0, time: "Afternoon" },
    ],
    tags: [
      "City",
      "Nature",
      "Beach",
      "Hiking",
      "Adventure",
      "Scenic",
      "Wildlife",
      "Hot",
    ],
    description:
      "Cape Town is a vibrant city with stunning natural beauty, rich history, and diverse culture.",
  },

  {
    id: 12,
    destination: "Rio De Janeiro, Brazil",
    image: "images/Rio.webp",
    duration: 7,
    cost: 1200,
    carbonScore: 950,
    carbonRating: "red",
    transport: "flight",
    activities: [
      {
        name: "Christ the Redeemer Visit",
        cost: 15,
        carbon: 5,
        time: "Morning",
      },
      { name: "Copacabana Beach", cost: 0, carbon: 0, time: "Evening" },
      { name: "Sugar Loaf Mountain", cost: 20, carbon: 10, time: "Morning" },
      { name: "Selarón Steps", cost: 0, carbon: 0, time: "Afternoon" },
    ],
    tags: [
      "City",
      "Beach",
      "Nature",
      "Adventure",
      "Culture",
      "Nightlife",
      "Scenic",
      "Hot",
    ],
    description:
      "Rio de Janeiro is a vibrant city known for its stunning beaches and lively culture.",
  },

  {
    id: 13,
    destination: "Berlin, Germany",
    image: "images/Berlin.webp",
    duration: 5,
    cost: 800,
    carbonScore: 200,
    carbonRating: "green",
    transport: "train",
    activities: [
      { name: "Berlin Wall Tour", cost: 10, carbon: 1, time: "Morning" },
      { name: "Museum Island", cost: 20, carbon: 1, time: "Afternoon" },
      { name: "Brandenburg Gate", cost: 0, carbon: 0, time: "Morning" },
      { name: "Street Art Tour", cost: 15, carbon: 0, time: "Afternoon" },
    ],
    tags: [
      "City",
      "Culture",
      "History",
      "Food",
      "Nightlife",
      "Walking",
      "Cold",
    ],
    description: "A beautiful city with a rich history and vibrant culture.",
  },

  {
    id: 14,
    destination: "Tokyo, Japan",
    image: "images/tokyo.webp",
    duration: 8,
    cost: 2200,
    carbonScore: 1050,
    carbonRating: "red",
    transport: "flight",
    activities: [
      { name: "Senso-ji Temple Visit", cost: 0, carbon: 0, time: "Morning" },
      { name: "Shibuya Crossing Tour", cost: 20, carbon: 1, time: "Afternoon" },
      { name: "Sushi Making Class", cost: 60, carbon: 2, time: "Evening" },
      { name: "Mount Fuji Day Trip", cost: 50, carbon: 15, time: "Day Trip" },
    ],
    tags: ["City", "Culture", "Food", "Nightlife", "Unique", "Luxury"],
    description:
      "A dazzling blend of ancient traditions and cutting-edge technology.",
  },

  {
    id: 15,
    destination: "Bangkok, Thailand",
    image: "images/bangkok.webp",
    duration: 7,
    cost: 1100,
    carbonScore: 850,
    carbonRating: "red",
    transport: "flight",
    activities: [
      { name: "Grand Palace Tour", cost: 15, carbon: 1, time: "Morning" },
      { name: "Floating Markets", cost: 40, carbon: 5, time: "Morning" },
      { name: "Thai Massage & Spa", cost: 25, carbon: 0, time: "Afternoon" },
      {
        name: "Street Food Walking Tour",
        cost: 30,
        carbon: 1,
        time: "Evening",
      },
    ],
    tags: ["City", "Culture", "Food", "Nightlife", "Budget", "Hot"],
    description:
      "The vibrant capital of Thailand with ornate temples and bustling markets.",
  },

  {
    id: 16,
    destination: "Sydney, Australia",
    image: "images/sydney.webp",
    duration: 10,
    cost: 2000,
    carbonScore: 1200,
    carbonRating: "red",
    transport: "flight",
    activities: [
      { name: "Sydney Opera House Tour", cost: 45, carbon: 1, time: "Morning" },
      { name: "Bondi Beach Surfing", cost: 40, carbon: 0, time: "Afternoon" },
      { name: "Blue Mountains Hiking", cost: 35, carbon: 10, time: "Day Trip" },
      { name: "Harbor Bridge Climb", cost: 70, carbon: 2, time: "Evening" },
    ],
    tags: ["City", "Beach", "Nature", "Adventure", "Scenic", "Luxury", "Hot"],
    description:
      "Australia's stunning harbor city surrounded by beautiful beaches.",
  },

  {
    id: 17,
    destination: "Marrakech, Morocco",
    image: "images/marrakech.webp",
    duration: 6,
    cost: 750,
    carbonScore: 280,
    carbonRating: "amber",
    transport: "flight",
    activities: [
      { name: "Medina Souk Walk", cost: 25, carbon: 0, time: "Morning" },
      { name: "Atlas Mountains Trek", cost: 50, carbon: 5, time: "Day Trip" },
      { name: "Moroccan Cooking Class", cost: 35, carbon: 1, time: "Evening" },
      { name: "Jemaa el-Fnaa Square", cost: 0, carbon: 0, time: "Afternoon" },
    ],
    tags: ["City", "Culture", "Food", "History", "Adventure", "Hot", "Unique"],
    description: "A magical city of vibrant markets and desert adventures.",
  },

  {
    id: 18,
    destination: "Istanbul, Turkey",
    image: "images/istanbul.webp",
    duration: 6,
    cost: 900,
    carbonScore: 320,
    carbonRating: "amber",
    transport: "flight",
    activities: [
      { name: "Blue Mosque Tour", cost: 0, carbon: 0, time: "Morning" },
      { name: "Grand Bazaar Shopping", cost: 40, carbon: 1, time: "Afternoon" },
      { name: "Bosphorus Sunset Cruise", cost: 35, carbon: 8, time: "Evening" },
      {
        name: "Turkish Bath Experience",
        cost: 45,
        carbon: 1,
        time: "Afternoon",
      },
    ],
    tags: ["City", "Culture", "History", "Food", "Scenic", "Unique"],
    description:
      "A transcontinental city where ancient history meets modern life.",
  },

  {
    id: 19,
    destination: "Mexico City, Mexico",
    image: "images/mexico-city.webp",
    duration: 7,
    cost: 1300,
    carbonScore: 720,
    carbonRating: "red",
    transport: "flight",
    activities: [
      { name: "Frida Kahlo Museum", cost: 30, carbon: 1, time: "Morning" },
      {
        name: "Teotihuacan Pyramid Visit",
        cost: 50,
        carbon: 10,
        time: "Day Trip",
      },
      { name: "Street Art Tour", cost: 40, carbon: 1, time: "Afternoon" },
      {
        name: "Traditional Cooking Class",
        cost: 45,
        carbon: 1,
        time: "Evening",
      },
    ],
    tags: ["City", "Culture", "Food", "History", "Adventure", "Nightlife"],
    description: "A vibrant metropolis rich with heritage and incredible food.",
  },

  {
    id: 20,
    destination: "Auckland, New Zealand",
    image: "images/auckland.webp",
    duration: 9,
    cost: 1900,
    carbonScore: 1100,
    carbonRating: "red",
    transport: "flight",
    activities: [
      { name: "Sky Tower Visit", cost: 30, carbon: 1, time: "Morning" },
      { name: "Waitomo Caves Tour", cost: 55, carbon: 8, time: "Day Trip" },
      { name: "Adrenaline Sports", cost: 80, carbon: 2, time: "Afternoon" },
      { name: "Coastal Hiking", cost: 0, carbon: 0, time: "Morning" },
    ],
    tags: ["City", "Nature", "Adventure", "Hiking", "Scenic", "Luxury"],
    description:
      "Gateway city combining urban excitement with natural wonders.",
  },
  {
    id: 21,
    destination: "Paris, France",
    image: "images/paris.webp",
    duration: 5,
    cost: 1200,
    carbonScore: 220,
    carbonRating: "green",
    transport: "train",
    activities: [
      { name: "Eiffel Tower Visit", cost: 25, carbon: 1, time: "Morning" },
      { name: "Louvre Museum", cost: 20, carbon: 1, time: "Afternoon" },
      { name: "Seine River Cruise", cost: 18, carbon: 4, time: "Evening" },
      {
        name: "Montmartre Walking Tour",
        cost: 0,
        carbon: 0,
        time: "Afternoon",
      },
    ],
    tags: ["City", "Culture", "History", "Food", "Romantic", "Walking"],
    description:
      "The iconic French capital known for art, fashion, cafés and timeless landmarks.",
  },

  {
    id: 22,
    destination: "Rome, Italy",
    image: "images/rome.webp",
    duration: 6,
    cost: 1050,
    carbonScore: 360,
    carbonRating: "amber",
    transport: "flight",
    activities: [
      { name: "Colosseum Tour", cost: 18, carbon: 1, time: "Morning" },
      { name: "Vatican Museums", cost: 22, carbon: 1, time: "Morning" },
      { name: "Trevi Fountain Visit", cost: 0, carbon: 0, time: "Afternoon" },
      { name: "Italian Food Tour", cost: 40, carbon: 1, time: "Evening" },
    ],
    tags: ["City", "Culture", "History", "Food", "Walking", "Scenic"],
    description:
      "An ancient city filled with Roman ruins, Renaissance art and incredible cuisine.",
  },

  {
    id: 23,
    destination: "Vienna, Austria",
    image: "images/vienna.webp",
    duration: 4,
    cost: 750,
    carbonScore: 200,
    carbonRating: "green",
    transport: "train",
    activities: [
      { name: "Schönbrunn Palace Tour", cost: 22, carbon: 1, time: "Morning" },
      {
        name: "Classical Concert Evening",
        cost: 45,
        carbon: 1,
        time: "Evening",
      },
      { name: "Belvedere Museum", cost: 18, carbon: 1, time: "Afternoon" },
      { name: "Historic Café Visit", cost: 12, carbon: 0, time: "Afternoon" },
    ],
    tags: ["City", "Culture", "History", "Music", "Food", "Walking"],
    description:
      "Elegant imperial city famous for classical music, coffee houses and grand architecture.",
  },

  {
    id: 24,
    destination: "Dubrovnik, Croatia",
    image: "images/dubrovnik.webp",
    duration: 5,
    cost: 900,
    carbonScore: 340,
    carbonRating: "amber",
    transport: "flight",
    activities: [
      { name: "Old Town Walls Walk", cost: 35, carbon: 0, time: "Morning" },
      {
        name: "Lokrum Island Kayaking",
        cost: 40,
        carbon: 1,
        time: "Afternoon",
      },
      { name: "Cable Car to Mount Srd", cost: 27, carbon: 3, time: "Evening" },
      { name: "Seafood Dinner", cost: 35, carbon: 1, time: "Evening" },
    ],
    tags: ["City", "Beach", "History", "Scenic", "Culture", "Hot"],
    description:
      "A stunning Adriatic coastal city with medieval walls and crystal-clear waters.",
  },

  {
    id: 25,
    destination: "Budapest, Hungary",
    image: "images/budapest.webp",
    duration: 4,
    cost: 600,
    carbonScore: 210,
    carbonRating: "amber",
    transport: "flight",
    activities: [
      {
        name: "Parliament Building Tour",
        cost: 20,
        carbon: 1,
        time: "Morning",
      },
      { name: "Thermal Baths Visit", cost: 25, carbon: 1, time: "Afternoon" },
      { name: "Danube River Cruise", cost: 22, carbon: 4, time: "Evening" },
      { name: "Castle Hill Walk", cost: 0, carbon: 0, time: "Morning" },
    ],
    tags: ["City", "Culture", "History", "Budget", "Nightlife"],
    description:
      "A beautiful Danube city famous for historic architecture and thermal baths.",
  },

  {
    id: 26,
    destination: "Santorini, Greece",
    image: "images/santorini.webp",
    duration: 6,
    cost: 1300,
    carbonScore: 500,
    carbonRating: "red",
    transport: "flight",
    activities: [
      { name: "Oia Sunset View", cost: 0, carbon: 0, time: "Evening" },
      { name: "Volcano Boat Tour", cost: 40, carbon: 12, time: "Day Trip" },
      {
        name: "Santorini Wine Tasting",
        cost: 35,
        carbon: 1,
        time: "Afternoon",
      },
      { name: "Red Beach Visit", cost: 0, carbon: 0, time: "Afternoon" },
    ],
    tags: [
      "Island",
      "Beach",
      "Scenic",
      "Luxury",
      "Romantic",
      "Hot",
      "Relaxation",
    ],
    description:
      "A famous Greek island known for whitewashed villages, sunsets and volcanic landscapes.",
  },

  {
    id: 27,
    destination: "Seville, Spain",
    image: "images/seville.webp",
    duration: 4,
    cost: 650,
    carbonScore: 300,
    carbonRating: "amber",
    transport: "flight",
    activities: [
      { name: "Alcázar Palace Tour", cost: 14, carbon: 1, time: "Morning" },
      {
        name: "Seville Cathedral Visit",
        cost: 12,
        carbon: 1,
        time: "Afternoon",
      },
      { name: "Flamenco Show", cost: 35, carbon: 1, time: "Evening" },
      { name: "Tapas Bar Crawl", cost: 30, carbon: 1, time: "Evening" },
    ],
    tags: ["City", "Culture", "Food", "History", "Music", "Hot"],
    description:
      "Andalusia's vibrant capital famous for flamenco, Moorish architecture and tapas.",
  },

  {
    id: 28,
    destination: "Zurich, Switzerland",
    image: "images/zurich.webp",
    duration: 4,
    cost: 1400,
    carbonScore: 190,
    carbonRating: "green",
    transport: "train",
    activities: [
      { name: "Old Town Walking Tour", cost: 0, carbon: 0, time: "Morning" },
      {
        name: "Lake Zurich Boat Cruise",
        cost: 28,
        carbon: 5,
        time: "Afternoon",
      },
      { name: "Swiss Chocolate Tour", cost: 35, carbon: 1, time: "Afternoon" },
      { name: "Uetliberg Mountain Hike", cost: 0, carbon: 0, time: "Morning" },
    ],
    tags: ["City", "Nature", "Luxury", "Scenic", "Hiking", "Cold"],
    description:
      "A clean, picturesque Swiss city combining financial power with alpine beauty.",
  },

  {
    id: 29,
    destination: "Oslo, Norway",
    image: "images/oslo.webp",
    duration: 5,
    cost: 1200,
    carbonScore: 210,
    carbonRating: "green",
    transport: "train",
    activities: [
      { name: "Viking Ship Museum", cost: 18, carbon: 1, time: "Morning" },
      { name: "Oslofjord Ferry Ride", cost: 25, carbon: 5, time: "Afternoon" },
      { name: "Holmenkollen Ski Jump", cost: 15, carbon: 1, time: "Afternoon" },
      {
        name: "Harbour Sauna Experience",
        cost: 30,
        carbon: 1,
        time: "Evening",
      },
    ],
    tags: ["City", "Nature", "Culture", "Scenic", "Cold"],
    description:
      "Norway's capital surrounded by forests and fjords with strong sustainability culture.",
  },

  {
    id: 30,
    destination: "Hanoi, Vietnam",
    image: "images/hanoi.webp",
    duration: 7,
    cost: 950,
    carbonScore: 820,
    carbonRating: "red",
    transport: "flight",
    activities: [
      {
        name: "Old Quarter Street Food Tour",
        cost: 25,
        carbon: 1,
        time: "Evening",
      },
      { name: "Hoan Kiem Lake Walk", cost: 0, carbon: 0, time: "Morning" },
      { name: "Halong Bay Day Cruise", cost: 60, carbon: 15, time: "Day Trip" },
      { name: "Temple of Literature", cost: 5, carbon: 0, time: "Afternoon" },
    ],
    tags: ["City", "Culture", "History", "Food", "Adventure", "Hot"],
    description:
      "Vietnam's historic capital known for chaotic streets and amazing food.",
  },
];

function findMatch(likedHolidaysIds) {
  let bestMatch = null;
  let highestOverlap = 0;

  fakeProfiles.forEach((profile) => {
    const overlap = profile.likedHolidays.filter((id) =>
      likedHolidaysIds.includes(id),
    ).length;

    if (overlap > highestOverlap) {
      highestOverlap = overlap;
      bestMatch = profile;
    }
  });

  return { match: bestMatch };
}
