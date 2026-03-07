// Destination name
// Image URL
// Activities list
// Estimated cost
// Carbon score
// Transport type
// Duration

const holidays = [
  // ─────────────────────────────────────────────
  // EUROPE (10)
  // ─────────────────────────────────────────────

  {
    id: 1,
    destination: "Lisbon, Portugal",
    image: "images/lisbon-portugal.jpg",
    duration: 7,
    cost: 850,
    carbonScore: 473,
    carbonRating: "Green",
    transport: "flight",
    activities: [
      { name: "Tram City Tour", cost: 15, carbon: 2, time: "Morning" },
      { name: "Belem Tower Visit", cost: 10, carbon: 1, time: "Afternoon" },
      { name: "Local Food Market", cost: 25, carbon: 0, time: "Afternoon" },
      { name: "Sunset Viewpoint Hike", cost: 0, carbon: 0, time: "Evening" },
    ],
    tags: [
      "Europe",
      "City",
      "Culture",
      "Food",
      "History",
      "Walking",
      "Scenic",
      "Hot",
    ],
    description:
      "Vibrant city built on seven hills overlooking the Tagus River.",
  },

  {
    id: 2,
    destination: "Barcelona, Spain",
    image: "images/barcelona-spain.png",
    duration: 6,
    cost: 1150,
    carbonScore: 356,
    carbonRating: "Green",
    transport: "flight",
    activities: [
      { name: "Sagrada Familia Tour", cost: 26, carbon: 1, time: "Morning" },
      { name: "Beach Day", cost: 0, carbon: 0, time: "Afternoon" },
      { name: "Tapas Cooking Class", cost: 45, carbon: 2, time: "Evening" },
      { name: "Park Guell Visit", cost: 10, carbon: 1, time: "Morning" },
    ],
    tags: [
      "Europe",
      "City",
      "Beach",
      "Culture",
      "Food",
      "Nightlife",
      "Walking",
      "Hot",
    ],
    description:
      "Vibrant Mediterranean city known for Gaudí architecture and beaches.",
  },

  {
    id: 3,
    destination: "Amsterdam, Netherlands",
    image: "images/amsterdam.jpg",
    duration: 4,
    cost: 600,
    carbonScore: 112,
    carbonRating: "Green",
    transport: "train",
    activities: [
      { name: "Canal Bike Tour", cost: 18, carbon: 0, time: "Morning" },
      { name: "Rijksmuseum", cost: 22, carbon: 1, time: "Afternoon" },
      { name: "Street Food Tour", cost: 30, carbon: 1, time: "Evening" },
      { name: "Vondelpark Picnic", cost: 10, carbon: 0, time: "Afternoon" },
    ],
    tags: [
      "Europe",
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
    id: 4,
    destination: "Reykjavik, Iceland",
    image: "images/reykjavik.jpg",
    duration: 6,
    cost: 1800,
    carbonScore: 904,
    carbonRating: "Green",
    transport: "flight",
    activities: [
      { name: "Northern Lights Tour", cost: 80, carbon: 10, time: "Evening" },
      { name: "Blue Lagoon", cost: 60, carbon: 5, time: "Afternoon" },
      { name: "Geysir Geothermal Area", cost: 0, carbon: 0, time: "Morning" },
      { name: "Whale Watching", cost: 70, carbon: 20, time: "Morning" },
    ],
    tags: [
      "Europe",
      "Nature",
      "Adventure",
      "Scenic",
      "Wildlife",
      "Unique",
      "Cold",
    ],
    description: "Volcanoes, geysers, northern lights and pure wilderness.",
  },

  {
    id: 5,
    destination: "Prague, Czech Republic",
    image: "images/prague.jpg",
    duration: 5,
    cost: 550,
    carbonScore: 291,
    carbonRating: "Green",
    transport: "flight",
    activities: [
      { name: "Old Town Walking Tour", cost: 15, carbon: 0, time: "Morning" },
      { name: "Prague Castle Visit", cost: 12, carbon: 1, time: "Afternoon" },
      { name: "Beer Tasting Tour", cost: 35, carbon: 1, time: "Evening" },
      { name: "Boat Cruise on Vltava", cost: 20, carbon: 5, time: "Afternoon" },
    ],
    tags: [
      "Europe",
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
    id: 6,
    destination: "Copenhagen, Denmark",
    image: "images/copenhagen.jpg",
    duration: 5,
    cost: 1100,
    carbonScore: 301,
    carbonRating: "Green",
    transport: "train",
    activities: [
      { name: "Nyhavn Harbour Walk", cost: 0, carbon: 0, time: "Morning" },
      { name: "Bike City Tour", cost: 20, carbon: 0, time: "Afternoon" },
      { name: "Smørrebrød Food Tour", cost: 40, carbon: 1, time: "Afternoon" },
      { name: "Tivoli Gardens", cost: 15, carbon: 1, time: "Evening" },
    ],
    tags: ["Europe", "City", "Culture", "Cycling", "Food", "Walking", "Cold"],
    description:
      "The world's happiest city with incredible food and design culture.",
  },

  {
    id: 7,
    destination: "Paris, France",
    image: "images/paris.webp",
    duration: 5,
    cost: 1200,
    carbonScore: 170,
    carbonRating: "Green",
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
    tags: [
      "Europe",
      "City",
      "Culture",
      "History",
      "Food",
      "Romantic",
      "Walking",
    ],
    description:
      "The iconic French capital known for art, fashion, cafés and timeless landmarks.",
  },

  {
    id: 8,
    destination: "Rome, Italy",
    image: "images/rome.webp",
    duration: 6,
    cost: 1050,
    carbonScore: 436,
    carbonRating: "Green",
    transport: "flight",
    activities: [
      { name: "Colosseum Tour", cost: 18, carbon: 1, time: "Morning" },
      { name: "Vatican Museums", cost: 22, carbon: 1, time: "Morning" },
      { name: "Trevi Fountain Visit", cost: 0, carbon: 0, time: "Afternoon" },
      { name: "Italian Food Tour", cost: 40, carbon: 1, time: "Evening" },
    ],
    tags: ["Europe", "City", "Culture", "History", "Food", "Walking", "Scenic"],
    description:
      "An ancient city filled with Roman ruins, Renaissance art and incredible cuisine.",
  },

  {
    id: 9,
    destination: "Vienna, Austria",
    image: "images/vienna.webp",
    duration: 4,
    cost: 750,
    carbonScore: 391,
    carbonRating: "Green",
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
    tags: ["Europe", "City", "Culture", "History", "Music", "Food", "Walking"],
    description:
      "Elegant imperial city famous for classical music, coffee houses and grand architecture.",
  },

  {
    id: 10,
    destination: "Santorini, Greece",
    image: "images/santorini.webp",
    duration: 6,
    cost: 1300,
    carbonScore: 735,
    carbonRating: "Green",
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
      "Europe",
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

  // ─────────────────────────────────────────────
  // AFRICA (10)
  // ─────────────────────────────────────────────

  {
    id: 11,
    destination: "Cape Town, South Africa",
    image: "images/CapeTown.webp",
    duration: 10,
    cost: 800,
    carbonScore: 3742,
    carbonRating: "Red",
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
      "Africa",
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
    destination: "Marrakech, Morocco",
    image: "images/marrakech.webp",
    duration: 6,
    cost: 750,
    carbonScore: 622,
    carbonRating: "Green",
    transport: "flight",
    activities: [
      { name: "Medina Souk Walk", cost: 25, carbon: 0, time: "Morning" },
      { name: "Atlas Mountains Trek", cost: 50, carbon: 5, time: "Day Trip" },
      { name: "Moroccan Cooking Class", cost: 35, carbon: 1, time: "Evening" },
      { name: "Jemaa el-Fnaa Square", cost: 0, carbon: 0, time: "Afternoon" },
    ],
    tags: [
      "Africa",
      "City",
      "Culture",
      "Food",
      "History",
      "Adventure",
      "Hot",
      "Unique",
    ],
    description: "A magical city of vibrant markets and desert adventures.",
  },

  {
    id: 13,
    destination: "Nairobi, Kenya",
    image: "images/nairobi.webp",
    duration: 7,
    cost: 950,
    carbonScore: 2644,
    carbonRating: "Amber",
    transport: "flight",
    activities: [
      {
        name: "Nairobi National Park Safari",
        cost: 60,
        carbon: 10,
        time: "Morning",
      },
      { name: "Giraffe Centre Visit", cost: 15, carbon: 1, time: "Afternoon" },
      { name: "Maasai Market Tour", cost: 20, carbon: 0, time: "Afternoon" },
      { name: "Karen Blixen Museum", cost: 10, carbon: 0, time: "Morning" },
    ],
    tags: ["Africa", "Nature", "Wildlife", "Adventure", "Culture", "Scenic"],
    description:
      "East Africa's vibrant capital and gateway to world-class safaris and the Maasai Mara.",
  },

  {
    id: 14,
    destination: "Lagos, Nigeria",
    image: "images/lagos.webp",
    duration: 6,
    cost: 1100,
    carbonScore: 1936,
    carbonRating: "Amber",
    transport: "flight",
    activities: [
      {
        name: "Lekki Conservation Centre",
        cost: 20,
        carbon: 1,
        time: "Morning",
      },
      {
        name: "Lagos Island Walking Tour",
        cost: 15,
        carbon: 2,
        time: "Afternoon",
      },
      { name: "Nike Art Gallery", cost: 10, carbon: 0, time: "Morning" },
      { name: "Tarkwa Bay Beach", cost: 25, carbon: 5, time: "Afternoon" },
    ],
    tags: ["Africa", "City", "Culture", "Food", "Nightlife", "Beach", "Unique"],
    description:
      "West Africa's buzzing megacity, a powerhouse of music, art and coastal energy.",
  },

  {
    id: 15,
    destination: "Addis Ababa, Ethiopia",
    image: "images/addis-ababa.webp",
    duration: 6,
    cost: 800,
    carbonScore: 2288,
    carbonRating: "Amber",
    transport: "flight",
    activities: [
      {
        name: "National Museum of Ethiopia",
        cost: 10,
        carbon: 0,
        time: "Morning",
      },
      { name: "Mercato Market Tour", cost: 0, carbon: 0, time: "Afternoon" },
      {
        name: "Traditional Coffee Ceremony",
        cost: 15,
        carbon: 0,
        time: "Evening",
      },
      { name: "Entoto Hill Hike", cost: 0, carbon: 0, time: "Morning" },
    ],
    tags: ["Africa", "City", "Culture", "History", "Food", "Walking"],
    description:
      "Ethiopia's highland capital, home to ancient civilisations and the birthplace of coffee culture.",
  },

  {
    id: 16,
    destination: "Johannesburg, South Africa",
    image: "images/johannesburg.jpg",
    duration: 7,
    cost: 950,
    carbonScore: 3508,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Apartheid Museum", cost: 15, carbon: 1, time: "Morning" },
      { name: "Soweto Township Tour", cost: 30, carbon: 5, time: "Afternoon" },
      { name: "Gold Reef City", cost: 25, carbon: 3, time: "Afternoon" },
      { name: "Cradle of Humankind", cost: 40, carbon: 10, time: "Day Trip" },
    ],
    tags: ["Africa", "City", "Culture", "History", "Adventure"],
    description:
      "South Africa's economic powerhouse with a powerful history and a thriving arts scene.",
  },

  {
    id: 17,
    destination: "Dakar, Senegal",
    image: "images/dakar.webp",
    duration: 5,
    cost: 750,
    carbonScore: 1340,
    carbonRating: "Amber",
    transport: "flight",
    activities: [
      { name: "Gorée Island Tour", cost: 15, carbon: 5, time: "Morning" },
      {
        name: "African Renaissance Monument",
        cost: 10,
        carbon: 1,
        time: "Afternoon",
      },
      { name: "Sandaga Market Walk", cost: 0, carbon: 0, time: "Morning" },
      { name: "Lac Rose Day Trip", cost: 35, carbon: 8, time: "Day Trip" },
    ],
    tags: ["Africa", "City", "Culture", "History", "Beach", "Food", "Unique"],
    description:
      "West Africa's westernmost capital, where French colonial charm meets vibrant Senegalese traditions.",
  },

  {
    id: 18,
    destination: "Lusaka, Zambia",
    image: "images/lusaka.webp",
    duration: 8,
    cost: 1100,
    carbonScore: 3189,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      {
        name: "Victoria Falls Day Trip",
        cost: 50,
        carbon: 15,
        time: "Day Trip",
      },
      { name: "South Luangwa Safari", cost: 120, carbon: 20, time: "Day Trip" },
      { name: "Lusaka National Museum", cost: 5, carbon: 0, time: "Morning" },
      {
        name: "Kabwata Cultural Village",
        cost: 10,
        carbon: 0,
        time: "Afternoon",
      },
    ],
    tags: ["Africa", "Nature", "Wildlife", "Adventure", "Scenic"],
    description:
      "Gateway to Zambia's breathtaking national parks and the thundering Victoria Falls.",
  },

  {
    id: 19,
    destination: "Antananarivo, Madagascar",
    image: "images/madagascar.webp",
    duration: 9,
    cost: 1400,
    carbonScore: 3282,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Lemur Park Visit", cost: 30, carbon: 2, time: "Morning" },
      {
        name: "Tsingy de Bemaraha Trek",
        cost: 80,
        carbon: 5,
        time: "Day Trip",
      },
      { name: "Andasibe National Park", cost: 50, carbon: 8, time: "Day Trip" },
      { name: "Local Zebu Market", cost: 0, carbon: 0, time: "Afternoon" },
    ],
    tags: ["Africa", "Nature", "Wildlife", "Adventure", "Unique", "Scenic"],
    description:
      "The world's fourth largest island, home to extraordinary wildlife found nowhere else on Earth.",
  },

  {
    id: 20,
    destination: "Cairo, Egypt",
    image: "images/cairo.webp",
    duration: 6,
    cost: 900,
    carbonScore: 1800,
    carbonRating: "Amber",
    transport: "flight",
    activities: [
      { name: "Great Pyramids of Giza", cost: 20, carbon: 10, time: "Morning" },
      { name: "Egyptian Museum", cost: 15, carbon: 1, time: "Afternoon" },
      { name: "Nile River Cruise", cost: 40, carbon: 8, time: "Evening" },
      { name: "Khan el-Khalili Bazaar", cost: 0, carbon: 0, time: "Afternoon" },
    ],
    tags: ["Africa", "City", "Culture", "History", "Walking", "Scenic", "Hot"],
    description:
      "One of the world's most ancient cities, home to the iconic Pyramids and the eternal Nile.",
  },

  // ─────────────────────────────────────────────
  // ASIA (10)
  // ─────────────────────────────────────────────

  {
    id: 21,
    destination: "Tokyo, Japan",
    image: "images/tokyo.webp",
    duration: 8,
    cost: 2200,
    carbonScore: 3707,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Senso-ji Temple Visit", cost: 0, carbon: 0, time: "Morning" },
      { name: "Shibuya Crossing Tour", cost: 20, carbon: 1, time: "Afternoon" },
      { name: "Sushi Making Class", cost: 60, carbon: 2, time: "Evening" },
      { name: "Mount Fuji Day Trip", cost: 50, carbon: 15, time: "Day Trip" },
    ],
    tags: ["Asia", "City", "Culture", "Food", "Nightlife", "Unique", "Luxury"],
    description:
      "A dazzling blend of ancient traditions and cutting-edge technology.",
  },

  {
    id: 22,
    destination: "Bangkok, Thailand",
    image: "images/bangkok.webp",
    duration: 7,
    cost: 1100,
    carbonScore: 3702,
    carbonRating: "Red",
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
    tags: ["Asia", "City", "Culture", "Food", "Nightlife", "Budget", "Hot"],
    description:
      "The vibrant capital of Thailand with ornate temples and bustling markets.",
  },

  {
    id: 23,
    destination: "Istanbul, Turkey",
    image: "images/istanbul.webp",
    duration: 6,
    cost: 900,
    carbonScore: 764,
    carbonRating: "Green",
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
    tags: ["Asia", "City", "Culture", "History", "Food", "Scenic", "Unique"],
    description:
      "A transcontinental city where ancient history meets modern life.",
  },

  {
    id: 24,
    destination: "Hanoi, Vietnam",
    image: "images/hanoi.webp",
    duration: 7,
    cost: 950,
    carbonScore: 3572,
    carbonRating: "Red",
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
    tags: ["Asia", "City", "Culture", "History", "Food", "Adventure", "Hot"],
    description:
      "Vietnam's historic capital known for chaotic streets and amazing food.",
  },

  {
    id: 25,
    destination: "Dubai, UAE",
    image: "images/dubai.webp",
    duration: 6,
    cost: 1800,
    carbonScore: 2124,
    carbonRating: "Amber",
    transport: "flight",
    activities: [
      { name: "Burj Khalifa Visit", cost: 40, carbon: 2, time: "Morning" },
      {
        name: "Desert Safari & Dune Bashing",
        cost: 80,
        carbon: 15,
        time: "Evening",
      },
      {
        name: "Dubai Mall & Fountain Show",
        cost: 0,
        carbon: 1,
        time: "Afternoon",
      },
      { name: "Dhow Cruise Dinner", cost: 60, carbon: 8, time: "Evening" },
    ],
    tags: [
      "Asia",
      "City",
      "Luxury",
      "Culture",
      "Food",
      "Nightlife",
      "Unique",
      "Hot",
    ],
    description:
      "A futuristic desert city of record-breaking architecture and extraordinary luxury experiences.",
  },

  {
    id: 26,
    destination: "Singapore",
    image: "images/singapore.webp",
    duration: 7,
    cost: 2200,
    carbonScore: 3972,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Gardens by the Bay", cost: 28, carbon: 1, time: "Evening" },
      {
        name: "Marina Bay Sands Skypark",
        cost: 23,
        carbon: 1,
        time: "Afternoon",
      },
      { name: "Hawker Centre Food Tour", cost: 20, carbon: 1, time: "Morning" },
      { name: "Sentosa Island", cost: 30, carbon: 3, time: "Afternoon" },
    ],
    tags: ["Asia", "City", "Food", "Culture", "Luxury", "Unique", "Hot"],
    description:
      "A dazzling city-state blending futuristic design with extraordinary diverse culinary traditions.",
  },

  {
    id: 27,
    destination: "Delhi, India",
    image: "images/delhi.webp",
    duration: 8,
    cost: 1000,
    carbonScore: 2532,
    carbonRating: "Amber",
    transport: "flight",
    activities: [
      { name: "Taj Mahal Day Trip", cost: 50, carbon: 10, time: "Day Trip" },
      { name: "Red Fort Tour", cost: 10, carbon: 1, time: "Morning" },
      {
        name: "Chandni Chowk Street Food",
        cost: 20,
        carbon: 0,
        time: "Afternoon",
      },
      { name: "Qutub Minar Visit", cost: 15, carbon: 1, time: "Morning" },
    ],
    tags: ["Asia", "City", "Culture", "History", "Food", "Adventure"],
    description:
      "India's ancient and vibrant capital, gateway to the Taj Mahal and rich Mughal heritage.",
  },

  {
    id: 28,
    destination: "Seoul, South Korea",
    image: "images/seoul.webp",
    duration: 7,
    cost: 1600,
    carbonScore: 3471,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      {
        name: "Gyeongbokgung Palace Tour",
        cost: 3,
        carbon: 1,
        time: "Morning",
      },
      { name: "DMZ Day Trip", cost: 60, carbon: 15, time: "Day Trip" },
      {
        name: "Korean BBQ Cooking Class",
        cost: 50,
        carbon: 1,
        time: "Evening",
      },
      {
        name: "Bukchon Hanok Village Walk",
        cost: 0,
        carbon: 0,
        time: "Afternoon",
      },
    ],
    tags: ["Asia", "City", "Culture", "History", "Food", "Nightlife", "Unique"],
    description:
      "A dynamic K-culture capital where ancient palaces sit beside neon-lit nightlife districts.",
  },

  {
    id: 29,
    destination: "Bali, Indonesia",
    image: "images/bali.webp",
    duration: 10,
    cost: 1500,
    carbonScore: 4478,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Tegalalang Rice Terraces", cost: 0, carbon: 0, time: "Morning" },
      { name: "Sacred Monkey Forest", cost: 5, carbon: 0, time: "Afternoon" },
      { name: "Tanah Lot Temple Sunset", cost: 5, carbon: 1, time: "Evening" },
      { name: "Surfing Lesson in Kuta", cost: 35, carbon: 0, time: "Morning" },
    ],
    tags: [
      "Asia",
      "Island",
      "Beach",
      "Nature",
      "Culture",
      "Relaxation",
      "Scenic",
      "Hot",
    ],
    description:
      "The Island of the Gods, famous for terraced rice fields, ancient temples and world-class surf.",
  },

  {
    id: 30,
    destination: "Kuala Lumpur, Malaysia",
    image: "images/kuala-lumput.webp",
    duration: 6,
    cost: 1100,
    carbonScore: 4099,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Petronas Twin Towers", cost: 25, carbon: 1, time: "Morning" },
      { name: "Batu Caves Visit", cost: 0, carbon: 2, time: "Afternoon" },
      { name: "Jalan Alor Night Market", cost: 20, carbon: 0, time: "Evening" },
      { name: "KL Bird Park", cost: 25, carbon: 1, time: "Morning" },
    ],
    tags: ["Asia", "City", "Culture", "Food", "Nightlife", "Unique", "Hot"],
    description:
      "A bold and diverse Southeast Asian capital with iconic towers and extraordinary street food.",
  },

  // ─────────────────────────────────────────────
  // SOUTH AMERICA / AMERICAS (10)
  // ─────────────────────────────────────────────

  {
    id: 31,
    destination: "Rio De Janeiro, Brazil",
    image: "images/Rio.webp",
    duration: 7,
    cost: 1200,
    carbonScore: 3757,
    carbonRating: "Red",
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
      "South America",
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
    id: 32,
    destination: "Mexico City, Mexico",
    image: "images/mexico-city.webp",
    duration: 7,
    cost: 1300,
    carbonScore: 3442,
    carbonRating: "Red",
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
    tags: [
      "South America",
      "City",
      "Culture",
      "Food",
      "History",
      "Adventure",
      "Nightlife",
    ],
    description: "A vibrant metropolis rich with heritage and incredible food.",
  },

  {
    id: 33,
    destination: "Bogota, Colombia",
    image: "images/bogota.webp",
    duration: 7,
    cost: 1100,
    carbonScore: 3275,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Gold Museum Visit", cost: 4, carbon: 0, time: "Morning" },
      {
        name: "La Candelaria Walking Tour",
        cost: 0,
        carbon: 0,
        time: "Morning",
      },
      {
        name: "Monserrate Hill Cable Car",
        cost: 15,
        carbon: 2,
        time: "Afternoon",
      },
      {
        name: "Street Art Tour Chapinero",
        cost: 20,
        carbon: 0,
        time: "Afternoon",
      },
    ],
    tags: ["South America", "City", "Culture", "History", "Food", "Adventure"],
    description:
      "A high-altitude Andean capital buzzing with street art, world-class museums and coffee culture.",
  },

  {
    id: 34,
    destination: "Sao Paulo, Brazil",
    image: "images/sao-paulo.webp",
    duration: 7,
    cost: 1300,
    carbonScore: 3658,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "MASP Museum of Art", cost: 10, carbon: 1, time: "Morning" },
      { name: "Ibirapuera Park Walk", cost: 0, carbon: 0, time: "Afternoon" },
      {
        name: "Liberdade Japanese Quarter",
        cost: 15,
        carbon: 1,
        time: "Afternoon",
      },
      { name: "Street Food Night Tour", cost: 30, carbon: 1, time: "Evening" },
    ],
    tags: ["South America", "City", "Culture", "Food", "Nightlife", "Art"],
    description:
      "Brazil's vast cosmopolitan megacity — a powerhouse of culture, cuisine and nightlife.",
  },

  {
    id: 35,
    destination: "Lima, Peru",
    image: "images/lima.webp",
    duration: 8,
    cost: 1400,
    carbonScore: 3055,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      {
        name: "Machu Picchu Day Trip",
        cost: 120,
        carbon: 10,
        time: "Day Trip",
      },
      { name: "Miraflores Coastal Walk", cost: 0, carbon: 0, time: "Morning" },
      { name: "Peruvian Cooking Class", cost: 45, carbon: 1, time: "Evening" },
      { name: "Larco Museum", cost: 15, carbon: 1, time: "Afternoon" },
    ],
    tags: [
      "South America",
      "City",
      "Culture",
      "History",
      "Food",
      "Adventure",
      "Scenic",
    ],
    description:
      "Peru's coastal capital, gateway to Machu Picchu and home to some of the world's best cuisine.",
  },

  {
    id: 36,
    destination: "Buenos Aires, Argentina",
    image: "images/buenos-aires.webp",
    duration: 9,
    cost: 1500,
    carbonScore: 4284,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      {
        name: "Tango Lesson & Dinner Show",
        cost: 60,
        carbon: 1,
        time: "Evening",
      },
      {
        name: "La Boca Neighbourhood Tour",
        cost: 0,
        carbon: 0,
        time: "Afternoon",
      },
      { name: "Recoleta Cemetery Walk", cost: 0, carbon: 0, time: "Morning" },
      {
        name: "Asado Steak Dinner Experience",
        cost: 50,
        carbon: 2,
        time: "Evening",
      },
    ],
    tags: [
      "South America",
      "City",
      "Culture",
      "Food",
      "Nightlife",
      "Music",
      "Scenic",
    ],
    description:
      "The Paris of South America, famous for passionate tango, incredible steak and European grandeur.",
  },

  {
    id: 37,
    destination: "Santiago, Chile",
    image: "images/santiago.webp",
    duration: 8,
    cost: 1600,
    carbonScore: 4504,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      {
        name: "San Cristobal Hill Cable Car",
        cost: 10,
        carbon: 1,
        time: "Morning",
      },
      {
        name: "Chilean Wine Valley Tour",
        cost: 50,
        carbon: 5,
        time: "Day Trip",
      },
      {
        name: "Torres del Paine Day Trip",
        cost: 90,
        carbon: 15,
        time: "Day Trip",
      },
      { name: "La Vega Central Market", cost: 0, carbon: 0, time: "Morning" },
    ],
    tags: [
      "South America",
      "City",
      "Nature",
      "Mountains",
      "Food",
      "Scenic",
      "Adventure",
    ],
    description:
      "Chile's sophisticated capital nestled between the snow-capped Andes and the Pacific Ocean.",
  },

  {
    id: 38,
    destination: "New York, USA",
    image: "images/new-york.webp",
    duration: 7,
    cost: 2000,
    carbonScore: 2152,
    carbonRating: "Amber",
    transport: "flight",
    activities: [
      { name: "Central Park Walk", cost: 0, carbon: 0, time: "Morning" },
      { name: "Statue of Liberty Tour", cost: 25, carbon: 5, time: "Morning" },
      { name: "Broadway Show", cost: 120, carbon: 1, time: "Evening" },
      { name: "Brooklyn Food Tour", cost: 40, carbon: 1, time: "Afternoon" },
    ],
    tags: [
      "North America",
      "City",
      "Culture",
      "Food",
      "Nightlife",
      "Luxury",
      "Walking",
      "Iconic",
    ],
    description:
      "The city that never sleeps — an iconic global metropolis of culture, ambition and energy.",
  },

  {
    id: 39,
    destination: "Los Angeles, USA",
    image: "images/los-angeles.webp",
    duration: 8,
    cost: 2200,
    carbonScore: 3386,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Hollywood Walk of Fame", cost: 0, carbon: 0, time: "Morning" },
      { name: "Santa Monica Beach", cost: 0, carbon: 0, time: "Afternoon" },
      { name: "Universal Studios", cost: 110, carbon: 5, time: "Day Trip" },
      {
        name: "Griffith Observatory Hike",
        cost: 0,
        carbon: 0,
        time: "Morning",
      },
    ],
    tags: [
      "North America",
      "City",
      "Beach",
      "Culture",
      "Food",
      "Nightlife",
      "Scenic",
      "Hot",
    ],
    description:
      "The entertainment capital of the world, blending Hollywood glamour with sun-soaked beaches.",
  },

  {
    id: 40,
    destination: "Montreal, Canada",
    image: "images/montreal.webp",
    duration: 6,
    cost: 1400,
    carbonScore: 2018,
    carbonRating: "Amber",
    transport: "flight",
    activities: [
      {
        name: "Old Montreal Walking Tour",
        cost: 0,
        carbon: 0,
        time: "Morning",
      },
      { name: "Mont Royal Park Hike", cost: 0, carbon: 0, time: "Morning" },
      { name: "Quebec Food Tour", cost: 45, carbon: 1, time: "Afternoon" },
      { name: "Jazz Club Evening", cost: 20, carbon: 0, time: "Evening" },
    ],
    tags: [
      "North America",
      "City",
      "Culture",
      "Food",
      "Music",
      "Walking",
      "Cold",
    ],
    description:
      "A bilingual North American gem blending French joie de vivre with vibrant urban culture.",
  },

  // ─────────────────────────────────────────────
  // AUSTRALIA / OCEANIA (10)
  // ─────────────────────────────────────────────

  {
    id: 41,
    destination: "Sydney, Australia",
    image: "images/sydney.webp",
    duration: 10,
    cost: 2000,
    carbonScore: 6580,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Sydney Opera House Tour", cost: 45, carbon: 1, time: "Morning" },
      { name: "Bondi Beach Surfing", cost: 40, carbon: 0, time: "Afternoon" },
      { name: "Blue Mountains Hiking", cost: 35, carbon: 10, time: "Day Trip" },
      { name: "Harbor Bridge Climb", cost: 70, carbon: 2, time: "Evening" },
    ],
    tags: [
      "Australia",
      "City",
      "Beach",
      "Nature",
      "Adventure",
      "Scenic",
      "Luxury",
      "Hot",
    ],
    description:
      "Australia's stunning harbor city surrounded by beautiful beaches.",
  },

  {
    id: 42,
    destination: "Auckland, New Zealand",
    image: "images/auckland.webp",
    duration: 9,
    cost: 1900,
    carbonScore: 7458,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Sky Tower Visit", cost: 30, carbon: 1, time: "Morning" },
      { name: "Waitomo Caves Tour", cost: 55, carbon: 8, time: "Day Trip" },
      { name: "Adrenaline Sports", cost: 80, carbon: 2, time: "Afternoon" },
      { name: "Coastal Hiking", cost: 0, carbon: 0, time: "Morning" },
    ],
    tags: [
      "Oceania",
      "City",
      "Nature",
      "Adventure",
      "Hiking",
      "Scenic",
      "Luxury",
    ],
    description:
      "Gateway city combining urban excitement with natural wonders.",
  },

  {
    id: 43,
    destination: "Melbourne, Australia",
    image: "images/melbourne.webp",
    duration: 9,
    cost: 2100,
    carbonScore: 6616,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      {
        name: "Federation Square & Street Art",
        cost: 0,
        carbon: 0,
        time: "Morning",
      },
      {
        name: "Great Ocean Road Day Trip",
        cost: 60,
        carbon: 15,
        time: "Day Trip",
      },
      {
        name: "Melbourne Coffee & Food Tour",
        cost: 45,
        carbon: 1,
        time: "Morning",
      },
      {
        name: "Phillip Island Penguin Parade",
        cost: 30,
        carbon: 8,
        time: "Evening",
      },
    ],
    tags: [
      "Oceania",
      "City",
      "Culture",
      "Food",
      "Scenic",
      "Adventure",
      "Nature",
    ],
    description:
      "Australia's cultural capital, renowned for its coffee scene, street art and stunning coastal drives.",
  },

  {
    id: 44,
    destination: "Brisbane, Australia",
    image: "images/brisbane.webp",
    duration: 8,
    cost: 1900,
    carbonScore: 6745,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      {
        name: "South Bank Parklands Walk",
        cost: 0,
        carbon: 0,
        time: "Morning",
      },
      {
        name: "Australia Zoo Day Trip",
        cost: 59,
        carbon: 10,
        time: "Day Trip",
      },
      {
        name: "Lone Pine Koala Sanctuary",
        cost: 38,
        carbon: 5,
        time: "Afternoon",
      },
      {
        name: "Moreton Island Snorkelling",
        cost: 70,
        carbon: 10,
        time: "Day Trip",
      },
    ],
    tags: [
      "Oceania",
      "City",
      "Nature",
      "Wildlife",
      "Beach",
      "Adventure",
      "Hot",
    ],
    description:
      "Queensland's sunny capital, perfectly placed between the Great Barrier Reef and Gold Coast.",
  },

  {
    id: 45,
    destination: "Perth, Australia",
    image: "images/perth.webp",
    duration: 10,
    cost: 2000,
    carbonScore: 5700,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      {
        name: "Rottnest Island Day Trip",
        cost: 35,
        carbon: 8,
        time: "Day Trip",
      },
      {
        name: "Kings Park Botanical Walk",
        cost: 0,
        carbon: 0,
        time: "Morning",
      },
      {
        name: "Fremantle Markets & Port",
        cost: 20,
        carbon: 2,
        time: "Afternoon",
      },
      { name: "Swan Valley Wine Tour", cost: 55, carbon: 5, time: "Afternoon" },
    ],
    tags: [
      "Oceania",
      "City",
      "Beach",
      "Nature",
      "Wine",
      "Scenic",
      "Relaxation",
      "Hot",
    ],
    description:
      "Australia's sunniest and most isolated city, with pristine beaches and world-class wine country on its doorstep.",
  },

  {
    id: 46,
    destination: "Queenstown, New Zealand",
    image: "images/queenstown.webp",
    duration: 8,
    cost: 2200,
    carbonScore: 7400,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      {
        name: "Bungee Jumping at Kawarau",
        cost: 165,
        carbon: 0,
        time: "Morning",
      },
      { name: "Milford Sound Cruise", cost: 80, carbon: 10, time: "Day Trip" },
      {
        name: "Skyline Gondola & Luge",
        cost: 55,
        carbon: 2,
        time: "Afternoon",
      },
      { name: "Fiordland Hiking Trail", cost: 0, carbon: 0, time: "Morning" },
    ],
    tags: [
      "Oceania",
      "Nature",
      "Adventure",
      "Mountains",
      "Scenic",
      "Hiking",
      "Luxury",
    ],
    description:
      "The adventure capital of the world, surrounded by dramatic fjords and snow-capped Southern Alps.",
  },

  {
    id: 47,
    destination: "Cairns, Australia",
    image: "images/cairns.webp",
    duration: 9,
    cost: 1900,
    carbonScore: 6200,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      {
        name: "Great Barrier Reef Snorkelling",
        cost: 80,
        carbon: 10,
        time: "Day Trip",
      },
      {
        name: "Daintree Rainforest Tour",
        cost: 55,
        carbon: 8,
        time: "Day Trip",
      },
      {
        name: "Skyrail Rainforest Cableway",
        cost: 60,
        carbon: 1,
        time: "Morning",
      },
      {
        name: "Indigenous Cultural Experience",
        cost: 35,
        carbon: 0,
        time: "Afternoon",
      },
    ],
    tags: [
      "Oceania",
      "Nature",
      "Beach",
      "Wildlife",
      "Adventure",
      "Scenic",
      "Hot",
    ],
    description:
      "Gateway to the Great Barrier Reef and the ancient Daintree Rainforest — a natural wonder double bill.",
  },

  {
    id: 48,
    destination: "Gold Coast, Australia",
    image: "images/gold-coast.webp",
    duration: 7,
    cost: 1700,
    carbonScore: 6750,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Surfers Paradise Beach", cost: 0, carbon: 0, time: "Morning" },
      {
        name: "Theme Park Day (Warner Bros)",
        cost: 95,
        carbon: 5,
        time: "Day Trip",
      },
      {
        name: "Lamington National Park Hike",
        cost: 0,
        carbon: 0,
        time: "Day Trip",
      },
      { name: "Sea World Experience", cost: 85, carbon: 3, time: "Afternoon" },
    ],
    tags: ["Oceania", "Beach", "Adventure", "Nature", "Hot", "Relaxation"],
    description:
      "Australia's playground — golden beaches, theme parks and hinterland rainforests all in one.",
  },

  {
    id: 49,
    destination: "Fiji (Nadi)",
    image: "images/fiji.webp",
    duration: 10,
    cost: 2400,
    carbonScore: 6100,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Coral Reef Snorkelling", cost: 40, carbon: 5, time: "Morning" },
      { name: "Kava Ceremony Experience", cost: 0, carbon: 0, time: "Evening" },
      {
        name: "Mamanuca Islands Day Trip",
        cost: 65,
        carbon: 10,
        time: "Day Trip",
      },
      { name: "Village Trekking Tour", cost: 30, carbon: 2, time: "Afternoon" },
    ],
    tags: [
      "Oceania",
      "Island",
      "Beach",
      "Nature",
      "Relaxation",
      "Scenic",
      "Hot",
      "Unique",
    ],
    description:
      "A tropical island paradise of turquoise lagoons, coral reefs and warm Fijian hospitality.",
  },

  {
    id: 50,
    destination: "Bora Bora, French Polynesia",
    image: "images/bora-bora.webp",
    duration: 10,
    cost: 4500,
    carbonScore: 6100,
    carbonRating: "Red",
    transport: "flight",
    activities: [
      { name: "Overwater Bungalow Stay", cost: 0, carbon: 0, time: "Morning" },
      {
        name: "Lagoon Shark & Ray Snorkel",
        cost: 70,
        carbon: 5,
        time: "Morning",
      },
      { name: "Mount Otemanu Hike", cost: 45, carbon: 0, time: "Morning" },
      { name: "Sunset Sailing Cruise", cost: 95, carbon: 5, time: "Evening" },
    ],
    tags: [
      "Oceania",
      "Island",
      "Beach",
      "Luxury",
      "Romantic",
      "Scenic",
      "Relaxation",
      "Hot",
    ],
    description:
      "The jewel of the South Pacific — impossibly turquoise waters, coral gardens and overwater luxury.",
  },
];

const fakeProfiles = [
  {
    id: 1,
    name: "Maya",
    age: 24,
    image: "images/maya_image.webp",
    likedHolidays: [7, 23, 38, 14, 45],
    bio: "Food lover, city enjoyer, always looking for an adventure",
  },
  {
    id: 2,
    name: "Jake",
    age: 26,
    image: "images/jake_image.jfif",
    likedHolidays: [3, 19, 42, 27, 11],
    bio: "Hiker, nature nerd, happiest when off the beaten track.",
  },
  {
    id: 3,
    name: "Sofia",
    age: 22,
    image: "images/sofia_image.jfif",
    likedHolidays: [50, 6, 31, 17, 24],
    bio: "Beach girl, sunset chaser, passionate about sustainable travel.",
  },
  {
    id: 4,
    name: "Tom",
    age: 28,
    image: "images/tom_image.jpg",
    likedHolidays: [9, 36, 2, 48, 13],
    bio: "Budget traveller, cycling enthusiast, train over plane always.",
  },
  {
    id: 5,
    name: "Priya",
    age: 23,
    image: "images/priya_image.webp",
    likedHolidays: [44, 8, 29, 15, 33],
    bio: "Culture vulture, museum lover, obsessed with European cities.",
  },
  {
    id: 6,
    name: "Lena",
    age: 27,
    image: "images/lena_image.webp",
    likedHolidays: [20, 37, 5, 46, 12],
    bio: "Foodie with a passport full of stamps, equally happy in a Tokyo ramen bar or a Moroccan souk.",
  },
  {
    id: 7,
    name: "Carlos",
    age: 31,
    image: "images/carlos_image.webp",
    likedHolidays: [1, 26, 43, 10, 34],
    bio: "Mountain chaser and ocean diver. If there's a summit or a reef nearby, I'm there.",
  },
  {
    id: 8,
    name: "Amara",
    age: 25,
    image: "images/amara_image.webp",
    likedHolidays: [49, 16, 4, 22, 39],
    bio: "History obsessed and perpetually curious. Ancient ruins over nightclubs every time.",
  },
  {
    id: 9,
    name: "Finn",
    age: 29,
    image: "images/finn_image.webp",
    likedHolidays: [28, 41, 18, 35, 6],
    bio: "Adrenaline junkie who can't sit still. Bungee jumping, hiking, surfing — yes to all.",
  },
  {
    id: 10,
    name: "Isla",
    age: 23,
    image: "images/isla_image.webp",
    likedHolidays: [47, 21, 32, 40, 25],
    bio: "Luxury on a budget is my speciality. Rosé at sunset, fresh pasta, warm water — that's the dream.",
  }
  
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
