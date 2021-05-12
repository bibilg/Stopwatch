//window.onload = function () { // no obligatory

const tensHTML = document.getElementById('tens');
const secondsHTML = document.getElementById('seconds');

let tens = 0;
let seconds = 0;

const buttonStart = document.getElementById('button__start');
const buttonStop = document.getElementById('button__stop');
const buttonReset = document.getElementById('button__reset');

var Interval;

buttonStart.onclick = function() {

    clearInterval(Interval);
    Interval = setInterval(runTimer,10);
}

buttonStop.onclick = function() {
    clearInterval(Interval);
}

buttonReset.onclick = function() {

    clearInterval(Interval);
    tens = 0;
    seconds = 0;

    // TODO : MAKE this in a fonction ( call many times )
    tensHTML.textContent = "00";
    secondsHTML.textContent = "00";
}

function runTimer() {

    tens++;

    if(tens < 10){
        tensHTML.textContent = "0" + tens;
    }else{
        tensHTML.textContent = tens;
    }

    if(tens == 99){
        tens = 0;
        seconds ++;

        if(seconds < 10){
            secondsHTML.textContent = "0" + seconds;
        }else{
            secondsHTML.textContent = seconds;
        }
    }

}

//}