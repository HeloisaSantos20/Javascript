const hours = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const btnStart = document.getElementById('btn');
const btnReset = document.getElementById('btn-reset');
const display = document.getElementById('display');
let isTimerRunning = false;
let interval;

btnStart.addEventListener('click', () => {
  // verifica se o timer está acionado, protege contra duplo clique
  if (!isTimerRunning) {
    let duration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + parseInt(seconds.value);
    timer(duration, display);
    isTimerRunning = true;
  }
})


const timer = (duration, display) => {
  let timer = duration;
  let hours, minutes, seconds;

  let interval = setInterval(() => {
    hours = Math.floor((timer / 60) / 60);
    minutes = Math.floor(timer / 60 - (hours * 60));
    seconds = Math.floor(timer % 60);

    // console.log(timer);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.innerHTML = `${hours}:${minutes}:${seconds}`;

    timer -= 1;

    if(timer < 0){
      display.innerHTML = 'FIM';
      clearInterval(interval);
      isTimerRunning = false;
    }
  }, 1000);
}