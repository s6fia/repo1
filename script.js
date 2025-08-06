const targetDate = new Date("2025-10-17T23:59:59").getTime();

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  const interval = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "¡El tiempo se acabó!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  }, 1000);


  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const images = document.querySelectorAll('.imagen');

    images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const offset = rect.top * 0.2; // ajustá el factor para más o menos movimiento
      img.style.transform = `translateY(${offset}px)`;
    });
  });

function toggleCBU() {
    const contenido = document.getElementById('contenido-cbu');
    if (contenido.style.maxHeight) {
      contenido.style.maxHeight = null;
    } else {
      contenido.style.maxHeight = contenido.scrollHeight + "px";
    }
  }