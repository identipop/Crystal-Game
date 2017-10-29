var wins = 0;
var losses = 0;
var magicNumber = Math.floor(Math.random() * 101) + 19;
$("#magicNumber").text(magicNumber);



var crystal1 = Math.floor(Math.random() * 11) + 1;
var crystal2 = Math.floor(Math.random() * 11) + 1;
var crystal3 = Math.floor(Math.random() * 11) + 1;
var crystal4 = Math.floor(Math.random() * 11) + 1;


$("#wins").html(wins);
$("#losses").html(losses);

var counter = 0;
$("#score").text(counter);

function restartGame() {

magicNumber = Math.floor(Math.random() * 101) + 19;
$("#magicNumber").text(magicNumber);
crystal1 = Math.floor(Math.random() * 11) + 1;
crystal2 = Math.floor(Math.random() * 11) + 1;
crystal3 = Math.floor(Math.random() * 11) + 1;
crystal4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#score").text(counter);

}

function win() {

	alert("You win!");
	wins ++;
	$("#wins").text(wins);
	restartGame();
}

function lose() {

	alert("You lose!");
	losses ++;
	$("#losses").text(losses);
	restartGame();
}

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



