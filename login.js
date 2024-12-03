// Fungsi untuk latar belakang bintang bergerak (Login Page)
function initStarBackground() {
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];

    function createStars() {
        stars = [];
        for (let i = 0; i < 100; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.5 + 0.3
            });
        }
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
            
            star.x -= star.speed;
            if (star.x < 0) star.x = canvas.width;
        });

        requestAnimationFrame(animateStars);
    }

    createStars();
    animateStars();
}

// Fungsi untuk latar belakang planet bergerak (Halaman Utama)
function initPlanetBackground() {
    const canvas = document.getElementById('spaceCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let planets = [];

    function createPlanet() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 40 + 10,  // Ukuran planet antara 10 hingga 50
            speed: Math.random() * 0.5 + 0.2, // Kecepatan planet bergerak
            color: `hsl(${Math.random() * 360}, 100%, 70%)`, // Warna planet random
            angle: Math.random() * 2 * Math.PI, // Sudut awal pergerakan planet
        };
    }

    // Membuat beberapa planet
    for (let i = 0; i < 5; i++) {
        planets.push(createPlanet());
    }

    // Animasi pergerakan planet
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Membersihkan canvas

        planets.forEach(planet => {
            ctx.beginPath();
            ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
            ctx.fillStyle = planet.color;
            ctx.fill();

            // Gerakan planet
            planet.x += Math.cos(planet.angle) * planet.speed;
            planet.y += Math.sin(planet.angle) * planet.speed;

            // Membuat planet berputar di sekeliling layar
            planet.angle += 0.01;

            // Membuat planet kembali ke sisi lain jika keluar layar
            if (planet.x > canvas.width) planet.x = 0;
            if (planet.x < 0) planet.x = canvas.width;
            if (planet.y > canvas.height) planet.y = 0;
            if (planet.y < 0) planet.y = canvas.height;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Cek apakah halaman ini adalah halaman login atau halaman lainnya
const bodyId = document.body.id;

if (bodyId === 'login-page') {
    initStarBackground(); // Menjalankan animasi bintang di halaman login
} else if (bodyId === 'home-page') {
    initPlanetBackground(); // Menjalankan animasi planet di halaman utama
}

// Data login sementara (contoh: email dan password)
const validEmail = 'anonimlogin@gmail.com';
const validPassword = 'user2024';

// Menangani form login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Mendapatkan input email dan password
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Memverifikasi email dan password
    if (email === validEmail && password === validPassword) {
        alert('Login berhasil!');
        // Redirect ke halaman lain (misal: dashboard)
        window.location.href = 'index.html';
    } else {
        // Menampilkan pesan error jika login gagal
        document.getElementById('error-message').style.display = 'block';
    }
});

// Menyesuaikan ukuran canvas saat jendela diubah ukurannya
window.addEventListener('resize', () => {
    const canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
// Menangani tombol hamburger untuk menampilkan atau menyembunyikan menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

// Menambahkan event listener untuk tombol hamburger
menuToggle.addEventListener('click', function() {
    // Toggle class "show" untuk menampilkan/menyembunyikan menu
    menu.classList.toggle('show');
});
