$(function (){
  console.log("loaded");






  var clickCount =1
  var clickCount2 =1

  $(window).keyup(function(event) {
    console.log(event.which)

    if (clickCount % 2 === 0) {

      if (event.which === 90) {
        console.log("click");
        $('.box').animate({
          'marginTop' : "-=4px"  
        }, 1);
        clickCount +=1;;
        console.log(clickCount)
      }
    } else if (clickCount % 2 !== 0) {
      if (event.which === 88) {
        console.log("click");
        $('.box').animate({
          'marginTop' : "-=4px"
        }, 1);
        clickCount +=1; 
        console.log(clickCount)
      }
    }
  });

  $(window).keyup(function(event) {


    if (clickCount2 % 2 === 0) {

      if (event.which === 75) {
        console.log("click");
        $('.box2').animate({
          'marginTop' : "-=4px"  
        }, 1);
        clickCount2 +=1;;
      }
    } else if (clickCount2 % 2 !== 0) {
      if (event.which === 76) {
        console.log("click");
        $('.box2').animate({
          'marginTop' : "-=4px"
        }, 1);
        clickCount2 +=1; 
      }
    }
  });
});