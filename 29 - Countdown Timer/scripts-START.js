let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
    clearInterval(countdown); // remove any existing asynchronous event

    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds); // display the initial timer state (since setInterval first runs after 1000ms)
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    const display = `${minutes}:${remainderSeconds < 10? '0':''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();

    endTime.textContent = `Be back at ${hour}:${minutes < 10? '0':''}${minutes}`;
}

buttons.forEach(button => button.addEventListener('click', startTimer));

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

document.customForm.addEventListener('submit', (e) => {
    console.log(this); // window object(use formal function to make this point to the form~)
    e.preventDefault(); // stop the page from refreshing
    const mins = e.target.minutes.value;
    timer(mins * 60);
    e.target.reset(); // clear the form
})