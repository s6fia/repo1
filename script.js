// ⏳ Cuenta regresiva
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

// 🎵 Control de música
const audio = document.getElementById("musica");
const button = document.getElementById("playPauseButton");
const icon = document.getElementById("playPauseIcon");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.src = "img/pausa.png";
    icon.alt = "Pause";
  } else {
    audio.pause();
    icon.src = "img/jugar.png";
    icon.alt = "Play";
  }
});

// 🎁 Mostrar/Ocultar CBU
function toggleCBU() {
  const contenido = document.getElementById('contenido-cbu');
  if (contenido.style.maxHeight) {
    contenido.style.maxHeight = null;
  } else {
    contenido.style.maxHeight = contenido.scrollHeight + "px";
  }
}

// 🖼️ Parallax scroll para imágenes
window.addEventListener('scroll', () => {
  const imagenes1 = document.querySelectorAll('.imagen');
  const imagenes2 = document.querySelectorAll('.imagen2');

  [...imagenes1, ...imagenes2].forEach((img) => {
    const rect = img.getBoundingClientRect();
    const offset = rect.top * 0.2;
    img.style.transform = `translateY(${offset}px)`;
  });
});

// 🎬 Pantalla de bienvenida
document.addEventListener('DOMContentLoaded', function () {
  const bienvenida = document.getElementById('pantalla-bienvenida');
  const botonIngresar = document.getElementById('boton-ingresar');

  botonIngresar.addEventListener('click', function () {
    // Animación de salida
    bienvenida.classList.add('ocultar');

    // Esperar animación (0.8s) y luego ocultar
    setTimeout(() => {
      bienvenida.style.display = 'none';
      audio.play().catch(e => {
        console.log("El navegador bloqueó el autoplay hasta una interacción.");
      });
    }, 800);
  });

  // Reproducción automática con interacción
  function iniciarAudio() {
    audio.play().catch(() => {});
    document.removeEventListener('click', iniciarAudio);
    document.removeEventListener('touchstart', iniciarAudio);
  }

  document.addEventListener('click', iniciarAudio);
  document.addEventListener('touchstart', iniciarAudio);
});

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto).then(() => {
    const mensaje = document.getElementById('mensaje-copiado');

    mensaje.style.display = 'block';
    mensaje.style.animation = 'none';
    void mensaje.offsetWidth;
    mensaje.style.animation = 'fadeInOut 2s ease forwards';

    setTimeout(() => {
      mensaje.style.display = 'none';
    }, 2000);
  }).catch(err => {
    console.error('Error al copiar: ', err);
  });
}
