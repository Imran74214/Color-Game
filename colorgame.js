var numOfSquares =6;

var colors =[];

var pickedColor;
var square = document.querySelectorAll(".square");

var colorDisplay =document.getElementById("colorDisplay");

var message = document.querySelector("#message");

var h1 = document.querySelector("h1");

var newColors = document.querySelector("#newColors");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	reset();
	setUpModeButtons();
	setUpSquares();

}

function setUpModeButtons(){
	for(var i=0; i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    
this.textContent === "Easy"? numOfSquares= 3: numOfSquares= 6;
    
    reset();
})

}

}

function setUpSquares(){
	for(var i=0; i<square.length; i++){

	 //add click listeners to squares
	 square[i].addEventListener("click", function(){

	 	var clickedColor = this.style.backgroundColor;
	 	if(clickedColor === pickedColor){
	 		message.textContent = "Correct";
	 		changeColors(pickedColor);
	 		h1.style.backgroundColor = pickedColor;
	 		newColors.textContent ="Play Again?"

	 	}
	 		else {
	 			this.style.backgroundColor = "#232323";
	 			message.textContent = "Try Again";
	 		}
	 	
	 })
}


}


// 
 
function reset(){
	
	message.textContent = "";
	newColors.textContent ="New Colors";
    //backGround color back to the initial color
    h1.style.backgroundColor = "steelblue";
    //generate all new colors
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colors of RGB colorDisplay
	colorDisplay.textContent= pickedColor;
	//add initial color to the squares
	for(var i=0; i<square.length; i++){
		if(colors[i]){
		square[i].style.display = "block";	
		square[i].style.backgroundColor = colors[i];	
		}
		else{
			square[i].style.display = "none";
		}
	 
	}


}





newColors.addEventListener("click", function(){

reset();
})



function changeColors(color){
	//loop through all the color

	for(var i=0; i<square.length; i++){

		square[i].style.backgroundColor = color;
	}

	//change each color to match the given color
}

function pickColor(){

	//Math.random to select colors randomly and Math.floor to chop off fractions

	var random = Math.floor(Math.random()*colors.length);
	//randomly selecting indexes for colors array
	return colors[random];

}

function generateRandomColors(num){

//make an arrary
var arr=[];
//add num random colors to array

for(var i=0; i<num; i++){
	//get random color and push into arr
	arr.push(randomColor());
}
//return that array
return arr;

}

function randomColor(){
	//pick a "red" from 0-255
	var r= Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g= Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b= Math.floor(Math.random()*256);

	return "rgb(" + r +", "+ g+ ", "+ b+ ")";
}