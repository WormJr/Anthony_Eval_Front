// Tableau pour le slider du header
var images = [
  "assets/slideshow/background1.jpg",
  "assets/slideshow/background2.jpg",
  "assets/slideshow/background3.jpg",
];

// Initialisation de l'index de l'image courante
var currentIndex = 0;

// Fonction pour changer l'image du slider
function changeImage() {
  // Récupération de l'élément image du slider
  var bannerImage = document.getElementById("banner__img");

  // Changement de l'attribut src de l'élément image
  bannerImage.src = images[currentIndex];

  // Incrémentation de l'index de l'image courante
  currentIndex++;

  // Retour au début du tableau si on atteint la fin
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

// Lancement de la fonction changeImage() toutes les 4 secondes
setInterval(changeImage, 4000);

// Création de mon tableau pour les modeles de voiture
const carsLocation = [
  {
    id: 10,
    image: "assets/img/vehicule1.png",
    model: "peugeot 208",
    description:
      "Diesel 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km supplémentaires)",
    price: 999,
    agence: "Agence de Paris",
    thumbnails: ["vignette1.jpg", "vignette2.jpg", "vignette3.jpg"],
  },
  {
    id: 11,
    image: "assets/img/vehicule2.png",
    model: "Ford Focus",
    description:
      "Diesel 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km supplémentaires)",
    price: 999,
    agence: "Paris",
    thumbnails: ["vignette1.jpg", "vignette2.jpg", "vignette3.jpg"],
  },
  {
    id: 12,
    image: "assets/img/vehicule3.png",
    model: "Audi A1",
    description:
      "Diesel 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km supplémentaires)",
    price: 1100,
    agence: "Agence de Paris",
    thumbnails: ["vignette1.jpg", "vignette2.jpg", "vignette3.jpg"],
  },
  {
    id: 13,
    image: "assets/img/vehicule4.png",
    model: "Opel Mokka",
    description:
      "Diesel 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km supplémentaires)",
    price: 1150,
    agence: "Agence de Paris",
    thumbnails: ["vignette1.jpg", "vignette2.jpg", "vignette3.jpg"],
  },
];

const carsContainer = document.getElementById("cars");

// fonction qui me permet d'ajouter toutes les infos récuperer de mon tableau plus haut
carsLocation.map((car) => {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h2");
  title.textContent = car.model;

  const image = document.createElement("img");
  image.src = car.image;

  const description = document.createElement("p");
  description.textContent = car.description;

  const detail = document.createElement("p");
  detail.textContent = `Prix: ${car.price}€ - ${car.agence}`;

  const button = document.createElement("button");
  button.textContent = `Réservez et payer`;

  const hr = document.createElement("hr");

  carsContainer.appendChild(card);
  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(description);
  card.appendChild(detail);
  card.appendChild(button);
  carsContainer.appendChild(hr);
});
