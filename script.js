const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year')
const loading = document.getElementById('loading')

const examDate = new Date('November 22, 2020');

// const newYear = new Date(`November 22, ${currentYear} 00:00:00`).getTime(); 

// // Set background year
// year.innerText = 'Aligarh Muslim University';

// Update countdown timer
const updateCountdown = () => {

  const currentTime = new Date().getTime();
  const diff = examDate - currentTime;

  const d = Math.round(diff / 1000 / 60 / 60 / 24);
  const h = Math.round(diff / 1000 / 60 / 60) % 24;
  const m = Math.round(diff / 1000 / 60) % 60;
  const s = Math.round(diff / 1000) % 60;

  days.innerText = d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = m < 10 ? '0' + m : m;
  seconds.innerText = s < 10 ? '0' + s : s;
}

//Show spinner before countdown
setTimeout(() => {
  loading.remove()
  countdown.style.display = 'flex';  
}, 1000);

// Run counter every second
setInterval(updateCountdown, 1000)

