/*MECHANT*/
var jeu = document.querySelector("#game"),
    mechant = document.querySelector("#mechant"), //car en query on metles selecteur css //
    posX1 = 4,
    posY1 = 4,
    dirX1 = 20,
    dirY1 = 10,
    vitesse = 40;
var orientationX = 0.3; // Valeur de déplacement (0.3 "px" par défaut)
var orientationY = 0.3; // Valeur de déplacement (0.3 "px" par défaut)
var timing = 1000/150; // x images par seconde ("150" par défaut ici)

init();

function init() {
 jeu.style.width = largeurJeu + "px";
 jeu.style.height = hauteurJeu + "px";
 mechant.style.left = posX1 + "px";
 mechant.style.right = posY1 + "px";


 setInterval(
  function () {
   bougerBalle1();


  },
  vitesse
 );
}

function bougerBalle1() {
 if(gamestart == 1){
  posX1 = posX1 + dirX1;
  posY1 = posY1 + dirY1;
  mechant.style.left = posX1 + "px";
  mechant.style.top = posY1 + "px";

  if (posX1 >= (largeurJeu - mechant.offsetWidth) || posX1 <= 0) {
   dirX1 = -dirX1;
  }
  if (posY1 >= (hauteurJeu - mechant.offsetHeight) || posY1 <= 0) {
   dirY1 = -dirY1;
  }
 }
}
