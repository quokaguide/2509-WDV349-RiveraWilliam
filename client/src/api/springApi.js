const SPRINGS = [
  {
    "id": "wekiva",
    "name": "Wekiwa Springs",
    "clarity": "clear",
    "distanceKm": 22.4,
    "amenities": [
      "swimming",
      "kayaking",
      "picnic",
      "parking",
      "hiking"
    ],
    "description": "A popular spring near Orlando with swimming and paddling. Great for a quick day trip.",
    "location": "Apopka, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/wekiwasprings.jpg",
    "tags": [
      "near orlando",
      "family friendly"
    ]
  },
  {
    "id": "blue",
    "name": "Blue Spring State Park",
    "clarity": "crystal",
    "distanceKm": 48,
    "amenities": [
      "boardwalk",
      "manatees",
      "kayaking",
      "parking",
      "picnic"
    ],
    "description": "Crystal-clear water and seasonal manatee viewing with a scenic boardwalk and trails.",
    "location": "Orange City, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/bluesprings.jpg",
    "tags": [
      "manatees",
      "state park"
    ]
  },
  {
    "id": "rock",
    "name": "Rock Springs (Kelly Park)",
    "clarity": "crystal",
    "distanceKm": 35,
    "amenities": [
      "tubing",
      "swimming",
      "picnic",
      "parking"
    ],
    "description": "A chilly spring run famous for tubing. Expect crowds on warm weekends.",
    "location": "Apopka, FL",
    "temperature": "68\u201372\u00b0F",
    "image": "/springs/rocksprings.jpg",
    "tags": [
      "tubing",
      "popular"
    ]
  },
  {
    "id": "rainbow",
    "name": "Rainbow Springs",
    "clarity": "crystal",
    "distanceKm": 140,
    "amenities": [
      "swimming",
      "snorkeling",
      "kayaking",
      "trails",
      "parking"
    ],
    "description": "Bright blue water with gardens and walking paths. Great for swimming and paddling.",
    "location": "Dunnellon, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/rainbowsprings.jpg",
    "tags": [
      "snorkeling",
      "scenic"
    ]
  },
  {
    "id": "ginnie",
    "name": "Ginnie Springs",
    "clarity": "crystal",
    "distanceKm": 160,
    "amenities": [
      "camping",
      "tubing",
      "snorkeling",
      "diving",
      "parking"
    ],
    "description": "Private spring complex known for tubing, clear water, and diving-friendly caverns.",
    "location": "High Springs, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/ginniesprings.jpg",
    "tags": [
      "tubing",
      "diving"
    ]
  },
  {
    "id": "ichetucknee",
    "name": "Ichetucknee Springs",
    "clarity": "crystal",
    "distanceKm": 175,
    "amenities": [
      "tubing",
      "kayaking",
      "swimming",
      "shuttle",
      "parking"
    ],
    "description": "A classic lazy-river float with multiple spring heads feeding a clear spring run.",
    "location": "Fort White, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/ichetuckneesprings.jpg",
    "tags": [
      "river float",
      "bucket list"
    ]
  },
  {
    "id": "juniper",
    "name": "Juniper Springs",
    "clarity": "clear",
    "distanceKm": 110,
    "amenities": [
      "canoe rental",
      "trails",
      "camping",
      "parking"
    ],
    "description": "A beautiful spring and run with canoe rentals and forest trails inside Ocala National Forest.",
    "location": "Ocala National Forest, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/junipersprings.jpg",
    "tags": [
      "canoeing",
      "ocala"
    ]
  },
  {
    "id": "silverglen",
    "name": "Silver Glen Springs",
    "clarity": "clear",
    "distanceKm": 95,
    "amenities": [
      "snorkeling",
      "swimming",
      "picnic",
      "parking"
    ],
    "description": "Clear spring basin with easy access and a short boardwalk area\u2014popular for a quick swim.",
    "location": "Ocala National Forest, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/silverglen.jpg",
    "tags": [
      "ocala",
      "easy access"
    ]
  },
  {
    "id": "alexander",
    "name": "Alexander Springs",
    "clarity": "clear",
    "distanceKm": 105,
    "amenities": [
      "swimming",
      "snorkeling",
      "picnic",
      "parking",
      "ranger station"
    ],
    "description": "Large swimming area with sandy bottom and clear water\u2014one of Ocala\u2019s favorites.",
    "location": "Altoona, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/alexandersprings.jpg",
    "tags": [
      "big swim area",
      "ocala"
    ]
  },
  {
    "id": "fanning",
    "name": "Fanning Springs",
    "clarity": "clear",
    "distanceKm": 250,
    "amenities": [
      "snorkeling",
      "swimming",
      "boat ramp",
      "parking"
    ],
    "description": "A spring pool connected to the Suwannee River\u2014nice for swimming and snorkeling.",
    "location": "Fanning Springs, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/fanningsprings.jpg",
    "tags": [
      "suwannee",
      "river"
    ]
  },
  {
    "id": "threesisters",
    "name": "Three Sisters Springs",
    "clarity": "crystal",
    "distanceKm": 170,
    "amenities": [
      "manatees",
      "boardwalk",
      "kayaking",
      "wildlife"
    ],
    "description": "Famous clear springs and a manatee hot spot in winter; access varies by season.",
    "location": "Crystal River, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/threesisters.jpg",
    "tags": [
      "manatees",
      "winter"
    ]
  },
  {
    "id": "devilsden",
    "name": "Devil's Den",
    "clarity": "clear",
    "distanceKm": 150,
    "amenities": [
      "diving",
      "snorkeling",
      "showers",
      "parking"
    ],
    "description": "Prehistoric underground spring with cave vibes\u2014popular with divers and snorkelers.",
    "location": "Williston, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/devilsden.jpg",
    "tags": [
      "cave",
      "diving"
    ]
  },
  {
    "id": "homosassa",
    "name": "Homosassa Springs",
    "clarity": "clear",
    "distanceKm": 165,
    "amenities": [
      "wildlife park",
      "boat",
      "boardwalk",
      "parking"
    ],
    "description": "A spring-fed river area known for wildlife viewing and classic Old Florida scenery.",
    "location": "Homosassa, FL",
    "temperature": "72\u00b0F",
    "image": "/springs/homosassasprings.jpg",
    "tags": [
      "old florida",
      "wildlife"
    ]
  }
];

export function getSprings() {
  return SPRINGS;
}

export function getSpringById(id) {
  return SPRINGS.find((s) => s.id === String(id));
}
