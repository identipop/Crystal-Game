// Defining variables for wins, losses, and generating magic # (then writing the magic #)
var wins = 0;
var losses = 0;
var magicNumber = Math.floor(Math.random() * 101) + 19;
$("#magicNumber").text(magicNumber);


// Crystals - varying values 
var crystal1 = Math.floor(Math.random() * 11) + 1;
var crystal2 = Math.floor(Math.random() * 11) + 1;
var crystal3 = Math.floor(Math.random() * 11) + 1;
var crystal4 = Math.floor(Math.random() * 11) + 1;

// Write wins and losses 
$("#wins").html(wins);
$("#losses").html(losses);

// Variable counter defined and logged in score div
var counter = 0;
$("#score").text(counter);

// Function to restart game
function restartGame() {
// Make and log magic #
magicNumber = Math.floor(Math.random() * 101) + 19;
$("#magicNumber").text(magicNumber);
// Reset crystals to new values
crystal1 = Math.floor(Math.random() * 11) + 1;
crystal2 = Math.floor(Math.random() * 11) + 1;
crystal3 = Math.floor(Math.random() * 11) + 1;
crystal4 = Math.floor(Math.random() * 11) + 1;
// Set counter to 0 and log
counter = 0;
$("#score").text(counter);

}
// Win function
function win() {
// Alerts, adds another win to win counter, logs wins,  calls restart function
	alert("You win!");
	wins ++;
	$("#wins").text(wins);
	restartGame();
}
// Lose function
function lose() {
// Alerts, adds another loss to loss counter, logs loss, calls restart function
	alert("You lose!");
	losses ++;
	$("#losses").text(losses);
	restartGame();
}

// Crystals Functions- crystal value + current score = new score 
// If/then statements on what constitutes a win/loss
$('#crystal1').on ('click', function(){
    counter = counter + crystal1;
    
    $('#score').text(counter); 
          
        if (counter == magicNumber){
          win();
        }
        else if (counter > magicNumber){
          lose();
        }   
  });  

$('#crystal2').on ('click', function(){
    counter = counter + crystal2;
    
    $('#score').text(counter); 
         
        if (counter == magicNumber){
          win();
        }
        else if (counter > magicNumber){
          lose();
        }   
  });  

$('#crystal3').on ('click', function(){
    counter = counter + crystal3;
    
    $('#score').text(counter); 
          
        if (counter == magicNumber){
          win();
        }
        else if (counter > magicNumber){
          lose();
        }   
  });  

$('#crystal4').on ('click', function(){
    counter = counter + crystal4;
    
    $('#score').text(counter); 
         
        if (counter == magicNumber){
          win();
        }
        else if (counter > magicNumber){
          lose();
        }   
  });  



