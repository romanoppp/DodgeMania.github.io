var jeu = document.getElementById("game"),
    balle = document.querySelector("#ball"),
    largeurJeu= 700,
    hauteurJeu= 700,
    posX = 320,
    posY = 320,
    dirX = 0,
    dirY = 0,
    tailleballeH = 50,
    tailleballeL = 50,
    gamestart = 0,
    vitesse = 300,
    posXBalle = 0,
    posYBalle = 0,
    dirXBalle = 10,
    dirYBalle = 10,
    vitesseBalle = 100;
var score=0;
var scoresdiv= document.getElementById("score");
var highscore= document.getElementById("highscore");
var varhigh = 0;
var mechant = document.getElementById("mechant")


/* perso */

init();
function init(){
 jeu.style.width = largeurJeu+"px";
 jeu.style.height = hauteurJeu+"px";
 balle.style.left = posX +"px";
 balle.style.right = posY +"px";
 balle.style.height = tailleballeH;
 balle.style.width = tailleballeL,
 mechant.style.left = posXBalle +"px";
 mechant.style.right = posYBalle +"px";


 setInterval(
  function()
  {
   perso();
  }
  ,
  vitesse

 );
;}


document.addEventListener('keydown', function(perso) {
 console.log(posY);  
 if(event.keyCode == 38 && posY!= 0 && gamestart==1) {
  posY -= 15;
 }
 else if(event.keyCode == 40 && posY <= hauteurJeu-tailleballeH-15 && gamestart==1) {

  posY += 15;
 }

})


document.addEventListener('keydown', function(perso) {

 if(event.keyCode == 37 &&  posX != 0 && gamestart==1) {

  posX -= 15;
 }
 else if(event.keyCode == 39&& posX <=largeurJeu-tailleballeL-15 && gamestart==1) {
  posX += 15;
 }

})

function perso(){
 balle.style.left = posX+"px";
 balle.style.top = posY+"px";


};

/*DEMARAGE */ 
document.addEventListener(
 'keydown',
 function() {
  if(event.keyCode == 32) {
   gamestart=1;
   initGame();
  }
  else if(event.keyCode != 32) {

  }
 },
 false
);


/*  SCORE */ 

function initGame(){
 if(gamestart==1) {
  montimer=window.setInterval(scorefonc,25);
  // montimer2=window.setInterval(highscore,25);
 }
 else if(gamestart==0) {
  ;
 }
}



function scorefonc(){
 score +=1 ;
 scoresdiv.innerHTML="Votre Score :"+ (score);
 highscoreFunc();
}

function highscoreFunc(){
 if(varhigh<=score){
  varhigh=score;
  highscore.innerHTML="Votre High Score:"+ (varhigh);
 }
 else if(highscore>score){
  ;
 }
}

//desactiver les fleches pr le scroll
window.addEventListener("keydown", function(e) {
 // space and arrow keys
 if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
  e.preventDefault();
 }
}, false);




/************* Mechant */


function bougerBalle(){
 posXBalle = posXBalle + dirXBalle;
 posYBalle = posYBalle + dirYBalle;
 mechant.style.left = posX+"px";
 mechant.style.top = posY+"px";
 if(posXBalle==0 || posXBalle>=(largeurJeu-50) )
 {
  dirX=-dirX;
 }
 if(posYBalle==0 || posYBalle>=(hauteurJeu-50) ) 
 {
  dirY=-dirY;
 }
}

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

/*************collision*****************/
var posXBalle25 = posXBalle + 25px;
var posYBalle25 = posYBalle + 25px;
function collision(){
    if(posX1 == posXBalle || posY1 == posYBalle){
        function gamestart == 0;
    }else if(posX1 == posXBalle25  || posY1 == posYBalle25){
        function gamestart ==0;
}

