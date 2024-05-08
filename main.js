document.addEventListener("DOMContentLoaded", function() {
    const timerDisplay = document.querySelector('.timer-display');
    const startButton = document.getElementById('start-timer');
    const pauseButton = document.getElementById('pause-timer');
    const resetButton = document.getElementById('reset-timer');

    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    function startTimer() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        elapsedTime = 0;
        updateTimer();
    }

    function updateTimer() {
        const elapsedTimeMs = Date.now() - startTime;
        const hours = Math.floor(elapsedTimeMs / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTimeMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTimeMs % (1000 * 60)) / 1000);
        const milliseconds = elapsedTimeMs % 1000;

        timerDisplay.textContent = `${pad(hours, 2)} : ${pad(minutes, 2)} : ${pad(seconds, 2)} : ${pad(milliseconds, 3)}`;
    }

    function pad(number, width) {
        return String(number).padStart(width, '0');
    }

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);
});
