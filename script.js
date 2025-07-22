const deadline = new Date(2025, 7, 15);

function timer() {
  const now = new Date();
  const diff = deadline - now;

  if (diff <= 0) {
    clearInterval(intervalId);
    return;
  }

  const days = (Math.floor(diff / (1000 * 60 * 60 * 24))).toString().padStart(2, '0');
  const hours = (Math.floor((diff /(1000 * 60 * 60)) % 24)).toString().padStart(2, '0');
  const minutes = (Math.floor((diff / (1000 * 60)) % 60)).toString().padStart(2, '0');
  const seconds = (Math.floor((diff / 1000) % 60)).toString().padStart(2, '0');

  const container = document.querySelector('.timer-div');
  container.innerHTML =    `${days} : ${hours} : ${minutes} : ${seconds}`
}

timer();

const intervalId = setInterval(() => {
  timer()
}, 1000);