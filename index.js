const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let interval;

const createTimerAnimator = () => {
    return (seconds) => {
        clearInterval(interval)
        let hours = Math.floor(seconds / 3600)
        let min = Math.floor(seconds / 60) - (hours * 60)
        let sec = seconds % 60
        timerEl.innerText = `${hours} : ${min} : ${sec}`
        let counter = () => {
            seconds -= 1
            if(seconds === 0){
                clearInterval(interval)
            }
            hours = Math.floor(seconds / 3600)
            min = Math.floor(seconds / 60) - (hours * 60)
            sec = seconds % 60
            timerEl.innerText = `${hours} : ${min} : ${sec}`
        }
        interval = setInterval(counter, 1000)
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    let onlyNums = inputEl.value.match(/^[0-9]+$/) != null
    let nums = inputEl.value.split('')
    if (!onlyNums) {
        nums.pop()
        inputEl.value = nums.join('')
    }
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});