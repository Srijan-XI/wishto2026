// ===== ANIMATION MODULES =====
import { getRandomColor, isMobile, prefersReducedMotion } from './utils.js';

let fireworksActive = false;
let animationFrameId = null;

/**
 * Initialize particle system
 */
export function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = isMobile() ? 25 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 15;
        const randomDuration = 10 + Math.random() * 10;

        particle.style.left = `${randomX}%`;
        particle.style.animationDelay = `${randomDelay}s`;
        particle.style.animationDuration = `${randomDuration}s`;

        const colors = ['#667eea', '#764ba2', '#00f2fe', '#f6d365'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        particlesContainer.appendChild(particle);
    }
}

/**
 * Initialize fireworks canvas
 */
export function initFireworks() {
    const canvas = document.getElementById('fireworks');
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/**
 * Start celebration with fireworks
 */
export function startCelebration() {
    if (fireworksActive) {
        stopFireworks();
    } else {
        launchFireworks();
    }
}

/**
 * Launch fireworks animation
 */
export function launchFireworks() {
    const canvas = document.getElementById('fireworks');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    fireworksActive = true;

    const fireworks = [];
    const particles = [];

    class Firework {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.targetY = Math.random() * canvas.height * 0.4 + 100;
            this.speed = 5 + Math.random() * 4;
            this.color = getRandomColor();
            this.trail = [];
        }

        update() {
            // Add trail effect
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > 10) this.trail.shift();

            this.y -= this.speed;
            return this.y <= this.targetY;
        }

        draw() {
            // Draw trail
            ctx.globalAlpha = 0.3;
            for (let i = 0; i < this.trail.length; i++) {
                const point = this.trail[i];
                ctx.beginPath();
                ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            // Draw main firework
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 2;
            this.velocity = {
                x: Math.cos(angle) * speed,
                y: Math.sin(angle) * speed
            };
            this.alpha = 1;
            this.decay = 0.015 + Math.random() * 0.01;
            this.size = Math.random() * 3 + 1;
        }

        update() {
            this.velocity.y += 0.15; // Gravity
            this.velocity.x *= 0.99; // Air resistance
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= this.decay;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 5;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.restore();
        }
    }

    function createParticles(x, y, color) {
        const particleCount = 80;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(x, y, color));
        }
    }

    function animate() {
        if (!fireworksActive) {
            // Clean up on stop
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        // Fade effect for trails
        ctx.fillStyle = 'rgba(10, 10, 15, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Launch new fireworks randomly
        if (Math.random() < 0.08) {
            fireworks.push(new Firework());
        }

        // Update and draw fireworks
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].draw();
            if (fireworks[i].update()) {
                createParticles(fireworks[i].x, fireworks[i].y, fireworks[i].color);
                fireworks.splice(i, 1);
            }
        }

        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].alpha <= 0) {
                particles.splice(i, 1);
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}

/**
 * Stop fireworks animation
 */
export function stopFireworks() {
    fireworksActive = false;
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }

    // Clear canvas
    const canvas = document.getElementById('fireworks');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

/**
 * Launch auto fireworks for celebration
 */
export function launchAutoFireworks() {
    launchFireworks();
    setTimeout(stopFireworks, 5000); // Stop after 5 seconds
}

/**
 * Create confetti effect at element position
 * @param {HTMLElement} element - Element to create confetti at
 */
export function createConfetti(element) {
    const rect = element.getBoundingClientRect();
    const confettiCount = 20;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = `${rect.left + rect.width / 2}px`;
        confetti.style.top = `${rect.top}px`;
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.borderRadius = '50%';

        document.body.appendChild(confetti);

        const angle = (Math.PI * 2 * i) / confettiCount;
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity - 5;

        animateConfetti(confetti, vx, vy);
    }
}

/**
 * Animate confetti particle
 * @param {HTMLElement} element - Confetti element
 * @param {Number} vx - X velocity
 * @param {Number} vy - Y velocity
 */
function animateConfetti(element, vx, vy) {
    let x = parseFloat(element.style.left);
    let y = parseFloat(element.style.top);
    let opacity = 1;

    function update() {
        vy += 0.5;
        x += vx;
        y += vy;
        opacity -= 0.02;

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.opacity = opacity;

        if (opacity > 0) {
            requestAnimationFrame(update);
        } else {
            element.remove();
        }
    }

    update();
}

/**
 * Create celebration particles for resolution completion
 * @param {HTMLElement} element - Element to create celebration at
 */
export function createResolutionCelebration(element) {
    const rect = element.getBoundingClientRect();
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = `${rect.left + rect.width / 2}px`;
        particle.style.top = `${rect.top + rect.height / 2}px`;
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.backgroundColor = getRandomColor();
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.borderRadius = '50%';
        particle.textContent = ['🎉', '⭐', '✨', '🎊'][Math.floor(Math.random() * 4)];
        particle.style.fontSize = '16px';

        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 8 + Math.random() * 4;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity - 3;

        animateCelebrationParticle(particle, vx, vy);
    }
}

/**
 * Animate celebration particle
 * @param {HTMLElement} element - Particle element
 * @param {Number} vx - X velocity
 * @param {Number} vy - Y velocity
 */
function animateCelebrationParticle(element, vx, vy) {
    let x = parseFloat(element.style.left);
    let y = parseFloat(element.style.top);
    let opacity = 1;
    let rotation = 0;

    function update() {
        vy += 0.5;
        x += vx;
        y += vy;
        opacity -= 0.02;
        rotation += 10;

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.opacity = opacity;
        element.style.transform = `rotate(${rotation}deg)`;

        if (opacity > 0) {
            requestAnimationFrame(update);
        } else {
            element.remove();
        }
    }

    update();
}
