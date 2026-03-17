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
    "temperature": "72°F",
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
    "temperature": "72°F",
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
    "temperature": "68–72°F",
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
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
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
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
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
    "temperature": "72°F",
    "image": "/springs/ichetucknee.svg",
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
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
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
    "description": "Clear spring basin with easy access and a short boardwalk area—popular for a quick swim.",
    "location": "Ocala National Forest, FL",
    "temperature": "72°F",
    "image": "/springs/silverglen.svg",
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
    "description": "Large swimming area with sandy bottom and clear water—one of Ocala’s favorites.",
    "location": "Altoona, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
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
    "description": "A spring pool connected to the Suwannee River—nice for swimming and snorkeling.",
    "location": "Fanning Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
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
    "temperature": "72°F",
    "image": "/springs/threesisters.svg",
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
    "description": "Prehistoric underground spring with cave vibes—popular with divers and snorkelers.",
    "location": "Williston, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
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
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "old florida",
      "wildlife"
    ]
  },
  {
    "id": "de-leon-springs-state-park",
    "name": "De Leon Springs State Park",
    "clarity": "clear",
    "distanceKm": 55,
    "amenities": [
      "swimming",
      "kayaking",
      "boat tours",
      "parking",
      "picnic"
    ],
    "description": "A public-access Florida spring destination in De Leon Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "De Leon Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "near orlando",
      "state park"
    ]
  },
  {
    "id": "gemini-springs-park",
    "name": "Gemini Springs Park",
    "clarity": "clear",
    "distanceKm": 50,
    "amenities": [
      "walking trails",
      "picnic",
      "parking"
    ],
    "description": "A public-access Florida spring destination in DeBary, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "DeBary, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "park",
      "easy access"
    ]
  },
  {
    "id": "green-spring-park",
    "name": "Green Spring Park",
    "clarity": "clear",
    "distanceKm": 32,
    "amenities": [
      "boardwalk",
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Deltona, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Deltona, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "volusia",
      "small spring"
    ]
  },
  {
    "id": "ponce-de-leon-springs-state-park",
    "name": "Ponce de Leon Springs State Park",
    "clarity": "crystal",
    "distanceKm": 520,
    "amenities": [
      "swimming",
      "picnic",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ponce de Leon, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ponce de Leon, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "panhandle",
      "state park"
    ]
  },
  {
    "id": "palm-springs",
    "name": "Palm Springs",
    "clarity": "clear",
    "distanceKm": 42,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Samsula, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Samsula, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "volusia",
      "spring run"
    ]
  },
  {
    "id": "sanlando-springs",
    "name": "Sanlando Springs",
    "clarity": "clear",
    "distanceKm": 25,
    "amenities": [
      "park",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Longwood, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Longwood, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "seminole county",
      "historic"
    ]
  },
  {
    "id": "starbuck-spring",
    "name": "Starbuck Spring",
    "clarity": "clear",
    "distanceKm": 48,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Orange City, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Orange City, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "volusia",
      "small spring"
    ]
  },
  {
    "id": "seminole-spring",
    "name": "Seminole Spring",
    "clarity": "clear",
    "distanceKm": 28,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Longwood, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Longwood, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "wekiva basin"
    ]
  },
  {
    "id": "camp-joy-spring",
    "name": "Camp Joy Spring",
    "clarity": "clear",
    "distanceKm": 50,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Eustis, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Eustis, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "lake county"
    ]
  },
  {
    "id": "bugg-spring",
    "name": "Bugg Spring",
    "clarity": "clear",
    "distanceKm": 85,
    "amenities": [
      "camping",
      "parking",
      "boating"
    ],
    "description": "A public-access Florida spring destination in Astor, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Astor, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "forest",
      "boat access"
    ]
  },
  {
    "id": "madison-blue-spring-state-park",
    "name": "Madison Blue Spring State Park",
    "clarity": "crystal",
    "distanceKm": 360,
    "amenities": [
      "swimming",
      "diving",
      "picnic",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Lee, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Lee, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "north florida",
      "state park"
    ]
  },
  {
    "id": "silver-springs-state-park",
    "name": "Silver Springs State Park",
    "clarity": "clear",
    "distanceKm": 125,
    "amenities": [
      "kayaking",
      "boat tours",
      "trails",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ocala, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ocala, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "glass-bottom boats"
    ]
  },
  {
    "id": "silver-glen-springs-recreation-area",
    "name": "Silver Glen Springs Recreation Area",
    "clarity": "clear",
    "distanceKm": 95,
    "amenities": [
      "swimming",
      "snorkeling",
      "parking",
      "picnic"
    ],
    "description": "A public-access Florida spring destination in Ocala National Forest, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ocala National Forest, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ocala",
      "forest"
    ]
  },
  {
    "id": "salt-springs-recreation-area",
    "name": "Salt Springs Recreation Area",
    "clarity": "clear",
    "distanceKm": 105,
    "amenities": [
      "camping",
      "swimming",
      "boating",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Salt Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Salt Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ocala",
      "forest"
    ]
  },
  {
    "id": "fern-hammock-springs",
    "name": "Fern Hammock Springs",
    "clarity": "clear",
    "distanceKm": 110,
    "amenities": [
      "boardwalk",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ocala National Forest, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ocala National Forest, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ocala",
      "short stop"
    ]
  },
  {
    "id": "briar-cave-spring",
    "name": "Briar Cave Spring",
    "clarity": "clear",
    "distanceKm": 112,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ocala National Forest, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ocala National Forest, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ocala"
    ]
  },
  {
    "id": "silver-glen-run",
    "name": "Silver Glen Run",
    "clarity": "clear",
    "distanceKm": 98,
    "amenities": [
      "boating",
      "snorkeling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ocala National Forest, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ocala National Forest, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ocala",
      "run"
    ]
  },
  {
    "id": "warm-mineral-springs-park",
    "name": "Warm Mineral Springs Park",
    "clarity": "clear",
    "distanceKm": 250,
    "amenities": [
      "spa",
      "parking",
      "restrooms"
    ],
    "description": "A famous warm mineral spring open for soaking rather than a typical cold freshwater swim.",
    "location": "North Port, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "warm spring",
      "south florida"
    ]
  },
  {
    "id": "rainbow-springs-state-park",
    "name": "Rainbow Springs State Park",
    "clarity": "crystal",
    "distanceKm": 140,
    "amenities": [
      "swimming",
      "kayaking",
      "trails",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Dunnellon, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Dunnellon, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "popular"
    ]
  },
  {
    "id": "kp-hole-spring",
    "name": "KP Hole Spring",
    "clarity": "crystal",
    "distanceKm": 142,
    "amenities": [
      "kayaking",
      "tubing",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Dunnellon, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Dunnellon, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "rainbow river",
      "county park"
    ]
  },
  {
    "id": "paradise-spring",
    "name": "Paradise Spring",
    "clarity": "clear",
    "distanceKm": 140,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ocala, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ocala, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "dive site",
      "ocala"
    ]
  },
  {
    "id": "devil-s-den-prehistoric-spring",
    "name": "Devil's Den Prehistoric Spring",
    "clarity": "crystal",
    "distanceKm": 165,
    "amenities": [
      "diving",
      "snorkeling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Williston, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Williston, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "private park",
      "popular"
    ]
  },
  {
    "id": "blue-grotto",
    "name": "Blue Grotto",
    "clarity": "crystal",
    "distanceKm": 167,
    "amenities": [
      "diving",
      "snorkeling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Williston, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Williston, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "private park",
      "dive site"
    ]
  },
  {
    "id": "levy-blue-spring",
    "name": "Levy Blue Spring",
    "clarity": "clear",
    "distanceKm": 165,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Levy County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Levy County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "levy county"
    ]
  },
  {
    "id": "gilchrist-blue-springs-state-park",
    "name": "Gilchrist Blue Springs State Park",
    "clarity": "crystal",
    "distanceKm": 180,
    "amenities": [
      "swimming",
      "snorkeling",
      "paddling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "north florida"
    ]
  },
  {
    "id": "poe-springs-park",
    "name": "Poe Springs Park",
    "clarity": "crystal",
    "distanceKm": 176,
    "amenities": [
      "swimming",
      "snorkeling",
      "picnic",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "alachua county",
      "santa fe"
    ]
  },
  {
    "id": "rum-island-spring",
    "name": "Rum Island Spring",
    "clarity": "crystal",
    "distanceKm": 188,
    "amenities": [
      "swimming",
      "paddling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "santa fe river"
    ]
  },
  {
    "id": "ginnie-springs-outdoors",
    "name": "Ginnie Springs Outdoors",
    "clarity": "crystal",
    "distanceKm": 185,
    "amenities": [
      "camping",
      "tubing",
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "private park",
      "popular"
    ]
  },
  {
    "id": "devil-s-eye-spring",
    "name": "Devil's Eye Spring",
    "clarity": "crystal",
    "distanceKm": 185,
    "amenities": [
      "diving",
      "snorkeling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ginnie complex",
      "dive site"
    ]
  },
  {
    "id": "devil-s-ear-spring",
    "name": "Devil's Ear Spring",
    "clarity": "crystal",
    "distanceKm": 185,
    "amenities": [
      "diving",
      "snorkeling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ginnie complex",
      "dive site"
    ]
  },
  {
    "id": "little-devil-spring",
    "name": "Little Devil Spring",
    "clarity": "crystal",
    "distanceKm": 185,
    "amenities": [
      "snorkeling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ginnie complex"
    ]
  },
  {
    "id": "dogwood-spring",
    "name": "Dogwood Spring",
    "clarity": "crystal",
    "distanceKm": 185,
    "amenities": [
      "snorkeling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ginnie complex"
    ]
  },
  {
    "id": "twin-spring-at-ginnie",
    "name": "Twin Spring at Ginnie",
    "clarity": "crystal",
    "distanceKm": 185,
    "amenities": [
      "snorkeling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ginnie complex"
    ]
  },
  {
    "id": "hornsby-spring",
    "name": "Hornsby Spring",
    "clarity": "clear",
    "distanceKm": 178,
    "amenities": [
      "picnic",
      "river access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "santa fe river"
    ]
  },
  {
    "id": "lily-springs",
    "name": "Lily Springs",
    "clarity": "clear",
    "distanceKm": 182,
    "amenities": [
      "swimming",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "santa fe river"
    ]
  },
  {
    "id": "ichetucknee-head-spring",
    "name": "Ichetucknee Head Spring",
    "clarity": "crystal",
    "distanceKm": 195,
    "amenities": [
      "swimming",
      "parking",
      "boardwalk"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "head spring"
    ]
  },
  {
    "id": "blue-hole-spring-at-ichetucknee",
    "name": "Blue Hole Spring at Ichetucknee",
    "clarity": "crystal",
    "distanceKm": 196,
    "amenities": [
      "diving",
      "snorkeling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "blue hole"
    ]
  },
  {
    "id": "devil-s-eye-at-ichetucknee",
    "name": "Devil's Eye at Ichetucknee",
    "clarity": "crystal",
    "distanceKm": 196,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "dive site"
    ]
  },
  {
    "id": "mission-spring",
    "name": "Mission Spring",
    "clarity": "clear",
    "distanceKm": 196,
    "amenities": [
      "swimming",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ichetucknee"
    ]
  },
  {
    "id": "grassy-hole-spring",
    "name": "Grassy Hole Spring",
    "clarity": "clear",
    "distanceKm": 196,
    "amenities": [
      "floating",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ichetucknee"
    ]
  },
  {
    "id": "mill-pond-spring",
    "name": "Mill Pond Spring",
    "clarity": "clear",
    "distanceKm": 196,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ichetucknee"
    ]
  },
  {
    "id": "coffee-spring",
    "name": "Coffee Spring",
    "clarity": "clear",
    "distanceKm": 196,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ichetucknee"
    ]
  },
  {
    "id": "singing-spring",
    "name": "Singing Spring",
    "clarity": "clear",
    "distanceKm": 196,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ichetucknee"
    ]
  },
  {
    "id": "roaring-springs-group",
    "name": "Roaring Springs Group",
    "clarity": "clear",
    "distanceKm": 196,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "ichetucknee"
    ]
  },
  {
    "id": "lafayette-blue-springs-state-park",
    "name": "Lafayette Blue Springs State Park",
    "clarity": "crystal",
    "distanceKm": 235,
    "amenities": [
      "swimming",
      "boardwalk",
      "picnic",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Mayo, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Mayo, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "suwannee"
    ]
  },
  {
    "id": "troy-spring-state-park",
    "name": "Troy Spring State Park",
    "clarity": "clear",
    "distanceKm": 205,
    "amenities": [
      "diving",
      "boat ramp",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Branford, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Branford, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "suwannee"
    ]
  },
  {
    "id": "little-river-springs",
    "name": "Little River Springs",
    "clarity": "crystal",
    "distanceKm": 210,
    "amenities": [
      "swimming",
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Branford, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Branford, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "suwannee county"
    ]
  },
  {
    "id": "ruth-spring",
    "name": "Ruth Spring",
    "clarity": "clear",
    "distanceKm": 214,
    "amenities": [
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Branford, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Branford, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "suwannee river"
    ]
  },
  {
    "id": "royal-spring",
    "name": "Royal Spring",
    "clarity": "clear",
    "distanceKm": 210,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in O'Brien, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "O'Brien, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "suwannee river"
    ]
  },
  {
    "id": "telford-spring",
    "name": "Telford Spring",
    "clarity": "clear",
    "distanceKm": 214,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Branford, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Branford, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "suwannee river"
    ]
  },
  {
    "id": "running-springs",
    "name": "Running Springs",
    "clarity": "clear",
    "distanceKm": 212,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Suwannee County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Suwannee County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "suwannee river"
    ]
  },
  {
    "id": "hart-springs-park",
    "name": "Hart Springs Park",
    "clarity": "clear",
    "distanceKm": 195,
    "amenities": [
      "swimming",
      "camping",
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Bell, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Bell, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "gilchrist county",
      "river"
    ]
  },
  {
    "id": "otter-springs-park",
    "name": "Otter Springs Park",
    "clarity": "clear",
    "distanceKm": 190,
    "amenities": [
      "camping",
      "swimming",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Trenton, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Trenton, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "gilchrist county"
    ]
  },
  {
    "id": "hart-spring-run",
    "name": "Hart Spring Run",
    "clarity": "clear",
    "distanceKm": 196,
    "amenities": [
      "paddling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Bell, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Bell, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "suwannee river"
    ]
  },
  {
    "id": "falmouth-spring",
    "name": "Falmouth Spring",
    "clarity": "clear",
    "distanceKm": 220,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in McAlpin, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "McAlpin, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "suwannee county"
    ]
  },
  {
    "id": "peacock-springs-state-park",
    "name": "Peacock Springs State Park",
    "clarity": "clear",
    "distanceKm": 225,
    "amenities": [
      "diving",
      "hiking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Luraville, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Luraville, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "cave diving"
    ]
  },
  {
    "id": "peacock-1-spring",
    "name": "Peacock 1 Spring",
    "clarity": "clear",
    "distanceKm": 225,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Luraville, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Luraville, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "peacock",
      "cave diving"
    ]
  },
  {
    "id": "peacock-2-spring",
    "name": "Peacock 2 Spring",
    "clarity": "clear",
    "distanceKm": 225,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Luraville, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Luraville, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "peacock",
      "cave diving"
    ]
  },
  {
    "id": "orange-grove-sink",
    "name": "Orange Grove Sink",
    "clarity": "clear",
    "distanceKm": 226,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Luraville, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Luraville, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "peacock",
      "sink"
    ]
  },
  {
    "id": "olsen-sink",
    "name": "Olsen Sink",
    "clarity": "clear",
    "distanceKm": 226,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Luraville, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Luraville, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "peacock",
      "sink"
    ]
  },
  {
    "id": "challenge-sink",
    "name": "Challenge Sink",
    "clarity": "clear",
    "distanceKm": 226,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Luraville, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Luraville, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "peacock",
      "sink"
    ]
  },
  {
    "id": "shallow-sink",
    "name": "Shallow Sink",
    "clarity": "clear",
    "distanceKm": 226,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Luraville, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Luraville, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "peacock",
      "sink"
    ]
  },
  {
    "id": "johnson-spring",
    "name": "Johnson Spring",
    "clarity": "clear",
    "distanceKm": 226,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Luraville, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Luraville, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "peacock area"
    ]
  },
  {
    "id": "sullivan-spring",
    "name": "Sullivan Spring",
    "clarity": "clear",
    "distanceKm": 226,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Luraville, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Luraville, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "peacock area"
    ]
  },
  {
    "id": "wes-skiles-peacock-springs",
    "name": "Wes Skiles Peacock Springs",
    "clarity": "clear",
    "distanceKm": 225,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Luraville, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Luraville, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "cave diving"
    ]
  },
  {
    "id": "little-fanning-spring",
    "name": "Little Fanning Spring",
    "clarity": "clear",
    "distanceKm": 235,
    "amenities": [
      "river access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fanning Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fanning Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "fanning area"
    ]
  },
  {
    "id": "fanning-springs-state-park",
    "name": "Fanning Springs State Park",
    "clarity": "clear",
    "distanceKm": 235,
    "amenities": [
      "swimming",
      "snorkeling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fanning Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fanning Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "suwannee"
    ]
  },
  {
    "id": "manatee-springs-state-park",
    "name": "Manatee Springs State Park",
    "clarity": "crystal",
    "distanceKm": 210,
    "amenities": [
      "kayaking",
      "boardwalk",
      "camping",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Chiefland, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Chiefland, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "manatees"
    ]
  },
  {
    "id": "catfish-hotel-spring",
    "name": "Catfish Hotel Spring",
    "clarity": "crystal",
    "distanceKm": 212,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Chiefland, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Chiefland, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "manatee springs",
      "dive site"
    ]
  },
  {
    "id": "andrews-spring",
    "name": "Andrews Spring",
    "clarity": "clear",
    "distanceKm": 215,
    "amenities": [
      "boat access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Levy County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Levy County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "lower suwannee"
    ]
  },
  {
    "id": "blue-hole-spring",
    "name": "Blue Hole Spring",
    "clarity": "clear",
    "distanceKm": 230,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Dixie County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Dixie County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "lower suwannee"
    ]
  },
  {
    "id": "jug-spring",
    "name": "Jug Spring",
    "clarity": "clear",
    "distanceKm": 232,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Dixie County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Dixie County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "lower suwannee"
    ]
  },
  {
    "id": "rock-bluff-spring",
    "name": "Rock Bluff Spring",
    "clarity": "clear",
    "distanceKm": 220,
    "amenities": [
      "boat access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Suwannee County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Suwannee County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "suwannee river"
    ]
  },
  {
    "id": "allen-mill-pond-spring",
    "name": "Allen Mill Pond Spring",
    "clarity": "clear",
    "distanceKm": 225,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Suwannee County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Suwannee County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "suwannee"
    ]
  },
  {
    "id": "wakulla-springs",
    "name": "Wakulla Springs",
    "clarity": "clear",
    "distanceKm": 405,
    "amenities": [
      "boat tours",
      "swimming",
      "trails",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Wakulla Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Wakulla Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "first magnitude"
    ]
  },
  {
    "id": "cherokee-sink",
    "name": "Cherokee Sink",
    "clarity": "clear",
    "distanceKm": 400,
    "amenities": [
      "hiking",
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Wakulla County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Wakulla County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "wakulla area",
      "sink"
    ]
  },
  {
    "id": "sally-ward-spring",
    "name": "Sally Ward Spring",
    "clarity": "clear",
    "distanceKm": 402,
    "amenities": [
      "boat access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Wakulla County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Wakulla County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "wakulla river"
    ]
  },
  {
    "id": "shepherd-spring",
    "name": "Shepherd Spring",
    "clarity": "clear",
    "distanceKm": 402,
    "amenities": [
      "boat access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Wakulla County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Wakulla County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "wakulla river"
    ]
  },
  {
    "id": "indian-springs-at-wakulla",
    "name": "Indian Springs at Wakulla",
    "clarity": "clear",
    "distanceKm": 402,
    "amenities": [
      "boat access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Wakulla County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Wakulla County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "wakulla river"
    ]
  },
  {
    "id": "morrison-springs-county-park",
    "name": "Morrison Springs County Park",
    "clarity": "crystal",
    "distanceKm": 505,
    "amenities": [
      "swimming",
      "diving",
      "picnic",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ponce de Leon, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ponce de Leon, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "walton county",
      "county park"
    ]
  },
  {
    "id": "vortex-spring",
    "name": "Vortex Spring",
    "clarity": "crystal",
    "distanceKm": 510,
    "amenities": [
      "diving",
      "snorkeling",
      "camping",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ponce de Leon, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ponce de Leon, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "private park",
      "panhandle"
    ]
  },
  {
    "id": "williford-spring",
    "name": "Williford Spring",
    "clarity": "crystal",
    "distanceKm": 500,
    "amenities": [
      "swimming",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ponce de Leon, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ponce de Leon, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "econfina",
      "panhandle"
    ]
  },
  {
    "id": "pitt-spring",
    "name": "Pitt Spring",
    "clarity": "crystal",
    "distanceKm": 500,
    "amenities": [
      "swimming",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ponce de Leon, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ponce de Leon, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "econfina",
      "panhandle"
    ]
  },
  {
    "id": "sylvan-spring",
    "name": "Sylvan Spring",
    "clarity": "clear",
    "distanceKm": 500,
    "amenities": [
      "swimming",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ponce de Leon, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ponce de Leon, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "econfina",
      "panhandle"
    ]
  },
  {
    "id": "gainer-springs",
    "name": "Gainer Springs",
    "clarity": "crystal",
    "distanceKm": 500,
    "amenities": [
      "paddling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ebro, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ebro, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "econfina",
      "spring run"
    ]
  },
  {
    "id": "bumpnose-spring",
    "name": "Bumpnose Spring",
    "clarity": "clear",
    "distanceKm": 500,
    "amenities": [
      "paddling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ebro, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ebro, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "econfina"
    ]
  },
  {
    "id": "devils-hole-spring",
    "name": "Devils Hole Spring",
    "clarity": "clear",
    "distanceKm": 500,
    "amenities": [
      "paddling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Ebro, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Ebro, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "econfina"
    ]
  },
  {
    "id": "cedar-tree-spring",
    "name": "Cedar Tree Spring",
    "clarity": "clear",
    "distanceKm": 495,
    "amenities": [
      "parking",
      "wildlife"
    ],
    "description": "A public-access Florida spring destination in Washington County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Washington County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "econfina"
    ]
  },
  {
    "id": "washington-blue-spring",
    "name": "Washington Blue Spring",
    "clarity": "clear",
    "distanceKm": 492,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Washington County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Washington County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "northwest florida"
    ]
  },
  {
    "id": "jackson-blue-spring-recreation-area",
    "name": "Jackson Blue Spring Recreation Area",
    "clarity": "crystal",
    "distanceKm": 500,
    "amenities": [
      "diving",
      "swimming",
      "picnic",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Marianna, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Marianna, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "jackson county",
      "popular"
    ]
  },
  {
    "id": "merritts-mill-pond-springs",
    "name": "Merritts Mill Pond Springs",
    "clarity": "crystal",
    "distanceKm": 502,
    "amenities": [
      "paddling",
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Marianna, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Marianna, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "mill pond",
      "spring group"
    ]
  },
  {
    "id": "blue-springs-recreation-area",
    "name": "Blue Springs Recreation Area",
    "clarity": "clear",
    "distanceKm": 505,
    "amenities": [
      "swimming",
      "picnic",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Marianna, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Marianna, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "jackson county"
    ]
  },
  {
    "id": "twin-caves-spring",
    "name": "Twin Caves Spring",
    "clarity": "clear",
    "distanceKm": 505,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Marianna, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Marianna, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "merritts mill"
    ]
  },
  {
    "id": "shangri-la-spring",
    "name": "Shangri-La Spring",
    "clarity": "clear",
    "distanceKm": 505,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Marianna, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Marianna, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "merritts mill"
    ]
  },
  {
    "id": "cypress-spring-on-merritts-mill",
    "name": "Cypress Spring on Merritts Mill",
    "clarity": "clear",
    "distanceKm": 505,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Marianna, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Marianna, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "merritts mill"
    ]
  },
  {
    "id": "hole-in-the-wall-spring",
    "name": "Hole in the Wall Spring",
    "clarity": "clear",
    "distanceKm": 505,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Marianna, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Marianna, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "merritts mill"
    ]
  },
  {
    "id": "twin-falls-spring",
    "name": "Twin Falls Spring",
    "clarity": "clear",
    "distanceKm": 505,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Marianna, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Marianna, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "merritts mill"
    ]
  },
  {
    "id": "pitt-spring-at-holmes-creek",
    "name": "Pitt Spring at Holmes Creek",
    "clarity": "clear",
    "distanceKm": 490,
    "amenities": [
      "paddling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Vernon, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Vernon, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "holmes creek"
    ]
  },
  {
    "id": "sand-bag-spring",
    "name": "Sand Bag Spring",
    "clarity": "clear",
    "distanceKm": 492,
    "amenities": [
      "paddling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Holmes Creek, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Holmes Creek, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "holmes creek"
    ]
  },
  {
    "id": "cypress-blue-spring",
    "name": "Cypress Blue Spring",
    "clarity": "clear",
    "distanceKm": 500,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Jackson County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Jackson County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "northwest florida"
    ]
  },
  {
    "id": "beckton-springs",
    "name": "Beckton Springs",
    "clarity": "clear",
    "distanceKm": 500,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Jackson County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Jackson County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "dive site"
    ]
  },
  {
    "id": "blue-hole-spring-at-florida-caverns-area",
    "name": "Blue Hole Spring at Florida Caverns area",
    "clarity": "clear",
    "distanceKm": 500,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Jackson County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Jackson County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "caverns area"
    ]
  },
  {
    "id": "weeki-wachee-springs-state-park",
    "name": "Weeki Wachee Springs State Park",
    "clarity": "crystal",
    "distanceKm": 125,
    "amenities": [
      "kayaking",
      "boat tours",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Weeki Wachee, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Weeki Wachee, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "mermaids"
    ]
  },
  {
    "id": "hospital-hole",
    "name": "Hospital Hole",
    "clarity": "clear",
    "distanceKm": 126,
    "amenities": [
      "kayaking",
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Weeki Wachee, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Weeki Wachee, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "weeki wachee river"
    ]
  },
  {
    "id": "rogers-park-spring",
    "name": "Rogers Park Spring",
    "clarity": "clear",
    "distanceKm": 127,
    "amenities": [
      "kayaking",
      "swimming",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Weeki Wachee, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Weeki Wachee, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "hernando county"
    ]
  },
  {
    "id": "jenkins-creek-spring",
    "name": "Jenkins Creek Spring",
    "clarity": "clear",
    "distanceKm": 132,
    "amenities": [
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Hernando Beach, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Hernando Beach, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "coastal spring"
    ]
  },
  {
    "id": "chassahowitzka-main-spring",
    "name": "Chassahowitzka Main Spring",
    "clarity": "clear",
    "distanceKm": 140,
    "amenities": [
      "kayaking",
      "boating",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Chassahowitzka, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Chassahowitzka, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "river spring"
    ]
  },
  {
    "id": "baird-creek-spring",
    "name": "Baird Creek Spring",
    "clarity": "clear",
    "distanceKm": 142,
    "amenities": [
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Chassahowitzka, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Chassahowitzka, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "chassahowitzka"
    ]
  },
  {
    "id": "the-crack-at-chassahowitzka",
    "name": "The Crack at Chassahowitzka",
    "clarity": "crystal",
    "distanceKm": 142,
    "amenities": [
      "paddling",
      "swimming",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Chassahowitzka, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Chassahowitzka, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "popular paddle spot"
    ]
  },
  {
    "id": "seven-sisters-springs",
    "name": "Seven Sisters Springs",
    "clarity": "crystal",
    "distanceKm": 145,
    "amenities": [
      "kayaking",
      "swimming",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Homosassa, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Homosassa, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "gulf coast"
    ]
  },
  {
    "id": "hunter-springs-park",
    "name": "Hunter Springs Park",
    "clarity": "crystal",
    "distanceKm": 150,
    "amenities": [
      "swimming",
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Crystal River, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Crystal River, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "city park",
      "crystal river"
    ]
  },
  {
    "id": "king-s-bay-spring-group",
    "name": "King's Bay Spring Group",
    "clarity": "crystal",
    "distanceKm": 150,
    "amenities": [
      "kayaking",
      "manatees",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Crystal River, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Crystal River, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "spring group",
      "manatees"
    ]
  },
  {
    "id": "idiots-delight-spring",
    "name": "Idiots Delight Spring",
    "clarity": "clear",
    "distanceKm": 151,
    "amenities": [
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Crystal River, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Crystal River, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "kings bay"
    ]
  },
  {
    "id": "magnolia-spring",
    "name": "Magnolia Spring",
    "clarity": "clear",
    "distanceKm": 151,
    "amenities": [
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Crystal River, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Crystal River, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "kings bay"
    ]
  },
  {
    "id": "tarpon-spring-in-kings-bay",
    "name": "Tarpon Spring in Kings Bay",
    "clarity": "clear",
    "distanceKm": 151,
    "amenities": [
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Crystal River, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Crystal River, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "kings bay"
    ]
  },
  {
    "id": "jurassic-spring",
    "name": "Jurassic Spring",
    "clarity": "clear",
    "distanceKm": 151,
    "amenities": [
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Crystal River, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Crystal River, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "kings bay"
    ]
  },
  {
    "id": "baggett-spring",
    "name": "Baggett Spring",
    "clarity": "clear",
    "distanceKm": 151,
    "amenities": [
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Crystal River, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Crystal River, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "kings bay"
    ]
  },
  {
    "id": "homosassa-springs-wildlife-state-park",
    "name": "Homosassa Springs Wildlife State Park",
    "clarity": "clear",
    "distanceKm": 152,
    "amenities": [
      "wildlife",
      "boardwalk",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Homosassa, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Homosassa, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "manatees"
    ]
  },
  {
    "id": "ruth-spring-at-homosassa",
    "name": "Ruth Spring at Homosassa",
    "clarity": "clear",
    "distanceKm": 152,
    "amenities": [
      "kayaking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Homosassa, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Homosassa, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "homosassa river"
    ]
  },
  {
    "id": "ruth-b-kirby-gilchrist-blue-complex",
    "name": "Ruth B. Kirby Gilchrist Blue complex",
    "clarity": "crystal",
    "distanceKm": 180,
    "amenities": [
      "swimming",
      "paddling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "gilchrist blue",
      "spring group"
    ]
  },
  {
    "id": "bolen-bluff-spring",
    "name": "Bolen Bluff Spring",
    "clarity": "clear",
    "distanceKm": 185,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Alachua County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Alachua County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "alachua county"
    ]
  },
  {
    "id": "poe-spring-run",
    "name": "Poe Spring Run",
    "clarity": "crystal",
    "distanceKm": 176,
    "amenities": [
      "paddling",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "santa fe river"
    ]
  },
  {
    "id": "hornsby-legacy-springs",
    "name": "Hornsby Legacy Springs",
    "clarity": "clear",
    "distanceKm": 179,
    "amenities": [
      "river access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "county park"
    ]
  },
  {
    "id": "columbia-blue-spring",
    "name": "Columbia Blue Spring",
    "clarity": "clear",
    "distanceKm": 198,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "columbia county"
    ]
  },
  {
    "id": "rum-island-blue-hole",
    "name": "Rum Island Blue Hole",
    "clarity": "crystal",
    "distanceKm": 188,
    "amenities": [
      "diving",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "rum island"
    ]
  },
  {
    "id": "mearson-spring",
    "name": "Mearson Spring",
    "clarity": "clear",
    "distanceKm": 198,
    "amenities": [
      "boat access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Fort White, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Fort White, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "santa fe"
    ]
  },
  {
    "id": "o-leno-rise",
    "name": "O'Leno Rise",
    "clarity": "clear",
    "distanceKm": 185,
    "amenities": [
      "hiking",
      "parking"
    ],
    "description": "A public-access Florida spring destination in High Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "High Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "state park",
      "river rise"
    ]
  },
  {
    "id": "suwannee-springs",
    "name": "Suwannee Springs",
    "clarity": "clear",
    "distanceKm": 220,
    "amenities": [
      "historic site",
      "parking"
    ],
    "description": "A public-access Florida spring destination in White Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "White Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "hamilton county"
    ]
  },
  {
    "id": "white-springs",
    "name": "White Springs",
    "clarity": "clear",
    "distanceKm": 220,
    "amenities": [
      "historic site",
      "parking"
    ],
    "description": "A public-access Florida spring destination in White Springs, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "White Springs, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "historic spring"
    ]
  },
  {
    "id": "bell-springs",
    "name": "Bell Springs",
    "clarity": "clear",
    "distanceKm": 192,
    "amenities": [
      "river access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Bell, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Bell, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "gilchrist county"
    ]
  },
  {
    "id": "mearson-blue-spring",
    "name": "Mearson Blue Spring",
    "clarity": "clear",
    "distanceKm": 228,
    "amenities": [
      "boat access",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Hamilton County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Hamilton County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "suwannee river"
    ]
  },
  {
    "id": "madison-blue-main-spring",
    "name": "Madison Blue Main Spring",
    "clarity": "crystal",
    "distanceKm": 360,
    "amenities": [
      "diving",
      "swimming",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Lee, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Lee, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "madison blue"
    ]
  },
  {
    "id": "pot-spring",
    "name": "Pot Spring",
    "clarity": "clear",
    "distanceKm": 362,
    "amenities": [
      "parking",
      "wildlife"
    ],
    "description": "A public-access Florida spring destination in Madison County, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Madison County, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "madison county"
    ]
  },
  {
    "id": "lithia-springs-park",
    "name": "Lithia Springs Park",
    "clarity": "clear",
    "distanceKm": 115,
    "amenities": [
      "swimming",
      "picnic",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Lithia, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Lithia, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "hillsborough county"
    ]
  },
  {
    "id": "sulphur-springs",
    "name": "Sulphur Springs",
    "clarity": "clear",
    "distanceKm": 110,
    "amenities": [
      "historic site",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Tampa, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Tampa, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "tampa",
      "urban spring"
    ]
  },
  {
    "id": "little-manatee-spring",
    "name": "Little Manatee Spring",
    "clarity": "clear",
    "distanceKm": 130,
    "amenities": [
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Wimauma, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Wimauma, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "hillsborough county"
    ]
  },
  {
    "id": "crystal-springs-preserve",
    "name": "Crystal Springs Preserve",
    "clarity": "clear",
    "distanceKm": 95,
    "amenities": [
      "hiking",
      "wildlife",
      "parking"
    ],
    "description": "A public-access Florida spring destination in Zephyrhills, FL popular for swimming, paddling, wildlife viewing, or a scenic stop.",
    "location": "Zephyrhills, FL",
    "temperature": "72°F",
    "image": "/springs/generic-spring.svg",
    "tags": [
      "pasco county"
    ]
  }
];

export function getSprings() {
  return SPRINGS;
}

export function getSpringById(id) {
  return SPRINGS.find((s) => s.id === String(id));
}