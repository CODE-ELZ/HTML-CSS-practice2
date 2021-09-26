
//Nav-Bar
function NavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myTopnav").style.width = "100%";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.top = "0%";
    document.getElementById("roll_back").style.display = "block";
    } else {
    document.getElementById("myTopnav").style.width = "80%";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.top = "2rem";
    document.getElementById("roll_back").style.display = "none";
    }
    }


    
    
    
    
    
    
var countNum = 1;
setInterval(function(){
    document.getElementById('radio'+countNum).checked = true;
    countNum++;
    if(countNum > 6){
        countNum = 1;
    }
},4500);
    
var sound = ["sound/lion.mp3","sound/glass.mp3"];


  function roar(){
    var tom1 = new Audio(sound[0]);
          tom1.play();
  }
  function roars(){
    // var tom1 = new Audio("sound/lion.mp3");
    //       tom1.play();
  }
  function glas(){
    var tom1 = new Audio(sound[1]);
          tom1.play();
  }
  function glass(){
    var tom1 = new Audio("sound/glas.mp3");
          tom1.play();
  }

  
// for(var i = 0; i < sound.length; i++){ 
//   function roar(){
//     var tom1 = new Audio(sound[i]);
//           tom1.play();
//   }
//   function roars(){
//     // var tom1 = new Audio("sound/lion.mp3");
//     //       tom1.play();
//   }


    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
