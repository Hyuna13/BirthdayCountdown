const input = document.getElementById("input");
const enter = document.getElementById("enter");
const hidden = document.getElementById("hide-div");

const timeLeft = document.getElementById("time-left");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; //milliseconds
let timerId;

function verify(){
  if (input.value === ''){
      alert("Put date first!")
      return
  }
  else{
      countDown()
  }
}

function countDown() {
  const birthday = new Date(`${input.value}`);
  const today = new Date();
  const timeSpan = birthday - today;

  if (timeSpan <= -day) {
    timeLeft.innerHTML = "Your birthday has already passed..";
    clearInterval(timerId);
    return;
  }
  if (timeSpan <= 0) {
    timeLeft.innerHTML = "!!!Happy Birthday!!!";
    clearInterval(timerId);
    return;
  }

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  timeLeft.innerHTML = `${days} days ${hours} hours ${minutes} min ${seconds} seconds`;

  timerId = setInterval(countDown, second);

  hidden.style.display = "none";
}
