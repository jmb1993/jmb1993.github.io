

 //start the game
 $(document).ready(function () {

// the game object: sets the names, runs the gameplay, checks for winner.
 var game = {
  active: true,

   play: function(){
      alert("game has started!");

   $("div").on("click", function(){
     var currentPlayer = prompt("enter 1 or 2");
     if( currentPlayer == "1" && $(this).attr("id") == null){
       $(this).attr("id", "player1");

     }
       else if( currentPlayer == "2" && $(this).attr("id") == null) {
             $(this).attr("id", "player2");
   }
    else{ alert("ERROR: pick a correct number and an empty space!");
              }
   });
 },
 // checks for win after every move
 // currently in the process of consolidating this data into a more manageable format
   checkForWin: function(){
     $("div").on("click", function(){

       if($("div.1").attr("id") == "player1" && $("div.2").attr("id") == "player1" && $("div.3").attr("id") == "player1"  && $("div.4").attr("id") == "player1" ||
           $("div.3").attr("id") == "player1" && $("div.4").attr("id") == "player1" && $("div.5").attr("id") == "player1" && $("div.6").attr("id") == "player1"||
           $("div.1").attr("id") == "player1" && $("div.8").attr("id") == "player1" && $("div.15").attr("id") == "player1" && $("div.22").attr("id") == "player1"||
            $("div.6").attr("id") == "player1" && $("div.12").attr("id") == "player1" && $("div.18").attr("id") == "player1" && $("div.24").attr("id") == "player1" ||
             $("div.24").attr("id") == "player1" && $("div.30").attr("id") == "player1" && $("div.36").attr("id") == "player1" && $("div.42").attr("id") == "player1" ||
             $("div.12").attr("id") == "player1" && $("div.11").attr("id") == "player1" && $("div.10").attr("id") == "player1"  && $("div.9").attr("id") == "player1" ||
             $("div.7").attr("id") == "player1" && $("div.8").attr("id") == "player1" && $("div.9").attr("id") == "player1"  && $("div.10").attr("id") == "player1" ||
             $("div.15").attr("id") == "player1" && $("div.16").attr("id") == "player1" && $("div.17").attr("id") == "player1"  && $("div.18").attr("id") == "player1" ||
           $("div.21").attr("id") == "player1" && $("div.22").attr("id") == "player1" && $("div.23").attr("id") == "player1"  && $("div.24").attr("id") == "player1" ||
             $("div.5").attr("id") == "player1" && $("div.11").attr("id") == "player1" && $("div.17").attr("id") == "player1"  && $("div.23").attr("id") == "player1" ||
             $("div.19").attr("id") == "player1" && $("div.14").attr("id") == "player1" && $("div.9").attr("id") == "player1"  && $("div.4").attr("id") == "player1" ||
             $("div.5").attr("id") == "player1" && $("div.10").attr("id") == "player1" && $("div.15").attr("id") == "player1"  && $("div.20").attr("id") == "player1" ||
             $("div.10").attr("id") == "player1" && $("div.15").attr("id") == "player1" && $("div.20").attr("id") == "player1"  && $("div.25").attr("id") == "player1" ||
             $("div.40").attr("id") == "player1" && $("div.33").attr("id") == "player1" && $("div.26").attr("id") == "player1"  && $("div.19").attr("id") == "player1" ||
             $("div.40").attr("id") == "player1" && $("div.34").attr("id") == "player1" && $("div.28").attr("id") == "player1"  && $("div.22").attr("id") == "player1" ||
             $("div.41").attr("id") == "player1" && $("div.34").attr("id") == "player1" && $("div.27").attr("id") == "player1"  && $("div.20").attr("id") == "player1" ||
             $("div.39").attr("id") == "player1" && $("div.34").attr("id") == "player1" && $("div.29").attr("id") == "player1"  && $("div.24").attr("id") == "player1" ||
             $("div.18").attr("id") == "player1" && $("div.23").attr("id") == "player1" && $("div.28").attr("id") == "player1"  && $("div.33").attr("id") == "player1" ||
             $("div.38").attr("id") == "player1" && $("div.33").attr("id") == "player1" && $("div.28").attr("id") == "player1"  && $("div.23").attr("id") == "player1"



           )
   {

alert($("h1.p1").text() + " "  +"wins")
$(this).click(function(event){
  event.stopPropagation();
});
}
// I am not sure how to turn off the click events after the game is over. I instead have had to rely on the RESET button, which refreshes the page.
  else if($("div.1").attr("id")  == "player2" && $("div.2").attr("id") == "player2" &&  $("div.3").attr("id") == "player2" && $("div.4").attr("id") == "player2" ||
  $("div.3").attr("id") == "player2" && $("div.4").attr("id") == "player2" && $("div.5").attr("id") == "player2" && $("div.6").attr("id") == "player2"||
  $("div.1").attr("id") == "player2" && $("div.8").attr("id") == "player2" && $("div.15").attr("id") == "player2" && $("div.22").attr("id") == "player2"||
   $("div.6").attr("id") == "player2" && $("div.12").attr("id") == "player2" && $("div.18").attr("id") == "player2" && $("div.24").attr("id") == "player2" ||
    $("div.24").attr("id") == "player2" && $("div.30").attr("id") == "player2" && $("div.36").attr("id") == "player2" && $("div.42").attr("id") == "player2" ||
    $("div.12").attr("id") == "player2" && $("div.11").attr("id") == "player2" && $("div.10").attr("id") == "player2"  && $("div.9").attr("id") == "player2" ||
    $("div.7").attr("id") == "player2" && $("div.8").attr("id") == "player2" && $("div.9").attr("id") == "player2"  && $("div.10").attr("id") == "player2" ||
    $("div.15").attr("id") == "player2" && $("div.16").attr("id") == "player2" && $("div.17").attr("id") == "player2"  && $("div.18").attr("id") == "player2" ||
    $("div.21").attr("id") == "player2" && $("div.22").attr("id") == "player2" && $("div.23").attr("id") == "player2"  && $("div.24").attr("id") == "player2" ||
    $("div.5").attr("id") == "player2" && $("div.11").attr("id") == "player2" && $("div.17").attr("id") == "player2"  && $("div.23").attr("id") == "player2" ||
    $("div.19").attr("id") == "player2" && $("div.14").attr("id") == "player2" && $("div.9").attr("id") == "player2"  && $("div.4").attr("id") == "player2" ||
    $("div.5").attr("id") == "player2" && $("div.10").attr("id") == "player2" && $("div.15").attr("id") == "player2"  && $("div.20").attr("id") == "player2" ||
 $("div.10").attr("id") == "player2" && $("div.15").attr("id") == "player2" && $("div.20").attr("id") == "player2"  && $("div.25").attr("id") == "player2" ||
    $("div.40").attr("id") == "player2" && $("div.33").attr("id") == "player2" && $("div.26").attr("id") == "player2"  && $("div.19").attr("id") == "player2" ||
    $("div.40").attr("id") == "player2" && $("div.34").attr("id") == "player2" && $("div.28").attr("id") == "player2"  && $("div.22").attr("id") == "player2" ||
    $("div.41").attr("id") == "player2" && $("div.34").attr("id") == "player2" && $("div.27").attr("id") == "player2"  && $("div.20").attr("id") == "player2" ||
    $("div.39").attr("id") == "player2" && $("div.34").attr("id") == "player2" && $("div.29").attr("id") == "player2"  && $("div.24").attr("id") == "player2" ||
    $("div.18").attr("id") == "player2" && $("div.23").attr("id") == "player2" && $("div.28").attr("id") == "player2"  && $("div.33").attr("id") == "player2" ||
    $("div.38").attr("id") == "player2" && $("div.33").attr("id") == "player2" && $("div.28").attr("id") == "player2"  && $("div.23").attr("id") == "player2"


  )
    { alert($("h1.p2").text() + " " + "wins!");
     $(this).click(function(event){
       event.stopPropagation();
     });
}
});

},
setNames:  function(){
  var p1 = prompt("Enter player1 name");
  var p2 = prompt("Enter player2 name");
  return $("h1.p1").text(p1), $("h1.p2").text(p2);
}
}
 var reset = function(){
  $("button").on("click", function(){
  window.location.reload();
});
}
game.setNames()
game.play()
game.checkForWin()
reset()
 });


// I couldn't figure out to get the moves to "slide" down if there was an empty space bellow them.
//I was unsuccessful at using the slide function and the animate function.



// win conditions = 4 in a row, vertically horizontally or diagonally

//continues until game ends
