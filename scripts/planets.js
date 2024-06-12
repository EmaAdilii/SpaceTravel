const planetData = {
  moon: {
      name: "Moon",
      image: "../img/moon.png",
      description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDist: "384400 km",
      travelTime: "3 days",
  },
  mars: {
      name: "Mars",
      image: "../img/mars.png",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDist: "225 mil. km",
      travelTime: "9 months",
  },
  mercury: {
      name: "Mercury",
      image: "../img/mercury.png",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDist: "628 mil. km",
      travelTime: "3 years",
  },
  uranus: {
      name: "Uranus",
      image: "../img/uranus.png",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDist: "1.6 bil. km",
      travelTime: "7 years",
  },
};

const planetList = Array.from(document.getElementsByClassName("planet-selector"));

planetList.forEach(link => {
  link.addEventListener("mouseup", updateSelectedLink);
  link.addEventListener("mouseup", switchPlanets);
});

function updateSelectedLink(e) {
  planetList.forEach(link => {
      link.classList.remove("active");
  });
  e.target.classList.add("active");
}

function switchPlanets(e) {
  switch (e.target.getAttribute('data-planet')) {
      case "moon":
          updateData(planetData.moon);
          break;
      case "mars":
          updateData(planetData.mars);
          break;
      case "mercury":
          updateData(planetData.mercury);
          break;
      case "uranus":
          updateData(planetData.uranus);
          break;
  }
}

const planetImg = document.getElementById("planet-img");
const planetName = document.getElementById("planet-name");
const planetDescription = document.getElementById("planet-description");
const planetDistance = document.getElementById("distance");
const travelTime = document.getElementById("travel-time");

function updateData(planet) {
  planetImg.src = planet.image;
  planetName.textContent = planet.name;
  planetDescription.textContent = planet.description;
  planetDistance.textContent = planet.avgDist;
  travelTime.textContent = planet.travelTime;
}

planetList.forEach(planet => {
  console.log(planet);
});


    const header = document.querySelector("header"); 
    if (header) {
        window.addEventListener("scroll", () => { 
            header.classList.toggle("sticky", window.scrollY > 50); 
        });
    }
