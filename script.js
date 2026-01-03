const audio = document.getElementById('bgMusic');
const unlockBtn = document.getElementById('unlock');   // ← ADD THIS LINE

// Start muted & playing immediately
audio.autoplay = true;
audio.muted    = true;
audio.volume   = 0.5;
audio.play().catch(()=>{});

// One click → unmute and remove the cover
unlockBtn.addEventListener('click', () => {
    audio.muted = false;
    unlockBtn.remove();
}, {once:true});

/* ===== rest of your existing code ===== */
// Background Music Control
let isPlaying = true;
const audio = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicBtn.innerHTML = '🎵 Play Music';
        musicBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
    } else {
        audio.play().catch(e => console.log('Audio play failed:', e));
        musicBtn.innerHTML = '🔊 Pause Music';
        musicBtn.style.background = 'linear-gradient(45deg, #e74c3c, #f39c12)';
    }
    isPlaying = !isPlaying;
}

// Add floating particles effect
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '0';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.boxShadow = `0 0 10px hsl(${Math.random() * 360}, 70%, 60%)`;
    
    document.body.appendChild(particle);
    
    // Animate particle
    const duration = Math.random() * 3000 + 2000;
    const horizontalMovement = (Math.random() - 0.5) * 200;
    
    particle.animate([
        {transform: 'translateY(0) translateX(0) scale(1)', opacity: 1},
        {transform: `translateY(-${window.innerHeight + 100}px) translateX(${horizontalMovement}px) scale(0)`, opacity: 0}
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}

// Create particles periodically
setInterval(createParticle, 300);

// Add rainbow text effect to specific words
function addRainbowEffect() {
    const wordsToHighlight = ['love', 'strength', 'hero', 'grateful', 'sacrifices', 'inspires'];
    document.querySelectorAll('p').forEach(p => {
        let html = p.innerHTML;
        wordsToHighlight.forEach(word => {
            const regex = new RegExp(`\\b(${word})\\b`, 'gi');
            html = html.replace(regex, '<span class="rainbow-text">$1</span>');
        });
        p.innerHTML = html;
    });
}

// Add rainbow text CSS dynamically
const rainbowCSS = `
.rainbow-text {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff, #5f27cd);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: rainbowShift 3s ease infinite;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}
.rainbow-text:hover {
    transform: scale(1.1) rotate(2deg);
    text-shadow: 0 0 20px rgba(255,255,255,0.8);
}
@keyframes rainbowShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`;

const style = document.createElement('style');
style.textContent = rainbowCSS;
document.head.appendChild(style);

// Add click effects
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = `radial-gradient(circle, hsl(${Math.random() * 360}, 70%, 60%), transparent)`;
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'rippleEffect 0.6s ease-out';
    
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});

// Add ripple effect CSS
const rippleCSS = `
@keyframes rippleEffect {
    0% {transform: translate(-50%, -50%) scale(0); opacity: 1;}
    100% {transform: translate(-50%, -50%) scale(4); opacity: 0;}
}`;

const rippleStyle = document.createElement('style');
rippleStyle.textContent = rippleCSS;
document.head.appendChild(rippleStyle);

// Add keyboard effects
let keySequence = [];
const secretCode = 'mama';

document.addEventListener('keydown', (e) => {
    keySequence.push(e.key.toLowerCase());
    if (keySequence.length > secretCode.length) {
        keySequence.shift();
    }
    if (keySequence.join('') === secretCode) {
        triggerSpecialEffect();
        keySequence = [];
    }
});

function triggerSpecialEffect() {
    document.body.style.animation = 'rainbowFlash 1s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 1000);
    
    // Add special rainbow flash CSS
    const flashCSS = `
    @keyframes rainbowFlash {
        0%, 100% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
    }`;
    
    const flashStyle = document.createElement('style');
    flashStyle.textContent = flashCSS;
    document.head.appendChild(flashStyle);
}

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
    addRainbowEffect();
    console.log('🐉 Mama Dragon website loaded! Type "mama" for a special effect!');
});
