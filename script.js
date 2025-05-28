// Elemen penting
const openBtn = document.getElementById('openInvitation');
const invitationSection = document.getElementById('invitation');
const mainContent = document.getElementById('mainContent');
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('musicToggle');

// Fungsi buka undangan dengan transisi halus
openBtn.addEventListener('click', () => {
  invitationSection.classList.add('fade-out');
  setTimeout(() => {
    invitationSection.classList.add('hidden'); // Menyembunyikan undangan setelah transisi
    mainContent.classList.remove('hidden');
    mainContent.classList.add('visible');
    mainContent.focus();
    music.play(); // Memulai musik saat undangan dibuka
    musicToggle.hidden = false; // Menampilkan tombol play/pause
    musicToggle.title = 'Pause Musik';
    musicToggle.textContent = '⏸️';
  }, 800); // Waktu yang sesuai dengan durasi transisi fade-out (0.8 detik)
});

// Toggle musik
musicToggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicToggle.title = 'Pause Musik';
    musicToggle.textContent = '⏸️';
    musicToggle.setAttribute('aria-pressed', 'true');
  } else {
    music.pause();
    musicToggle.title = 'Putar Musik';
    musicToggle.textContent = '▶️';
    musicToggle.setAttribute('aria-pressed', 'false');
  }
});

// Hitung mundur
function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    clearInterval(countdownInterval);
    document.getElementById('timer').textContent = 'Selamat! Hari Pernikahan Telah Tiba 🎉';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP form handling
rsvpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = rsvpForm.name.value.trim();
  const attendance = rsvpForm.attendance.value;
  const guests = rsvpForm.guests.value;

  if (name.length < 2) {
    alert('Nama minimal 2 karakter.');
    return;
  }
  if (!attendance) {
    alert('Mohon pilih konfirmasi kehadiran.');
    return;
  }
  if (!guests) {
    alert('Mohon pilih jumlah tamu.');
    return;
  }

  rsvpMessage.textContent = `Terima kasih, ${name}, atas konfirmasi Anda!`;
  rsvpForm.reset();
});

// Fungsi buat petal bunga
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  // Posisi horizontal acak
  petal.style.left = Math.random() * window.innerWidth + 'px';
  petal.style.top = '-30px';

  // Durasi animasi acak
  const duration = 6000 + Math.random() * 4000;
  petal.style.animationDuration = duration + 'ms';

  // Rotasi acak
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;

  petalContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration);
}

// Fungsi buat konfeti
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti-piece');

  // Warna random konfeti
  const colors = ['#d68b8b', '#b34a30', '#f0a38e', '#6d302b', '#b36452'];
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Posisi horizontal acak
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.top = '-15px';

  // Durasi animasi acak
  const duration = 3000 + Math.random() * 2000;
  confetti.style.animationDuration = duration + 'ms';

  // Ukuran acak konfeti
  const size = 7 + Math.random() * 5;
  confetti.style.width = size + 'px';
  confetti.style.height = size + 'px';

  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, duration);
}

// Loop animasi petal & confetti
setInterval(createPetal, 700);
setInterval(createConfetti, 400);
