const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year')
const loading = document.getElementById('loading')

const examDate = new Date('November 22 2020 10:00:00');

const updateCountdown = () => {
  const currentTime = new Date();
  const diff = examDate - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  

  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
}

//Show spinner before countdown
setTimeout(() => {
  loading.remove()
  countdown.style.display = 'flex';  
}, 1000);

// Run counter every second
setInterval(updateCountdown, 1000)