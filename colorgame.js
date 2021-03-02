//Math.random selects any random number from given limit
// Math.floor removes everything after the decimal

 var numSquares = 6;  
 var colors = generateRandomColors(numSquares);    // to generate color for every box 
 
// to make changes in squares 

var squares = document.querySelectorAll(".square");    
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
// MESSAGE FOR THE USER IF USER SELECTS WRONG 

var messageDisplay = document.querySelector("#message");

// for heading to turn the same color
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// easy and hard modes
var modeButtons = document.querySelectorAll(".mode");

init();    //everything that needs to run when the page loads //

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}
function setupModeButtons(){
        for(var i = 0; i < modeButtons.length; i++) {
	            modeButtons[i].addEventListener("click", function() {
		                modeButtons[0].classList.remove("selected");
		                modeButtons[1].classList.remove("selected");
		                this.classList.add("selected");	
		                this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
		                reset();
            	});
		}
	}
	function setupSquares(){
		for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
			squares[i].addEventListener("click", function(){
				//grab color of clicked square
				var clickedColor = this.style.background;
				//compare color to pickedColor
				if(clickedColor === pickedColor){
					messageDisplay.textContent = "Correct!";
					resetButton.textContent = "Play Again?"
					changeColors(clickedColor);
					h1.style.background = clickedColor;
				} else {
					this.style.background = "#232323";
					messageDisplay.textContent = "Try Again"
				}
			});
		}
	}
		

function reset() {	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";

	 //after clicking on btn to display message//
	 messageDisplay.textContent = ""; 

	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
});

 // to select color by Id

colorDisplay.textContent = pickedColor;  

 // to update color
 
for(var i = 0; i < squares.length; i++){
	
	// to add initial color to square

	squares[i].style.background = colors[i]; 

	//add click listeners to squares

	squares[i].addEventListener("click", function() {
		//grab color of clicked square 

		var clickedColor = this.style.background;
		// compare color to pickedColor

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			//to change picked and clicked color
			resetButton.textContent = "Play Again?";

			changeColors(clickedColor);
			h1.style.background = clickedColor;
    } else {
			//ELSE FADE THE COLOR TILE

			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
			}
	});
}

function changeColors(color){
  // loop through all the squares 

  for(var i = 0; i < squares.length; i++){
  //change each color to match given
  squares[i].style.background = color;
  }
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


  // to generate random colors
function generateRandomColors(num) {
// make an array 
var arr = [];
//add num random color to array
for(var i = 0; i < num; i++) {
	//get random color and push into
	arr.push(randomColor());
}
//Return that array 
return arr;
}


function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
