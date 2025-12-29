// Enhanced Features JavaScript

// ===== MOBILE HAMBURGER MENU =====
export function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// ===== BACKGROUND MUSIC TOGGLE =====
export function initMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicIcon = musicToggle?.querySelector('.music-icon');

    let isPlaying = false;

    // Load saved preference
    const savedMusicPref = localStorage.getItem('musicEnabled');
    if (savedMusicPref === 'true') {
        playMusic();
    }

    musicToggle?.addEventListener('click', () => {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    function playMusic() {
        bgMusic?.play().then(() => {
            isPlaying = true;
            if (musicIcon) musicIcon.textContent = '🔊';
            localStorage.setItem('musicEnabled', 'true');
        }).catch(err => {
            console.log('Could not play music:', err);
        });
    }

    function pauseMusic() {
        bgMusic?.pause();
        isPlaying = false;
        if (musicIcon) musicIcon.textContent = '🔇';
        localStorage.setItem('musicEnabled', 'false');
    }
}

// ===== DARK/LIGHT MODE TOGGLE =====
export function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        // Confetti on theme change
        if (typeof confetti !== 'undefined') {
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.1 },
                colors: newTheme === 'light' ? ['#FFD700', '#FFA500'] : ['#7B68EE', '#9370DB']
            });
        }
    });

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        }
    }
}

// ===== LOCALSTORAGE FOR WISHES =====
export function initWishesStorage() {
    const wishInput = document.getElementById('wishInput');
    const submitWish = document.getElementById('submitWish');
    const wishesDisplay = document.getElementById('wishesDisplay');

    // Load saved wishes
    loadWishes();

    submitWish?.addEventListener('click', saveWish);
    wishInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveWish();
    });

    function saveWish() {
        const wishText = wishInput?.value.trim();
        if (!wishText) return;

        const wishes = getWishesFromStorage();
        const newWish = {
            id: Date.now(),
            text: wishText,
            date: new Date().toISOString()
        };

        wishes.push(newWish);
        localStorage.setItem('wishes2026', JSON.stringify(wishes));

        // Add to display
        addWishToDisplay(newWish);

        // Clear input
        if (wishInput) wishInput.value = '';

        // Trigger confetti
        if (typeof confetti !== 'undefined') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        // Show success message
        showNotification('✨ Your wish has been saved!');
    }

    function loadWishes() {
        const wishes = getWishesFromStorage();
        if (wishesDisplay) {
            wishesDisplay.innerHTML = '';
        }
        wishes.forEach(wish => addWishToDisplay(wish));
    }

    function addWishToDisplay(wish) {
        if (!wishesDisplay) return;

        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card';
        wishCard.dataset.wishId = wish.id;

        const wishContent = document.createElement('div');
        wishContent.className = 'wish-content';
        wishContent.textContent = wish.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'wish-delete';
        deleteBtn.innerHTML = '&times;';
        deleteBtn.onclick = () => deleteWish(wish.id);

        wishCard.appendChild(wishContent);
        wishCard.appendChild(deleteBtn);
        wishesDisplay.insertBefore(wishCard, wishesDisplay.firstChild);

        // Animate in
        setTimeout(() => wishCard.classList.add('show'), 10);
    }

    function deleteWish(wishId) {
        const wishes = getWishesFromStorage();
        const filtered = wishes.filter(w => w.id !== wishId);
        localStorage.setItem('wishes2026', JSON.stringify(filtered));

        const wishCard = document.querySelector(`[data-wish-id="${wishId}"]`);
        if (wishCard) {
            wishCard.style.animation = 'fadeOutDown 0.4s ease';
            setTimeout(() => wishCard.remove(), 400);
        }
    }

    function getWishesFromStorage() {
        try {
            return JSON.parse(localStorage.getItem('wishes2026') || '[]');
        } catch {
            return [];
        }
    }
}

// ===== LOCALSTORAGE FOR RESOLUTIONS =====
export function initResolutionsStorage() {
    const resolutionCards = document.querySelectorAll('.resolution-card');

    // Load saved progress
    loadResolutionProgress();

    resolutionCards.forEach((card, index) => {
        const progressBar = card.querySelector('.progress-bar-fill');
        const progressText = card.querySelector('.progress-text');

        // Add click to increment progress
        card.addEventListener('click', () => {
            incrementProgress(index, progressBar, progressText);
        });
    });

    function loadResolutionProgress() {
        const progress = getResolutionProgress();
        resolutionCards.forEach((card, index) => {
            const progressBar = card.querySelector('.progress-bar-fill');
            const progressText = card.querySelector('.progress-text');
            const value = progress[index] || 0;

            if (progressBar) progressBar.style.width = `${value}%`;
            if (progressText) progressText.textContent = `${value}% Complete`;
        });
    }

    function incrementProgress(index, progressBar, progressText) {
        const progress = getResolutionProgress();
        let current = progress[index] || 0;

        current += 10;
        if (current > 100) current = 0; // Reset if over 100

        progress[index] = current;
        localStorage.setItem('resolutions2026', JSON.stringify(progress));

        // Update UI
        if (progressBar) progressBar.style.width = `${current}%`;
        if (progressText) progressText.textContent = `${current}% Complete`;

        // Confetti at milestones
        if (current === 50 || current === 100) {
            if (typeof confetti !== 'undefined') {
                confetti({
                    particleCount: current === 100 ? 150 : 75,
                    spread: 100,
                    origin: { y: 0.6 }
                });
            }
            showNotification(current === 100 ? '🎉 Resolution Complete!' : '🌟 Halfway there!');
        }
    }

    function getResolutionProgress() {
        try {
            return JSON.parse(localStorage.getItem('resolutions2026') || '{}');
        } catch {
            return {};
        }
    }
}

// ===== RANDOM RESOLUTION GENERATOR =====
const resolutionIdeas = [
    { title: "Learn a New Language", icon: "🌍", desc: "Master Spanish, Japanese, or another language" },
    { title: "Read 52 Books", icon: "📚", desc: "One book every week throughout 2026" },
    { title: "Run a Marathon", icon: "🏃", desc: "Train and complete a 26.2 mile race" },
    { title: "Learn to Code", icon: "💻", desc: "Master Python, JavaScript or another language" },
    { title: "Start a Side Business", icon: "💼", desc: "Turn your passion into profit" },
    { title: "Practice Daily Meditation", icon: "🧘", desc: "10 minutes of mindfulness each day" },
    { title: "Cook 100 New Recipes", icon: "👨‍🍳", desc: "Expand your culinary skills" },
    { title: "Save $10,000", icon: "💰", desc: "Build your emergency fund" },
    { title: "Learn an Instrument", icon: "🎸", desc: "Master guitar, piano, or another instrument" },
    { title: "Volunteer Monthly", icon: "❤️", desc: "Give back to your community" },
    { title: "Wake Up at 5 AM", icon: "⏰", desc: "Join the 5 AM club for productivity" },
    { title: "Travel to 5 Countries", icon: "✈️", desc: "Explore new cultures and places" },
    { title: "Write a Book", icon: "✍️", desc: "Pen your memoir, novel, or guide" },
    { title: "Get Fit & Healthy", icon: "💪", desc: "Achieve your ideal fitness level" },
    { title: "Learn Photography", icon: "📸", desc: "Capture beautiful moments professionally" },
    { title: "Start a YouTube Channel", icon: "🎥", desc: "Share your knowledge with the world" },
    { title: "Master Public Speaking", icon: "🎤", desc: "Conquer your fear and speak confidently" },
    { title: "Build a Portfolio", icon: "🎨", desc: "Showcase your best work online" },
    { title: "Network & Connect", icon: "🤝", desc: "Make 100 meaningful professional connections" },
    { title: "Practice Gratitude Daily", icon: "🙏", desc: "Write 3 things you're grateful for each day" }
];

export function generateRandomResolution() {
    const random = resolutionIdeas[Math.floor(Math.random() * resolutionIdeas.length)];

    // Create modal or notification
    showResolutionModal(random);

    // Confetti
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 }
        });
    }
}

function showResolutionModal(resolution) {
    // Remove existing modal
    const existingModal = document.querySelector('.resolution-modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'resolution-modal';
    modal.innerHTML = `
        <div class="resolution-modal-content">
            <button class="modal-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            <div class="modal-icon">${resolution.icon}</div>
            <h3 class="modal-title">${resolution.title}</h3>
            <p class="modal-desc">${resolution.desc}</p>
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="this.closest('.resolution-modal').remove()">
                    I'll do it! 💪
                </button>
                <button class="btn btn-secondary" onclick="generateRandomResolution()">
                    Try Another 🔄
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== MAKE FUNCTIONS GLOBAL =====
window.generateRandomResolution = generateRandomResolution;
