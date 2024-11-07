// @ts-nocheck
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");

const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTme = new Date("Jan 1 , 2025 00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  //   console.log(now);

  const gap = newYearTme - now;
  //   console.log(gap);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  // @ts-ignore
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(updateCountdown, 1000);
  console.log(h);
};

updateCountdown();
