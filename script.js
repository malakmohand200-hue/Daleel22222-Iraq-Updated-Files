/* =========================================================
   DALEEL IRAQ — FINAL JAVASCRIPT
   ========================================================= */


/* =========================
   DATA
========================= */
// التحكم بقائمة الهاتف (Mobile Menu)
const barsOfShowSections = document.querySelector(".bars-of-sections");
const headLinks = document.querySelector(".nav-links");

barsOfShowSections.onclick = () => {
    headLinks.classList.toggle("show");
};

// التحكم بنافذة البحث المنبثقة (Search Modal)
const openSearchBtn = document.getElementById("openSearchModal");
const closeSearchBtn = document.getElementById("closeSearchModal");
const searchModal = document.getElementById("searchModal");
const modalSearchInput = document.getElementById("modalSearchInput");

openSearchBtn.onclick = () => {
    searchModal.classList.add("show");
    setTimeout(() => modalSearchInput.focus(), 100); // التركيز تلقائياً على حقل الكتابة
};

closeSearchBtn.onclick = () => {
    searchModal.classList.remove("show");
};

// إغلاق النافذة عند الضغط خارج الـ Modal Content
searchModal.onclick = (e) => {
    if (e.target === searchModal) {
        searchModal.classList.remove("show");
    }
};
//map

const baghdad = document.querySelector("#IQ-BG");

if (baghdad) {
    baghdad.addEventListener("click", () => {
        window.location.hash = "baghdad";
    });

    baghdad.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            window.location.hash = "baghdad";
        }
    });
}

const destinations = {

    Baghdad: {

        history: [
            {
                title: "Al-Mutanabbi Street",
                text: "Explore books, culture and the historic atmosphere of central Baghdad."
            },
            {
                title: "Iraqi Museum",
                text: "Discover one of the most important collections of Mesopotamian heritage."
            },
            {
                title: "Abbasid Palace",
                text: "Experience Baghdad's historic architecture and connection to the Abbasid era."
            }
        ],

        nature: [
            {
                title: "Abu Nuwas Garden",
                text: "Enjoy a relaxing walk along the Tigris River."
            },
            {
                title: "Tigris River",
                text: "Spend time near one of Iraq's most important natural landmarks."
            },
            {
                title: "Zawraa Park",
                text: "A popular green space for a relaxed city experience."
            }
        ],

        food: [
            {
                title: "Traditional Iraqi Breakfast",
                text: "Start the morning with classic Iraqi dishes and local flavors."
            },
            {
                title: "Baghdad Food Experience",
                text: "Discover traditional Iraqi cuisine and popular local restaurants."
            },
            {
                title: "Local Café Experience",
                text: "Enjoy Iraqi tea and a relaxed evening atmosphere."
            }
        ],

        culture: [
            {
                title: "Al-Mutanabbi Street",
                text: "Experience Baghdad's literary and cultural heart."
            },
            {
                title: "Baghdad Cultural District",
                text: "Discover art, books and local traditions."
            },
            {
                title: "Tigris Riverside",
                text: "Enjoy the city's atmosphere along the river."
            }
        ],

        adventure: [
            {
                title: "Baghdad City Exploration",
                text: "Explore the city's famous landmarks and hidden streets."
            },
            {
                title: "Old Baghdad Walk",
                text: "Take a walking journey through historic parts of the capital."
            },
            {
                title: "Tigris Experience",
                text: "Discover Baghdad from the perspective of the Tigris River."
            }
        ]
    },


    Erbil: {

        history: [
            {
                title: "Erbil Citadel",
                text: "Visit one of the oldest continuously inhabited settlements in the world."
            },
            {
                title: "Erbil Old Bazaar",
                text: "Walk through traditional markets and discover local crafts."
            },
            {
                title: "Mudhafaria Minaret",
                text: "Explore one of Erbil's historic architectural landmarks."
            }
        ],

        nature: [
            {
                title: "Rawanduz Canyon",
                text: "Enjoy spectacular mountain landscapes and dramatic views."
            },
            {
                title: "Gali Ali Beg Waterfall",
                text: "Discover one of Kurdistan's beautiful natural attractions."
            },
            {
                title: "Shaqlawa",
                text: "Relax among the mountains and enjoy the peaceful environment."
            }
        ],

        food: [
            {
                title: "Kurdish Cuisine",
                text: "Try traditional Kurdish dishes and local specialties."
            },
            {
                title: "Erbil Old Bazaar",
                text: "Explore local food and traditional market experiences."
            },
            {
                title: "Kurdish Tea Experience",
                text: "Enjoy tea and local hospitality in a traditional atmosphere."
            }
        ],

        culture: [
            {
                title: "Erbil Citadel",
                text: "Discover the historical heart of the city."
            },
            {
                title: "Old Bazaar",
                text: "Experience traditional markets, crafts and local life."
            },
            {
                title: "Kurdish Cultural Experience",
                text: "Learn about the traditions and lifestyle of Kurdistan."
            }
        ],

        adventure: [
            {
                title: "Rawanduz Canyon",
                text: "Perfect for travelers who enjoy mountains and dramatic landscapes."
            },
            {
                title: "Gali Ali Beg",
                text: "Explore waterfalls and beautiful mountain scenery."
            },
            {
                title: "Shaqlawa",
                text: "Enjoy a peaceful mountain escape outside the city."
            }
        ]
    },


    Sulaymaniyah: {

        history: [
            {
                title: "Amna Suraka",
                text: "Visit a museum that tells important stories from the region's history."
            },
            {
                title: "Sulaymaniyah Museum",
                text: "Explore artifacts and archaeological heritage."
            },
            {
                title: "Old City",
                text: "Discover traditional streets and local history."
            }
        ],

        nature: [
            {
                title: "Dukan Lake",
                text: "Enjoy a peaceful lake surrounded by mountains."
            },
            {
                title: "Azmar Mountain",
                text: "Experience panoramic views over Sulaymaniyah."
            },
            {
                title: "Darbazikhan",
                text: "Explore beautiful natural scenery outside the city."
            }
        ],

        food: [
            {
                title: "Kurdish Food Experience",
                text: "Taste traditional dishes and regional specialties."
            },
            {
                title: "Sulaymaniyah Bazaar",
                text: "Discover local food, sweets and traditional products."
            },
            {
                title: "Tea & Café Culture",
                text: "Enjoy the relaxed café culture of Sulaymaniyah."
            }
        ],

        culture: [
            {
                title: "Sulaymaniyah Museum",
                text: "Explore the cultural and archaeological history of the region."
            },
            {
                title: "Amna Suraka",
                text: "Discover a place deeply connected to the region's modern history."
            },
            {
                title: "Old Bazaar",
                text: "Experience local life, crafts and traditional markets."
            }
        ],

        adventure: [
            {
                title: "Azmar Mountain",
                text: "A great viewpoint for travelers who love mountains."
            },
            {
                title: "Dukan Lake",
                text: "Enjoy nature, water and mountain scenery."
            },
            {
                title: "Mountain Escape",
                text: "Explore the landscapes around Sulaymaniyah."
            }
        ]
    },


    Basra: {

        history: [
            {
                title: "Basra Old City",
                text: "Discover the historical character of one of Iraq's oldest cities."
            },
            {
                title: "Basra Heritage Houses",
                text: "Explore traditional architecture and local heritage."
            },
            {
                title: "Old Basra",
                text: "Walk through historic areas and learn about Basra's past."
            }
        ],

        nature: [
            {
                title: "Shatt Al-Arab",
                text: "Enjoy the beautiful waterways and unique southern landscape."
            },
            {
                title: "Abadan Island Area",
                text: "Explore the atmosphere around the waterways of southern Iraq."
            },
            {
                title: "Basra Date Palms",
                text: "Experience the iconic palm landscapes of Basra."
            }
        ],

        food: [
            {
                title: "Southern Iraqi Cuisine",
                text: "Taste traditional Basrawi dishes and southern flavors."
            },
            {
                title: "Basra Fish",
                text: "Discover famous southern Iraqi fish dishes."
            },
            {
                title: "Local Markets",
                text: "Explore local food and traditional products."
            }
        ],

        culture: [
            {
                title: "Basra Heritage",
                text: "Explore the cultural identity of southern Iraq."
            },
            {
                title: "Old Basra",
                text: "Discover traditional architecture and local stories."
            },
            {
                title: "Shatt Al-Arab",
                text: "Experience the cultural importance of the waterways."
            }
        ],

        adventure: [
            {
                title: "Shatt Al-Arab",
                text: "Explore the southern waterways and landscapes."
            },
            {
                title: "Basra Palm Groves",
                text: "Discover the famous palm landscapes of the region."
            },
            {
                title: "Southern Iraq Experience",
                text: "Explore the unique environment and culture of Basra."
            }
        ]
    },


    Najaf: {

        history: [
            {
                title: "Najaf Old City",
                text: "Explore a city rich in religious, cultural and architectural history."
            },
            {
                title: "Wadi Al-Salam",
                text: "Discover one of the most historically significant sites in Najaf."
            },
            {
                title: "Historic Markets",
                text: "Walk through traditional markets around the old city."
            }
        ],

        nature: [
            {
                title: "Najaf Desert",
                text: "Experience the unique landscapes surrounding the city."
            },
            {
                title: "Najaf Lake Area",
                text: "Explore the natural environment around Najaf."
            },
            {
                title: "Desert Landscape",
                text: "Enjoy the peaceful atmosphere of the Iraqi desert."
            }
        ],

        food: [
            {
                title: "Najaf Cuisine",
                text: "Discover traditional Iraqi food and local dishes."
            },
            {
                title: "Old City Food",
                text: "Explore local food experiences around the historic center."
            },
            {
                title: "Iraqi Sweets",
                text: "Try traditional sweets and local specialties."
            }
        ],

        culture: [
            {
                title: "Najaf Old City",
                text: "Experience the cultural and architectural heart of Najaf."
            },
            {
                title: "Traditional Markets",
                text: "Discover local crafts and everyday life."
            },
            {
                title: "Historic Heritage",
                text: "Explore Najaf's deep cultural heritage."
            }
        ],

        adventure: [
            {
                title: "Najaf Desert",
                text: "Explore the open landscapes surrounding Najaf."
            },
            {
                title: "Historic City Walk",
                text: "Discover the old city through a walking experience."
            },
            {
                title: "Najaf Exploration",
                text: "Experience the city's landmarks and local atmosphere."
            }
        ]
    }

};


/* =========================
   EXPLORE FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter");

const placeCards = document.querySelectorAll(".place-card");

const searchInput = document.getElementById("searchInput");

const noResults = document.getElementById("noResults");


let selectedCity = "all";


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCity = button.dataset.city;

        filterPlaces();

    });

});


searchInput.addEventListener("input", filterPlaces);


function filterPlaces() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    let visibleCount = 0;


    placeCards.forEach(card => {

        const city =
            card.dataset.city;

        const name =
            card.dataset.name.toLowerCase();


        const cityMatch =
            selectedCity === "all" ||
            city === selectedCity;


        const searchMatch =
            name.includes(searchValue) ||
            city.toLowerCase().includes(searchValue);


        if (cityMatch && searchMatch) {

            card.style.display = "block";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleCount === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* =========================
   FAVORITES
========================= */

function toggleFavorite(button) {

    button.classList.toggle("favorite");

    if (button.classList.contains("favorite")) {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }

}


/* =========================
   INTEREST SELECTION
========================= */

const interestButtons =
    document.querySelectorAll(".interest");


let selectedInterest = "history";


interestButtons.forEach(button => {

    button.addEventListener("click", () => {

        interestButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedInterest =
            button.dataset.interest;

    });

});


/* =========================
   BUDGET SELECTION
========================= */

const budgetButtons =
    document.querySelectorAll(".budget");


let selectedBudget = "low";


budgetButtons.forEach(button => {

    button.addEventListener("click", () => {

        budgetButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedBudget =
            button.dataset.budget;

    });

});


/* =========================
   TRIP GENERATOR
========================= */

function generateTrip() {

    const city =
        document.getElementById("citySelect").value;


    if (!city) {

        alert("Please choose a city first.");

        return;

    }


    const cityData =
        destinations[city];


    const places =
        cityData[selectedInterest];


    const budgetText = {

        low:
            "A budget-friendly experience focused on essential attractions.",

        medium:
            "A balanced experience combining attractions, food and relaxation.",

        high:
            "A premium experience with extra comfort and flexible activities."

    };


    const result =
        document.getElementById("tripResult");


    const tripDays =
        document.getElementById("tripDays");


    const tripTitle =
        document.getElementById("tripTitle");


    tripTitle.innerText =
        `${city} • Your ${selectedInterest} Journey`;


    tripDays.innerHTML = "";
openAIMessage

    places.forEach((place, index) => {

        const day =
            document.createElement("div");

        day.className =
            "trip-day";


        day.innerHTML = `

            <span>
                DAY ${index + 1}
            </span>

            <h3>
                ${place.title}
            </h3>

            <p>
                ${place.text}
            </p>

            <p style="margin-top:10px;color:#c9a45c;">
                ${budgetText[selectedBudget]}
            </p>

        `;


        tripDays.appendChild(day);

    });


    result.style.display = "block";


    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================
   LEAFLET MAP
========================= */

const map =
    L.map("iraqMap").setView(
        [33.3152, 44.3661],
        5.7
    );


L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


/* =========================
   MAP MARKERS
========================= */

const mapPlaces = [

    {
        name: "Baghdad",
        lat: 33.3152,
        lng: 44.3661,
        text: "Capital of Iraq — culture, history and the Tigris River."
    },

    {
        name: "Erbil",
        lat: 36.1911,
        lng: 44.0092,
        text: "Historic city and gateway to Kurdistan."
    },

    {
        name: "Sulaymaniyah",
        lat: 35.5570,
        lng: 45.4351,
        text: "A cultural city surrounded by mountains."
    },

    {
        name: "Basra",
        lat: 30.5085,
        lng: 47.7804,
        text: "Southern Iraq — rivers, palms and culture."
    },

    {
        name: "Najaf",
        lat: 32.0000,
        lng: 44.3300,
        text: "Historic city with deep cultural heritage."
    }

];


mapPlaces.forEach(place => {

    L.marker([
        place.lat,
        place.lng
    ])
    .addTo(map)

    .bindPopup(`
        <strong
            style="
                color:#31483a;
                font-family:Cairo;
            "
        >
            ${place.name}
        </strong>

        <br>

        <span
            style="
                font-size:11px;
                color:#777;
                font-family:Cairo;
            "
        >
            ${place.text}
        </span>
    `);

});


/* =========================
   AI MODAL
========================= */

const aiModal =
    document.getElementById("aiModal");


function openAIMessage() {

    aiModal.classList.add("show");

}


function closeAIMessage() {

    aiModal.classList.remove("show");

}


aiModal.addEventListener("click", event => {

    if (event.target === aiModal) {

        closeAIMessage();

    }

});


/* =========================
   BACK TO TOP
========================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(
        ".feature-card, .place-card, .planner-card, .ai-card"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "🇮🇶 Daleel Iraq — Final Hackathon Version Loaded Successfully."
);