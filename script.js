"use strict"

// Find the penguins JS Files


//Event listener for page load which loads the newGame() function

window.addEventListener("load", newGame);

//event listener for the play again button
document.getElementById("button").addEventListener("click", function(){
	window.location.reload();
});

//This function will generate a random number between 2 and 10 (remmeber the index, 1 is the title...2 is mound1)
//That number should represent the DIV the yeti will hide in
//That DIV will gain an ID of "yeti" and click event listener

function newGame() {
	var randNum = Math.floor(Math.random() * 9) + 2;
	document.getElementsByTagName("div")[randNum].setAttribute("id", "yeti");  //this choses a random number and adds the yeti's ID to that div with the random randNum
	document.getElementById("yeti").addEventListener("click", function(){
		window.alert("ROAAAAAAARRRR IM THE YETI!! YOU LOSE!!!!");
		document.getElementById("audio").play();
	});
}
































