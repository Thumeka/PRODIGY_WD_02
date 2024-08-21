let startTime, updatedTime, difference, tInterval, running = false;
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
    }
}

function pauseTimer() {
    if (running) {
        running = false;
        clearInterval(tInterval);
    }
}

function resetTimer() {
    running = false;
    clearInterval(tInterval);
    hours = minutes = seconds = milliseconds = 0;
    display.innerHTML = '00:00:00';
    lapList.innerHTML = '';
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    milliseconds = Math.floor((difference % 1000) / 10);
    seconds = Math.floor((difference / 1000) % 60);
    minutes = Math.floor((difference / (1000 * 60)) % 60);
    hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    display.innerHTML = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function addLap() {
    if (running) {
        const lapTime = display.innerHTML;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

