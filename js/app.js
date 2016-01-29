$(function (){
  console.log("loaded");

var boxLeft = $('.box').offset().left;
console.log(boxLeft);
var boxWidth = $('.box').outerWidth(true);
console.log(boxWidth);
var box1Pos = boxLeft + boxWidth;
console.log(box1Pos)


var finishLeft = $('.finish').offset().left;
var finishPos = finishLeft;
console.log(finishPos)

function win(box1Pos, finishPos){
  if(box1Pos > finishPos) return true; return false
}

var winner = win()
console.log(winner)





  var clickCount =1
  var clickCount2 =1

  
//red box
  $(window).keyup(function(event) {
    console.log(event.which)

    if (clickCount % 2 === 0) {

      if (event.which === 90) {
        $('.box').animate({
         'margin-left' : "+=4px"  
        }, 1);
        clickCount +=1;;
        win()
        console.log(winner);
      }
    } else if (clickCount % 2 !== 0) {
      if (event.which === 88) {
        $('.box').animate({
          'margin-left' : "+=4px"
        }, 1);
        clickCount +=1; 
        win()
        console.log(winner);
      }
    }
  });

//blue box
  $(window).keyup(function(event) {


    if (clickCount2 % 2 === 0) {

      if (event.which === 75) {
        console.log("click");
        $('.box2').animate({
          'margin-left' : "+=4px"  
        }, 1);
        clickCount2 +=1;;
      }
    } else if (clickCount2 % 2 !== 0) {
      if (event.which === 76) {
        console.log("click");
        $('.box2').animate({
          'margin-left' : "+=4px"
        }, 1);
        clickCount2 +=1; 
      }
    }
  });
});



