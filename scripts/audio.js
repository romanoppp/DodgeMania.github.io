

function change()
        {
          var a = document.getElementById("speakeron").getAttribute("src");
          var sound = document.getElementById("musique") ;
         if (a=='images/speaker.png') {
               document.getElementById("speakeron").src='images/speakerno.png';  
           sound.pause();
           
         }
          
 
                  else {
          document.getElementById("speakeron").src='images/speaker.png';
                    sound.play();
                  }
 };