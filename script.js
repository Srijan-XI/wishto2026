// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCountdown();
    initScrollEffects();
    initWishes();
    initStats();
    initFireworks();
    initQuotesCarousel();
    initResolutionTrackers();
    initContactForm();
});

// ===== PARTICLE SYSTEM =====
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

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

// ===== COUNTDOWN TIMER =====
function initCountdown() {
    const targetDate = new Date('January 1, 2026 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            showNewYearCelebration();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        // Animate countdown values
        animateCountdownValue('days');
        animateCountdownValue('hours');
        animateCountdownValue('minutes');
        animateCountdownValue('seconds');

        // Update year progress
        updateYearProgress();
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function animateCountdownValue(id) {
    const element = document.getElementById(id);
    element.style.transform = 'scale(1.1)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 100);
}

function updateYearProgress() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1);

    const totalTime = endOfYear - startOfYear;
    const elapsedTime = now - startOfYear;
    const progress = (elapsedTime / totalTime) * 100;

    document.getElementById('yearProgress').style.width = `${progress}%`;
    document.getElementById('progressPercent').textContent = `${progress.toFixed(1)}%`;
}

function showNewYearCelebration() {
    document.querySelector('.hero-title').innerHTML = `
        <span class="year-new" style="font-size: 1.2em;">🎉 HAPPY 2026! 🎉</span>
    `;

    document.querySelector('.countdown-display').innerHTML = `
        <h2 style="font-size: 3rem; text-align: center; width: 100%;">
            🎊 Welcome to 2026! 🎊
        </h2>
    `;

    launchAutoFireworks();
}

// ===== FIREWORKS =====
let fireworksActive = false;
let animationFrameId = null;

function initFireworks() {
    const canvas = document.getElementById('fireworks');
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function startCelebration() {
    if (fireworksActive) {
        stopFireworks();
    } else {
        launchFireworks();
    }
}

function launchFireworks() {
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
            this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
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

function stopFireworks() {
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

function launchAutoFireworks() {
    launchFireworks();
    setTimeout(stopFireworks, 30000); // Stop after 30 seconds
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            scrollToSection(targetId.substring(1));

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Intersection Observer for animations
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

    document.querySelectorAll('.feature-card, .stat-item, .wish-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Add touch feedback to interactive cards
    addTouchFeedback('.resolution-card');
    addTouchFeedback('.memory-card');
    addTouchFeedback('.feature-card');
}

function addTouchFeedback(selector) {
    document.querySelectorAll(selector).forEach(card => {
        card.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });

        card.addEventListener('touchend', function () {
            this.style.transform = '';
        }, { passive: true });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = section.offsetTop - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// ===== WISHES SYSTEM =====
function initWishes() {
    const submitBtn = document.getElementById('submitWish');
    const wishInput = document.getElementById('wishInput');

    submitBtn.addEventListener('click', () => {
        const wishText = wishInput.value.trim();
        if (wishText) {
            addWish(wishText);
            wishInput.value = '';
            wishInput.focus();
        }
    });

    wishInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
}

function addWish(wishText) {
    const wishesDisplay = document.getElementById('wishesDisplay');
    const wishCard = document.createElement('div');
    wishCard.className = 'wish-card';

    const emojis = ['✨', '🌟', '⭐', '💫', '🎊', '🎉'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    wishCard.innerHTML = `
        <div class="wish-content">${randomEmoji} ${wishText}</div>
    `;

    wishesDisplay.insertBefore(wishCard, wishesDisplay.firstChild);

    // Add celebration effect
    createConfetti(wishCard);
}

function createConfetti(element) {
    const rect = element.getBoundingClientRect();
    const confettiCount = 20;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = `${rect.left + rect.width / 2}px`;
        confetti.style.top = `${rect.top}px`;
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
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

// ===== STATS ANIMATION =====
function initStats() {
    const statValues = document.querySelectorAll('.stat-value');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statValues.forEach(stat => {
                    animateStatValue(stat);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        observer.observe(statsContainer);
    }
}

function animateStatValue(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// ===== QUOTES CAROUSEL =====
let currentQuoteIndex = 0;
let quoteAutoPlayInterval;

function initQuotesCarousel() {
    const quotes = document.querySelectorAll('.quote-card');
    const dotsContainer = document.getElementById('quoteDots');

    if (!quotes.length || !dotsContainer) return;

    // Create dots
    quotes.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => showQuote(index));
        dotsContainer.appendChild(dot);
    });

    // Auto-play
    startQuoteAutoPlay();

    // Pause on hover
    const carousel = document.querySelector('.quotes-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopQuoteAutoPlay);
        carousel.addEventListener('mouseleave', startQuoteAutoPlay);

        // Add touch swipe support for mobile
        addSwipeSupport(carousel);
    }
}

function addSwipeSupport(element) {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50;

    element.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Only trigger if horizontal swipe is dominant
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                // Swipe right - previous quote
                changeQuote(-1);
            } else {
                // Swipe left - next quote
                changeQuote(1);
            }
        }
    }, { passive: true });
}

function showQuote(index) {
    const quotes = document.querySelectorAll('.quote-card');
    const dots = document.querySelectorAll('.carousel-dot');

    if (!quotes.length) return;

    // Wrap around
    if (index >= quotes.length) index = 0;
    if (index < 0) index = quotes.length - 1;

    currentQuoteIndex = index;

    // Update quotes
    quotes.forEach((quote, i) => {
        quote.classList.toggle('active', i === index);
    });

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function changeQuote(direction) {
    showQuote(currentQuoteIndex + direction);
    stopQuoteAutoPlay();
    startQuoteAutoPlay();
}

function startQuoteAutoPlay() {
    stopQuoteAutoPlay();
    quoteAutoPlayInterval = setInterval(() => {
        showQuote(currentQuoteIndex + 1);
    }, 5000);
}

function stopQuoteAutoPlay() {
    if (quoteAutoPlayInterval) {
        clearInterval(quoteAutoPlayInterval);
    }
}

// ===== RESOLUTION TRACKERS =====
function initResolutionTrackers() {
    const resolutionCards = document.querySelectorAll('.resolution-card');

    resolutionCards.forEach(card => {
        card.addEventListener('click', () => {
            const progressBar = card.querySelector('.progress-bar-fill');
            const progressText = card.querySelector('.progress-text');

            if (!progressBar || !progressText) return;

            let currentProgress = parseInt(progressBar.style.width) || 0;
            currentProgress += 10;

            if (currentProgress > 100) currentProgress = 0;

            progressBar.style.width = `${currentProgress}%`;
            progressText.textContent = `${currentProgress}% Complete`;

            // Add celebration effect at 100%
            if (currentProgress === 100) {
                createResolutionCelebration(card);
            }
        });
    });
}

function createResolutionCelebration(element) {
    const rect = element.getBoundingClientRect();
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = `${rect.left + rect.width / 2}px`;
        particle.style.top = `${rect.top + rect.height / 2}px`;
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
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

// ===== UTILITY FUNCTIONS =====
window.scrollToSection = scrollToSection;
window.startCelebration = startCelebration;
window.changeQuote = changeQuote;

// ===== EASTER EGG =====
let clickCount = 0;
document.querySelector('.hero-title').addEventListener('click', () => {
    clickCount++;
    if (clickCount >= 3) {
        launchFireworks();
        clickCount = 0;
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateNavbarOnScroll();
            ticking = false;
        });
        ticking = true;
    }
});

function updateNavbarOnScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.05)';
        navbar.style.boxShadow = 'none';
    }
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Clear previous errors
        clearFormErrors();

        // Validate form
        let isValid = true;

        if (!validateName(nameInput.value)) {
            showError('nameError', 'Please enter a valid name (at least 2 characters)');
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        if (!validateMessage(messageInput.value)) {
            showError('messageError', 'Please enter a message (at least 10 characters)');
            isValid = false;
        }

        if (isValid) {
            submitContactForm(form);
        }
    });

    // Real-time validation
    nameInput.addEventListener('blur', () => {
        if (nameInput.value && !validateName(nameInput.value)) {
            showError('nameError', 'Please enter a valid name');
        } else {
            clearError('nameError');
        }
    });

    emailInput.addEventListener('blur', () => {
        if (emailInput.value && !validateEmail(emailInput.value)) {
            showError('emailError', 'Please enter a valid email address');
        } else {
            clearError('emailError');
        }
    });

    messageInput.addEventListener('blur', () => {
        if (messageInput.value && !validateMessage(messageInput.value)) {
            showError('messageError', 'Message must be at least 10 characters');
        } else {
            clearError('messageError');
        }
    });
}

function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

function clearFormErrors() {
    ['nameError', 'emailError', 'messageError'].forEach(clearError);
}

function submitContactForm(form) {
    const submitButton = form.querySelector('.form-submit');
    const successMessage = document.getElementById('formSuccess');

    // Disable submit button
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>Sending...</span>';

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        successMessage.classList.add('show');

        // Reset form
        form.reset();

        // Re-enable button
        submitButton.disabled = false;
        submitButton.innerHTML = `
            <span>Send Message</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);

        // Haptic feedback on success
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100]);
        }
    }, 1500);
}

// ===== MOBILE OPTIMIZATIONS =====
// Prevent double-tap zoom on buttons
document.addEventListener('touchend', (e) => {
    const target = e.target;
    if (target.tagName === 'BUTTON' || target.closest('button')) {
        e.preventDefault();
        target.click();
    }
}, { passive: false });

// Optimize input focus for mobile
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        setTimeout(() => {
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    });
});

// Add haptic-like feedback for mobile interactions
if ('vibrate' in navigator) {
    document.querySelectorAll('.btn, .carousel-btn, .resolution-card').forEach(el => {
        el.addEventListener('click', () => {
            navigator.vibrate(10); // Very short vibration
        });
    });
}

console.log('%c🎉 Welcome to 2026! 🎉', 'font-size: 30px; color: #667eea; font-weight: bold;');
console.log('%cMay this year bring you joy, success, and endless possibilities!', 'font-size: 14px; color: #00f2fe;');
console.log('%c✨ Created by srijan-xi ✨', 'font-size: 12px; color: #f6d365; font-weight: bold;');
