// Fortune Teller Logic

const fortunes = [
    "2026 will be a transformative year filled with unexpected opportunities and personal growth.",
    "This year brings harmony and balance. Your patience will be rewarded with success.",
    "Adventure awaits! 2026 is your year to explore new horizons and embrace change.",
    "Focus on relationships this year. Deep connections will bring joy and fulfillment.",
    "Your creative energy will peak in 2026. Express yourself and watch magic happen.",
    "Financial success is on the horizon. Smart decisions will lead to prosperity.",
    "Health and wellness take center stage. Prioritize self-care for a vibrant year.",
    "2026 brings career breakthroughs. Your hard work will finally pay off spectacularly.",
    "Spiritual awakening awaits. This year will deepen your understanding of yourself.",
    "Leadership opportunities will present themselves. Step up and shine brightly."
];

const luckyColors = [
    "Purple", "Gold", "Emerald Green", "Royal Blue", "Rose Gold",
    "Crimson Red", "Sapphire Blue", "Pearl White", "Turquoise", "Silver"
];

const luckyDays = [
    "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
];

const focusAreasOptions = [
    ["Career Growth", "Financial Planning", "Work-Life Balance"],
    ["Love & Romance", "Family Bonds", "Friendships"],
    ["Personal Development", "Learning", "Creativity"],
    ["Health & Fitness", "Mental Wellness", "Spiritual Growth"],
    ["Adventure & Travel", "New Experiences", "Cultural Exploration"],
    ["Innovation", "Technology", "Digital Skills"],
    ["Community Service", "Environmental Impact", "Social Change"]
];

const adviceOptions = [
    "Trust your intuition this year—it will guide you to the right path.",
    "Embrace change with open arms; resistance only delays your destiny.",
    "The universe rewards those who take calculated risks. Be bold.",
    "Your greatest strength lies in your ability to adapt. Stay flexible.",
    "Remember: every ending is a new beginning in disguise.",
    "Collaboration over competition will bring unexpected rewards.",
    "Invest in yourself—education and self-improvement pay eternal dividends.",
    "Let go of what no longer serves you to make room for abundance.",
    "Your positive energy will attract like-minded souls. Build your tribe.",
    "Balance ambition with gratitude; success is sweeter when shared."
];

function generateFortune() {
    const userName = document.getElementById('userName').value.trim();
    const birthMonth = document.getElementById('birthMonth').value;

    if (!userName || !birthMonth) {
        alert('Please enter your name and select your birth month! 🔮');
        return;
    }

    // Generate personalized fortune based on name and birth month
    const nameHash = hashString(userName);
    const monthIndex = parseInt(birthMonth) - 1;

    // Select fortune elements
    const fortune = fortunes[(nameHash + monthIndex) % fortunes.length];
    const luckyNumber = ((nameHash % 99) + 1);
    const luckyColor = luckyColors[(nameHash + monthIndex) % luckyColors.length];
    const luckyDay = luckyDays[(nameHash) % luckyDays.length];
    const focusAreas = focusAreasOptions[monthIndex % focusAreasOptions.length];
    const advice = adviceOptions[(nameHash + monthIndex * 2) % adviceOptions.length];

    // Generate monthly forecast
    const monthlyForecast = generateMonthlyForecast(nameHash, monthIndex);

    // Display results
    document.getElementById('fortuneGreeting').textContent = `Welcome, ${userName}! ✨`;

    // Add timestamp
    const now = new Date();
    const timestamp = `Generated on ${now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })} at ${now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    })}`;
    const timestampEl = document.getElementById('fortuneTimestamp');
    if (timestampEl) {
        timestampEl.textContent = timestamp;
    }

    document.getElementById('fortunePrediction').textContent = fortune;
    document.getElementById('luckyNumber').textContent = luckyNumber;
    document.getElementById('luckyColor').textContent = luckyColor;
    document.getElementById('luckyDay').textContent = luckyDay;
    document.getElementById('fortuneAdvice').textContent = advice;

    // Display focus areas
    const focusContainer = document.getElementById('focusAreas');
    focusContainer.innerHTML = '';
    focusAreas.forEach(area => {
        const tag = document.createElement('span');
        tag.className = 'focus-tag';
        tag.textContent = area;
        focusContainer.appendChild(tag);
    });

    // Display monthly forecast
    const forecastContainer = document.getElementById('monthlyForecast');
    if (forecastContainer) {
        forecastContainer.innerHTML = '';
        monthlyForecast.forEach((month, index) => {
            const monthEl = document.createElement('div');
            monthEl.className = 'month-indicator';
            monthEl.innerHTML = `
                <div class="month-name">${getMonthName(index)}</div>
                <div class="month-energy">${month.energy}</div>
            `;
            monthEl.title = month.description;
            forecastContainer.appendChild(monthEl);
        });
    }

    // Show result with animation
    const resultDiv = document.getElementById('fortuneResult');
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Trigger confetti
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

function resetFortune() {
    document.getElementById('userName').value = '';
    document.getElementById('birthMonth').value = '';
    document.getElementById('fortuneResult').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simple hash function for consistent randomization
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// Global New Year Clocks with World Time API
const worldClocks = [
    { id: 'samoa', timezone: 'Pacific/Samoa', offset: -11, name: 'Samoa', flag: '🇼🇸' },
    { id: 'nz', timezone: 'Pacific/Auckland', offset: 13, name: 'New Zealand', flag: '🇳🇿' },
    { id: 'sydney', timezone: 'Australia/Sydney', offset: 11, name: 'Sydney', flag: '🇦🇺' },
    { id: 'tokyo', timezone: 'Asia/Tokyo', offset: 9, name: 'Tokyo', flag: '🇯🇵' },
    { id: 'india', timezone: 'Asia/Kolkata', offset: 5.5, name: 'India', flag: '🇮🇳' },
    { id: 'dubai', timezone: 'Asia/Dubai', offset: 4, name: 'Dubai', flag: '🇦🇪' },
    { id: 'london', timezone: 'Europe/London', offset: 0, name: 'London', flag: '🇬🇧' },
    { id: 'ny', timezone: 'America/New_York', offset: -5, name: 'New York', flag: '🇺🇸' },
    { id: 'la', timezone: 'America/Los_Angeles', offset: -8, name: 'Los Angeles', flag: '🇺🇸' }
];

let useAPITime = true; // Flag to switch between API and local calculation
let apiTimeCache = {}; // Cache API responses

// Fetch time from World Time API
async function fetchTimeFromAPI(timezone) {
    try {
        const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        return {
            datetime: new Date(data.datetime),
            success: true
        };
    } catch (error) {
        console.warn(`World Time API failed for ${timezone}, using fallback`, error);
        return { success: false };
    }
}

// Update world clocks using API or fallback
async function updateWorldClocks() {
    for (const clock of worldClocks) {
        let currentTime;

        // Try API first if enabled
        if (useAPITime && !apiTimeCache[clock.id]) {
            const apiResult = await fetchTimeFromAPI(clock.timezone);
            if (apiResult.success) {
                apiTimeCache[clock.id] = apiResult.datetime;
                currentTime = apiResult.datetime;
            } else {
                // Fallback to client-side calculation
                useAPITime = false; // Disable API for this session
                currentTime = getLocalCalculatedTime(clock.offset);
            }
        } else if (apiTimeCache[clock.id]) {
            // Use cached API time and increment
            const cached = apiTimeCache[clock.id];
            currentTime = new Date(cached.getTime() + (Date.now() - cached.getTime()));
        } else {
            // Use fallback calculation
            currentTime = getLocalCalculatedTime(clock.offset);
        }

        updateClockDisplay(clock.id, currentTime, clock.offset);
    }
}

// Fallback: Calculate time using client-side offset
function getLocalCalculatedTime(offset) {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utcTime + (3600000 * offset));
}

// Update clock display elements
function updateClockDisplay(clockId, currentTime, offset) {
    const timeString = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const timeElement = document.getElementById(`${clockId}-time`);
    const statusElement = document.getElementById(`${clockId}-status`);

    if (timeElement) {
        timeElement.textContent = timeString;
    }

    if (statusElement) {
        updateCelebrationStatus(statusElement, currentTime, offset);
    }
}

// Update celebration status based on current time
function updateCelebrationStatus(statusElement, currentTime, offset) {
    const targetDate = new Date('2026-01-01T00:00:00');
    const utcTime = currentTime.getTime();
    const targetUTC = targetDate.getTime() - (offset * 3600000);

    if (utcTime < targetUTC) {
        statusElement.textContent = 'Waiting...';
        statusElement.className = 'status waiting';
    } else if (utcTime < targetUTC + 3600000) { // Within 1 hour of New Year
        statusElement.textContent = '🎉 Celebrating!';
        statusElement.className = 'status celebrating';

        // Trigger confetti for celebrating cities
        if (typeof confetti !== 'undefined' && Math.random() < 0.1) {
            confetti({
                particleCount: 30,
                spread: 50,
                origin: { y: 0.7 }
            });
        }
    } else {
        statusElement.textContent = '✓ Celebrated';
        statusElement.className = 'status completed';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔮 Fortune page loaded');
    initializeWorldClocks();
});

// Initialize world clocks with API
async function initializeWorldClocks() {
    console.log('Initializing world clocks with API...');

    // Fetch initial times from API
    for (const clock of worldClocks) {
        const apiResult = await fetchTimeFromAPI(clock.timezone);
        if (apiResult.success) {
            apiTimeCache[clock.id] = {
                time: apiResult.datetime,
                fetchedAt: Date.now()
            };
            console.log(`✓ ${clock.name} time fetched from API`);
        } else {
            console.warn(`✗ ${clock.name} using fallback calculation`);
            useAPITime = false;
        }
    }

    // Start regular updates
    updateWorldClocksSync();
    setInterval(updateWorldClocksSync, 1000);
}

// Synchronous update function for setInterval
function updateWorldClocksSync() {
    for (const clock of worldClocks) {
        let currentTime;

        if (apiTimeCache[clock.id]) {
            // Calculate current time from cached API time
            const cached = apiTimeCache[clock.id];
            const elapsedMs = Date.now() - cached.fetchedAt;
            currentTime = new Date(cached.time.getTime() + elapsedMs);
        } else {
            // Use fallback calculation
            currentTime = getLocalCalculatedTime(clock.offset);
        }

        updateClockDisplay(clock.id, currentTime, clock.offset);
    }
}

// Update world clocks using API or fallback (kept for manual refresh)
async function updateWorldClocks() {
    for (const clock of worldClocks) {
        let currentTime;

        // Try API first if enabled
        if (useAPITime && !apiTimeCache[clock.id]) {
            const apiResult = await fetchTimeFromAPI(clock.timezone);
            if (apiResult.success) {
                apiTimeCache[clock.id] = {
                    time: apiResult.datetime,
                    fetchedAt: Date.now()
                };
                currentTime = apiResult.datetime;
            } else {
                // Fallback to client-side calculation
                useAPITime = false;
                currentTime = getLocalCalculatedTime(clock.offset);
            }
        } else if (apiTimeCache[clock.id]) {
            // Use cached API time and increment
            const cached = apiTimeCache[clock.id];
            const elapsedMs = Date.now() - cached.fetchedAt;
            currentTime = new Date(cached.time.getTime() + elapsedMs);
        } else {
            // Use fallback calculation
            currentTime = getLocalCalculatedTime(clock.offset);
        }

        updateClockDisplay(clock.id, currentTime, clock.offset);
    }
}

// Monthly Forecast Generator
function generateMonthlyForecast(nameHash, birthMonth) {
    const energyIcons = ['⚡', '🌟', '💫', '✨', '🔥', '💎', '🌈', '⭐', '💪', '🎯', '🚀', '🌙'];
    const energyDescriptions = [
        'High energy month - Take bold actions',
        'Lucky period - Opportunities abound',
        'Reflection time - Plan strategically',
        'Creative peak - Express yourself',
        'Social connections - Network actively',
        'Financial focus - Invest wisely',
        'Health priority - Self-care month',
        'Career advancement - Push forward',
        'Learning phase - Skill development',
        'Relationship growth - Nurture bonds',
        'Adventure time - Explore new paths',
        'Spiritual growth - Inner peace'
    ];

    const forecast = [];
    for (let i = 0; i < 12; i++) {
        const energyIndex = (nameHash + birthMonth + i) % energyIcons.length;
        forecast.push({
            energy: energyIcons[energyIndex],
            description: energyDescriptions[energyIndex]
        });
    }
    return forecast;
}

function getMonthName(index) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[index];
}

// Make functions global
window.generateFortune = generateFortune;
window.resetFortune = resetFortune;
