$(function (){
  console.log("loaded");


  $(window).keyup(function(event) {
  
    if (event.which === 90) {
      console.log("click");
      $('.box').animate({
        'marginTop' : "-=4px" 
      }, 1)
    }

    });

  $(window).keyup(function(event) {
  
    if (event.which === 77) {
      console.log("click2");
      $('.box2').animate({
        'marginTop' : "-=4px" 
      }, 1)
    }

    });

});