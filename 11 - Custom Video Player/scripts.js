// Get the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build the functions

function togglePlay() {
    if (video.paused) video.play();
    else video.pause();
}

function updateButton() {
    const icon = this.paused? '►' : '❚ ❚'; // more readable than straight set toggle.textContent to '❚ ❚' or '►'
    toggle.textContent = icon; 
}

function skip() {
    // console.log(this.dataset); // skip: "25"
    video.currentTime += parseFloat(this.dataset.skip); // parse the string into a number
}

function handleRangeUpdate() {
    video[this.name] = this.value; // this.name - volume/playbackRate
}

function handleProgress() {
    const pct = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${pct}%`;
}

function scrub(e) {
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Hook up the event listeners
video.addEventListener('click', togglePlay); // 点击画面
// 切换播放暂停按钮
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay); // 点击播放暂停键

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)); // 拖动实时更新

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousedown', () => mousedown = true);
