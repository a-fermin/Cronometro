let timer;
let hours = 0, minutes = 30, seconds = 0;
let totalSeconds = hours * 3600 + minutes * 60 + seconds;
let interval;

function setTimer() {
    hours = parseInt(document.getElementById('hours').value) || 0;
    minutes = parseInt(document.getElementById('minutes').value) || 0;
    seconds = parseInt(document.getElementById('seconds').value) || 0;
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    displayTime(totalSeconds);
}

function startTimer() {
    clearInterval(interval);
    interval = setInterval(function() {
        totalSeconds--;
        if (totalSeconds <= 0) {
            clearInterval(interval);
            alert("Time's up!");
        }
        displayTime(totalSeconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function displayTime(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = Math.floor(totalSeconds % 60);

    document.getElementById('timer').innerText = 
        `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Initialize display with default value
displayTime(totalSeconds);
