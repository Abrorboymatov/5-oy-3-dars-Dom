let display = document.getElementById("display");
    let startBtn = document.getElementById("start");
    let stopBtn = document.getElementById("stop");
    let nullBtn = document.getElementById("null");

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let interval = null;

    startBtn.addEventListener('click', () => {
    if (interval) return;
    interval = setInterval(updateTimer, 1000);
});


stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});


nullBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
});


function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let s = seconds < 10 ? '0' + seconds : seconds;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let h = hours < 10 ? '0' + hours : hours;

    display.textContent = `${h}:${m}:${s}`;
}




