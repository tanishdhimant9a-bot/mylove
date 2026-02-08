const typingText = document.getElementById('typingText');
const continueBtn = document.getElementById('continueBtn');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
const bgMusic = document.getElementById('bgMusic');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const celebration = document.getElementById('celebration');
const heartsContainer = document.getElementById('heartsContainer');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const confettiCanvas = document.getElementById('confettiCanvas');

const text = "Every moment with you feels like a beautiful dream...";
let index = 0;
let musicPlaying = false;

function typeWriter() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}

setTimeout(typeWriter, 1000);

continueBtn.addEventListener('click', () => {
    document.getElementById('memories').scrollIntoView({ behavior: 'smooth' });
    if (!musicPlaying) {
        playMusic();
    }
});

function playMusic() {
    bgMusic.play().catch(e => console.log('Audio play failed:', e));
    musicPlaying = true;
    musicIcon.textContent = '🔊';
}

function pauseMusic() {
    bgMusic.pause();
    musicPlaying = false;
    musicIcon.textContent = '🔇';
}

musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

document.addEventListener('click', () => {
    if (!musicPlaying) {
        playMusic();
    }
}, { once: true });

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createFloatingHeart, 500);

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.getAttribute('data-caption');
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
    });
});

const lightboxClose = document.querySelector('.lightbox-close');
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

btnYes.addEventListener('click', () => {
    celebration.classList.remove('hidden');
    startConfetti();
    setTimeout(() => {
        alert('Thank you for making me the happiest! I love you! ❤️');
    }, 1000);
});

let noClickCount = 0;
btnNo.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - btnNo.offsetWidth - 50;
    const maxY = window.innerHeight - btnNo.offsetHeight - 50;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
    btnNo.style.transition = 'all 0.3s ease';

    noClickCount++;

    if (noClickCount === 3) {
        btnNo.textContent = 'Are you sure? 🥺';
    } else if (noClickCount === 5) {
        btnNo.textContent = 'Please? 💔';
    } else if (noClickCount === 7) {
        btnNo.textContent = 'Think again! 😢';
    }
});

btnNo.addEventListener('click', () => {
    alert('Come on! Give me another chance! Click YES! 🥺❤️');
});

function startConfetti() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const confetti = [];
    const confettiCount = 150;
    const colors = ['#ff1744', '#ff69b4', '#ffb6c1', '#ffc0cb', '#ff4081', '#f50057'];

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * confettiCount,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

        confetti.forEach((c, index) => {
            ctx.beginPath();
            ctx.lineWidth = c.r / 2;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + c.r, c.y);
            ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
            ctx.stroke();

            c.tiltAngle += c.tiltAngleIncremental;
            c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
            c.x += Math.sin(c.d);
            c.tilt = Math.sin(c.tiltAngle - index / 3) * 15;

            if (c.y > confettiCanvas.height) {
                confetti[index] = {
                    x: Math.random() * confettiCanvas.width,
                    y: -20,
                    r: c.r,
                    d: c.d,
                    color: c.color,
                    tilt: c.tilt,
                    tiltAngleIncremental: c.tiltAngleIncremental,
                    tiltAngle: c.tiltAngle
                };
            }
        });

        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}

window.addEventListener('resize', () => {
    if (confettiCanvas.width > 0) {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.reason-card').forEach(card => {
    observer.observe(card);
});
