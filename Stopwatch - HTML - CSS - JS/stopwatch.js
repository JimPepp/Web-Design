
    //Variables for seconds and milliseconds
    var seconds = 00;
    var milliseconds = 00;

    //Variables for getting the text of the seconds and milliseconds
    var secondsText = document.getElementById("seconds");
    var millisecondsText = document.getElementById("milliseconds");

    //Variables to get the buttons
    var start = document.getElementById("StartWatch");
    var stop = document.getElementById("StopWatch");
    var reset = document.getElementById("ResetWatch");

    //The time counter
    var timeCounter;

    start.onclick = function(){
        timeCounter = setInterval(startTimer, 10);  //start the timer
    }

    stop.onclick = function(){
        clearInterval(timeCounter);
    }

    reset.onclick = function(){
        clearInterval(timeCounter);
        secondsText.innerHTML = "00";
        millisecondsText.innerHTML = "00";
        seconds = 0;
        milliseconds = 0;
    }

    function startTimer(){
        milliseconds++;

        //if we have les than 10 milliseconds we print 0 + the number
        if (milliseconds < 9)
            millisecondsText.innerHTML = "0" + milliseconds;
        
        //if we have more than 10 (or 10) milliseconds we just print them
        if (milliseconds >= 9)
            millisecondsText.innerHTML = milliseconds;

        //if we have reached 99 milliseconds
        if (milliseconds >99){
            seconds++;                              //we increase a second
            //we print the seconds if they are less than 10
            if (seconds > 9)
                secondsText.innerHTML = seconds;
            else
                secondsText.innerHTML = "0" + seconds;
            milliseconds = 0;                       //reset the milliseconds variable
            millisecondsText.innerHTML = "00";                //and the text

            //reset everything if we go over 59 seconds
            if (seconds > 59){
                seconds = 0;
                milliseconds = 0;
                secondsText.innerHTML = "0" + seconds;
                millisecondsText.innerHTML = milliseconds;
            }
        }
    }