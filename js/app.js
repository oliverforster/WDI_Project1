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



              // overall win logic
var overallWinner = 0

function overallWin (box1Pos, box2Pos){
  console.log("overallWin", box1Pos, box2Pos);
  var finishPos = $('.finish').offset().left;
  if (box1Pos > finishPos) {
    console.log("P1 wins");
    $(".resetP1").show(2000);
    return overallWinner = "Player 1 wins";
    

  } else if (box2Pos > finishPos) {
    console.log("P1 wins");
    $(".resetP2").show(2000);
    return overallWinner = "player 2 wins"
  } else {
    console.log("No winner");
    // return false;

  }
}

  var clickCount =1
  var clickCount2 =1

  $(".resetP1").hide();
  $(".resetP2").hide();

  
//red box
  $(window).keyup(function(event) {

    if (overallWinner === 0){

     if (clickCount % 2 === 0) {

       if (event.which === 90) {
         $box1.css({ left: "+=40px" });
         clickCount +=1;
         box1Pos = $box1.offset().left + $box1.width();
         $box1.toggleClass("boxOther")
        // win(box1Pos, finishPos);
         overallWin(box1Pos, box2Pos);
         
       }
     } else if (clickCount % 2 !== 0) {
       if (event.which === 88) {
         $box1.css({ left: "+=40px" });
         clickCount +=1; 
         box1Pos = $box1.offset().left + $box1.width();
         $box1.toggleClass("boxOther")
         overallWin(box1Pos, box2Pos);
       }
     }
    }
  });

//blue box
  $(window).keyup(function(event) {

    if (overallWinner === 0){
     if (clickCount2 % 2 === 0) {
  
       if (event.which === 75) {
         $box2.css({ left: "+=40px" });
         clickCount2 +=1;
         box2Pos = $box2.offset().left + $box2.width();
         $box2.toggleClass("box2Other")
         overallWin(box1Pos, box2Pos);
       }
     } else if (clickCount2 % 2 !== 0) {
       if (event.which === 76) {
         $box2.css({ left: "+=40px" });
         clickCount2 +=1;
         $box2.toggleClass("box2Other") 
         box2Pos = $box2.offset().left + $box2.width();
         overallWin(box1Pos, box2Pos);
       }
     }
    }
  });

$(".reset").click(function() {
  $box1.css({left: "0px"});
  $box2.css({left: "0px"});
  box1Pos = 0;
  box2Pos = 0;
  overallWinner = 0;
  $(".reset").hide();
});

});


