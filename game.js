var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];
var level = 0;
var started= false; // set it as false so it can run the if statement

$(document).keypress(function() {
if(!started){ // if false run the code in the brackets

// doesnt need an equal, so if the function hasn't started after a key run the code below i think ?

$("#level-title").text("Level "+level);
  nextSequence();
started=true; // ends the loop / function so it doesnt run again?
// started turns into true and becomes true to stop the function running more than once
}
  // change this
});



$(".btn").click(function() { // this is the main click , it uses both function to perform the sound and shadow

  var userChoseColour = $(this).attr("id");

  userClickedPattern.push(userChoseColour);
  animatePress(userChoseColour);
  playSound(userChoseColour); // inputs that goes to the functions
checkAnswer(userClickedPattern.length-1);// counts array and start from 0 ,1,2,3
// not 1234 that length does

  // uses the play sound function to
  //get the right color sound which is the "id color"


});


function startOver(){
level=0;
gamePattern=[];
started=false;

}

function checkAnswer(currentLevel){
 console.log(currentLevel);

if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){ // have to use[] to call the array positions
  console.log("success");
// basically if an array length is = to the other array length
  if(userClickedPattern.length===gamePattern.length){ // if statement inside an if statement
    setTimeout(function(){
      nextSequence();
    },1000);
  }

}
else{
  console.log("wrong");
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);

  $("#level-title").text("Game Over, Press Any Key to Restart");
  startOver();
}

}



function nextSequence() {
  userClickedPattern=[];

  level++;
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChoseColor = buttonColors[randomNumber]; // combines the color and random number into the new variable

  gamePattern.push(randomChoseColor);



  $("#" + randomChoseColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChoseColor);
   // work on the loops to solve the level increament
    $("#level-title").text("Level "+level);



  //checking which button is presed
}

function playSound(name) { // goes to the top function

  var audio = new Audio("sounds/" + name + ".mp3"); // new audio creates the new audio so it doesnt need to be a class
  // change this ^^^ to fit into specific color sounds
  audio.play();



}

function animatePress(currentColor) {
  // has to animate a back ground


  $("#" + currentColor).addClass("pressed"); // simpler way without using if else


  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}









//SOUND

//var blueAudio = $(".blue-sound")[0];
//var yellowAudio = $(".yellow-sound")[0];
//var greenAudio = $(".green-sound")[0];
//var wrongAudio = $(".wrong-sound")[0];

//$("#red, #green, #yellow, #blue").on("click", function() {

//  if ($(this).is("#red")) {
//  (redAudio).play();
//} else if ($(this).is("#green")) {
//  (greenAudio).play();
//  } else if ($(this).is("#blue")) {
//  (blueAudio).play();
//  } else if ($(this).is("#yellow")) {
//    (yellowAudio).play();
//  } else {
//(wrongAudio).play();
//  }

//});
