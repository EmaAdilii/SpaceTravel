const planetData = {
    moon: {
      name: "Moon",
      image: "./assets/destination/image-moon.webp",
      description:
        "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDist: "384400 km",
      travelTime: "3 days",
    },
    mars: {
      name: "Mars",
      image: "./assets/destination/image-mars.webp",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDist: "225 mil. km",
      travelTime: "9 months",
    },
    europa: {
      name: "Europa",
      image: "./assets/destination/image-europa.webp",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDist: "628 mil. km",
      travelTime: "3 years",
    },
    titan: {
      name: "Titan",
      image: "./assets/destination/image-titan.webp",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDist: "1.6 bil. km",
      travelTime: "7 years",
    },
  };
  
  
  
  planetList.forEach(link => {
      link.addEventListener("mouseup", updateSelectedLink);
      link.addEventListener("mouseup", switchPlanets);
  })
  
  function updateSelectedLink(e) {
      planetList.forEach(link => {
          link.classList.remove("active");
      })
  
      e.target.classList.add("active");
  }
  
  function switchPlanets(e) {
      switch(e.target.getAttribute('data-planet')) {
          case "moon":
              updateData(planetData.moon);
              break;
          case "mars":
              updateData(planetData.mars);
              break;
          case "europa":
              updateData(planetData.europa);
              break;
          case "titan":
              updateData(planetData.titan);
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
  