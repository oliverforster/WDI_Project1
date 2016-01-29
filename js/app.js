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
});