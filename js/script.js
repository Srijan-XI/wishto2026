// ===== MAIN APPLICATION =====
// Import modules
import { initParticles, initFireworks, startCelebration } from './animations.js';
import { initCountdown, initStats } from './countdown.js';
import {
    initWishes,
    initResolutionTrackers,
    initQuotesCarousel,
    initContactForm,
    initBackToTop,
    changeQuote
} from './interactions.js';
import { scrollToSection, addTouchFeedback, debounce } from './utils.js';
import {
    initMobileMenu,
    initMusicToggle,
    initThemeToggle,
    initWishesStorage,
    initResolutionsStorage
} from './enhanced-features.js';

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🎉 Welcome to 2026! 🎉', 'font-size: 30px; color: #667eea; font-weight: bold;');
    console.log('%cInitializing application...', 'font-size: 14px; color: #00f2fe;');

    // Initialize core modules
    initParticles();
    initCountdown();
    initScrollEffects();
    initWishes();
    initStats();
    initFireworks();
    initQuotesCarousel();
    initResolutionTrackers();
    initContactForm();
    initBackToTop();

    // Initialize new enhanced features
    initMobileMenu();
    initMusicToggle();
    initThemeToggle();
    initWishesStorage();
    initResolutionsStorage();

    console.log('%c✨ Created by srijan-xi ✨', 'font-size: 12px; color: #f6d365; font-weight: bold;');
    console.log('%cMay this year bring you joy, success, and endless possibilities!', 'font-size: 14px; color: #00f2fe;');
});

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Only prevent default and smooth scroll for internal anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));

                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
            // External links (like 2025.html) will work normally
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

// ===== NAVBAR SCROLL EFFECT =====
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
    if (!navbar) return;

    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.05)';
        navbar.style.boxShadow = 'none';
    }
}

// ===== EASTER EGG =====
let clickCount = 0;
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    heroTitle.addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 3) {
            startCelebration();
            clickCount = 0;
        }
    });
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

// ===== GLOBAL FUNCTIONS =====
// Make functions available globally for inline onclick handlers
window.scrollToSection = scrollToSection;
window.startCelebration = startCelebration;
window.changeQuote = changeQuote;

// ===== VISIT TO 2025 TECH FUNCTION =====
window.visitTo2025Tech = function () {
    const techBtn = document.querySelector('.btn-tech');
    const countdownElement = document.getElementById('techCountdown');

    // Disable button during countdown
    techBtn.disabled = true;
    techBtn.classList.add('counting');

    let countdown = 3;
    countdownElement.textContent = countdown;

    // Countdown interval
    const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            countdownElement.textContent = countdown;
            // Add pulse animation on each count
            countdownElement.style.transform = 'scale(1.5)';
            setTimeout(() => {
                countdownElement.style.transform = 'scale(1)';
            }, 100);// 100ms delay for smooth animation
        } else {
            clearInterval(countdownInterval);
            // Hide countdown and navigate
            techBtn.classList.remove('counting');

            // Add launch animation
            techBtn.style.transform = 'translateY(-200vh) scale(0.5)';
            techBtn.style.transition = 'all 1s ease-in';

            // Navigate to 2025 Tech page after animation
            setTimeout(() => {
                window.location.href = '2025.html';
            }, 500);// 500ms delay for smooth animation
        }
    }, 500);// 500ms delay for smooth animation
};


