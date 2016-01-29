$(function (){
  console.log("loaded");
  var $box1 = $('.box');
  var $box2 = $('.box2');
              // red box
var box1Pos = 0 

              // blue box
var box2Pos = 0

              // finish line
var finishPos = $('.finish').offset().left;

console.log(finishPos)

              // win logic for box 1
function win(box1Pos, finishPos){
  console.log(box1Pos, box1Pos > finishPos);
  return box1Pos > finishPos;
}
var winner = win(box1Pos, finishPos)


              // win logic for box 2
function win2(box2Pos, finishPos){
  console.log(box2Pos, box2Pos > finishPos);
  return box2Pos > finishPos;
}
var winner2 = win(box2Pos, finishPos)





  var clickCount =1
  var clickCount2 =1

  
//red box
  $(window).keyup(function(event) {

    if (clickCount % 2 === 0) {

      if (event.which === 90) {
        $box1.css({ left: "+=40px" });
        clickCount +=1;
        box1Pos = $box1.offset().left + $box1.width();
        win(box1Pos, finishPos)
        
      }
    } else if (clickCount % 2 !== 0) {
      if (event.which === 88) {
        $box1.css({ left: "+=40px" });
        clickCount +=1; 
        box1Pos = $box1.offset().left + $box1.width();
        win(box1Pos, finishPos)
      }
    }
  });

//blue box
  $(window).keyup(function(event) {


    if (clickCount2 % 2 === 0) {

      if (event.which === 75) {
        $box2.animate({
          'margin-left' : "+=40px"  
        }, 1);
        clickCount2 +=1;; 
        box2Pos = $box2.offset().left + $box2.width();
        win2(box2Pos, finishPos)
      }
    } else if (clickCount2 % 2 !== 0) {
      if (event.which === 76) {
        $box2.animate({
          'margin-left' : "+=40px"
        }, 1);
        clickCount2 +=1; 
        box2Pos = $box2.offset().left + $box2.width();
        win2(box2Pos, finishPos)
      }
    }
  });
});



