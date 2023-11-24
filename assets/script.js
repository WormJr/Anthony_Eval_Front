
var images = [
    "assets/slideshow/background1.jpg",
    "assets/slideshow/background2.jpg",
    "assets/slideshow/background3.jpg"
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