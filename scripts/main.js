//window.onload = function () { // no obligatory

const tensHTML = document.getElementById('tens');
const secondsHTML = document.getElementById('seconds');

let tens = 00;
let seconds = 00;

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
    tens = 00;
    seconds = 00;

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

    if(tens == 100){
        tens = 00;
        seconds ++;

        if(seconds < 10){
            secondsHTML.textContent = "0" + seconds;
        }else{
            secondsHTML.textContent = seconds;
        }
    }

}

//}