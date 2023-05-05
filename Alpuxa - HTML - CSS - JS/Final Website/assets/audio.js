
//Get elements with sounds

//var link = document.getElementById("linkhover");//Get all hover links to play sound

//BG on off
function aud_play_pause() {
	
	var bgsnd = document.getElementById("bgaudio");	

	if (bgsnd.paused) {

		bgsnd.play();

	} else {

	bgsnd.pause();

	}

}	
	
//On link hover
function hoverSound() {
	//get sound
	var haud = document.getElementById("hsnd");
	//play sound
	haud.play();
}

function stopHover(){
	//get sound
	var haud = document.getElementById("hsnd");
	//stop sound
	haud.pause();
	haud.currentTime = 0;
}