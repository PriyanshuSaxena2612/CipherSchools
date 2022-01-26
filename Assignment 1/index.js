const timer = document.getElementById("timer");
let startTimer = false;
var increment;
let h = 0;
let m = 0;
let s = 0;
reset = () => {
  clearInterval(increment);
  increment = false;
  h = 0;
  m = 0;
  s = 0;
  timer.textContent =
    "0" + h + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
};

start = () => {
  if (!increment) {
    increment = setInterval(run, 1000);
  }
};
run = () => {
  timer.textContent =
    "0" + h + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  s++;
  if (s == 60) {
    s = 0;
    m += 1;
  }
  if (m == 60) {
    m = 0;
    h += 1;
  }
};
stop = () => {
  clearInterval(increment);
  increment = false;
};
