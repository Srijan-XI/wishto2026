# 🎉 New Year 2026 - Welcome to 2026!

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-production-success.svg)]()

> A premium, interactive New Year celebration web application with enterprise-level security and modern modular architecture.

**Live Demo**: [wishto2026.netlify.app](https://github.com/Srijan-XI/wishto2026)  
**Repository**: [github.com/Srijan-XI/wishto2026](https://github.com/Srijan-XI/wishto2026)

---

## 📋 Project Overview

**New Year 2026** is a feature-rich, secure web application that combines stunning visual effects with interactive features to celebrate the arrival of 2026. Built with modern web technologies and following best practices for security, accessibility, and performance.

### 🌟 Highlights

- **🔒 Enterprise Security**: Comprehensive XSS protection and input sanitization
- **📦 Modular Architecture**: Clean ES6 modules for maintainability
- **🎨 Premium Design**: Glassmorphism with vibrant gradients
- **📱 Mobile-First**: Optimized for all devices with touch support
- **♿ Accessible**: WCAG compliant with ARIA support
- **⚡ Performant**: 60fps animations with optimized rendering

---

## 📁 Project Structure

```
New_Year/
├── index.html              # Main HTML page
├── styles.css              # Complete styling (44KB)
├── script.js               # Main application (ES6 modules)
│
├── js/                     # Modular JavaScript
│   ├── utils.js           # Security & utilities (6.5KB)
│   ├── animations.js      # Visual effects (10.4KB)
│   ├── countdown.js       # Timers & counters (4.8KB)
│   └── interactions.js    # User interactions (14KB)
│
├── docs/                   # Documentation
│   ├── MODULES.md         # Module reference
│   └── IMPLEMENTATION-SUMMARY.md
│
├── README.md              # Project overview (this file)
├── CHANGELOG.md           # Version history
├── SECURITY.md            # Security guide
└── LICENSE                # MIT License
```

---

## ✨ Features

### Core Features
- ⏰ **Real-time Countdown** - Live countdown to January 1, 2026
- 🎆 **Interactive Fireworks** - Canvas-based fireworks animation
- �🎯 **Resolution Tracker** - Track 6 goal categories with progress
- 💌 **Wishes System** - Submit and display New Year wishes
- 💬 **Quotes Carousel** - Auto-rotating inspirational quotes
- 📅 **Memories Gallery** - 2025 year in review
- 📊 **Timeline 2026** - Year milestones visualization
- 📞 **Contact Form** - Validated contact form
- ⬆️ **Back to Top** - Smooth scroll to top button

### Design Features
- ✨ Premium glassmorphism UI
- 🎨 Vibrant gradient color palette
- 🌊 Smooth CSS animations
- ⚡ Particle background system
- 🎭 Floating celebration elements
- 📱 Fully responsive design

### Technical Features
- 🔒 **Comprehensive Input Sanitization**
- 🛡️ **XSS Protection** (6 security functions)
- ✅ **Form Validation** with length constraints
- 📳 **Haptic Feedback** for mobile devices
- ♿ **ARIA Compliance** for accessibility
- 💾 **LocalStorage Ready** for data persistence

## 🎨 Features by Module

<table>
<tr>
<td width="50%">

### 🔧 utils.js
- Debounce function
- Input sanitization
- Smooth scrolling
- Touch feedback
- Local storage
- Haptic feedback
- Event tracking

</td>
<td width="50%">

### ✨ animations.js
- Particle system (50 particles)
- Fireworks canvas
- Confetti bursts
- Celebration effects
- Resolution animations

</td>
</tr>
<tr>
<td width="50%">

### ⏰ countdown.js
- New Year countdown
- Year progress bar
- Animated counters
- Statistics display

</td>
<td width="50%">

### 🎮 interactions.js
- Wishes submission
- Resolution tracker (6 categories)
- Quotes carousel (4 quotes + swipe)
- Contact form validation
- Back to top button

</td>
</tr>
</table>

---

## 🔒 Security Features

### Input Sanitization Functions

| Function | Purpose | Protection |
|----------|---------|------------|
| `sanitizeInput()` | XSS prevention | Script tags, event handlers, protocols |
| `sanitizeHTML()` | Safe HTML rendering | Whitelist-based tag filtering |
| `sanitizeEmail()` | Email validation | Format, length, encoding |
| `sanitizeURL()` | URL validation | Protocol whitelisting |
| `escapeHTML()` | Entity encoding | HTML special characters |
| `validateLength()` | DoS prevention | Min/max constraints |

### Validation Rules

```javascript
Wishes:  3-200 characters, XSS sanitized
Name:    2-50 characters, letters/spaces/hyphens only
Email:   5-100 characters, RFC-compliant format
Message: 10-1000 characters, fully sanitized
```

**See [SECURITY.md](SECURITY.md) for complete security documentation.**

---

## 🛠️ Technology Stack

### Frontend
| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic markup |
| **CSS3** | Glassmorphism, Grid, Flexbox, Animations |
| **JavaScript ES6+** | Modular architecture |

### APIs & Libraries
- **Canvas API** - Fireworks rendering
- **Intersection Observer** - Scroll-triggered animations
- **Vibration API** - Haptic feedback
- **LocalStorage API** - Data persistence (ready)

### Design
- **Google Fonts** - Outfit & Playfair Display
- **SVG Icons** - Inline vector graphics
- **CSS Variables** - Dynamic theming
- **Gradients** - Purple, pink, blue, gold palette

---

## 🗺️ Module Architecture

```
┌─────────────────────┐
│   script.js         │  ← Main Entry Point
└──────────┬──────────┘
           │
           ├─────────────────────────┐
           │                         │
           ▼                         ▼
    ┌──────────────┐         ┌──────────────┐
    │ animations   │◄────────│  countdown   │
    │    .js       │         │    .js       │
    └──────┬───────┘         └──────┬───────┘
           │                        │
           │    ┌──────────────┐    │
           └───►│interactions  │◄───┘
                │    .js       │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │   utils      │
                │    .js       │
                └──────────────┘
```

### Module Responsibilities

**utils.js** - Security, helpers, utilities  
**animations.js** - Particles, fireworks, confetti  
**countdown.js** - Timers, progress tracking  
**interactions.js** - User inputs, forms, UI logic  

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/Srijan-XI/wishto2026.git
cd wishto2026
```

### 2. Run Locally
```bash
# Option 1: Simple HTTP server
npx serve

# Option 2: Python server
python -m http.server 8000

# Option 3: VS Code Live Server
# Just right-click index.html and select "Open with Live Server"
```

### 3. Open in Browser
```
http://localhost:5000
# or your server's port
```

**Note**: A local server is required for ES6 modules to work properly.

---

## 📱 Responsive Design

### Breakpoints
```css
Mobile:    max-width: 480px   (Phones)
Tablet:    max-width: 768px   (Tablets)
Desktop:   min-width: 1024px  (Desktops)
Landscape: max-height: 600px  (Landscape orientation)
```

### Mobile Optimizations
- ✅ Touch-optimized buttons (min 48px)
- ✅ Swipe gestures for carousel
- ✅ Reduced particle count (50 → 25)
- ✅ Haptic feedback
- ✅ Auto-scroll to focused inputs
- ✅ Prevent zoom on inputs (font-size: 16px)

---

## 🎨 Color Palette

```css
Primary:    #667eea → #764ba2  (Purple gradient)
Secondary:  #f093fb → #f5576c  (Pink gradient)
Accent:     #4facfe → #00f2fe  (Blue gradient)
Gold:       #f6d365 → #fda085  (Orange gradient)
Background: #0a0a0f            (Dark theme)
```

---

## 🧪 Testing

### Functionality Checklist
- ✅ Page loads without errors
- ✅ Countdown updates every second
- ✅ Wishes can be submitted
- ✅ Resolutions update progress
- ✅ Quotes carousel auto-rotates
- ✅ Contact form validates inputs
- ✅ Fireworks launch on button click
- ✅ Back to top button appears on scroll

### Security Checklist
- ✅ XSS attempts are blocked
- ✅ Script tags are removed
- ✅ Event handlers are stripped
- ✅ URL protocols are validated
- ✅ Length limits are enforced
- ✅ Email format is checked

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [README.md](README.md) | Project overview (this file) |
| [CHANGELOG.md](CHANGELOG.md) | Version history & changes |
| [SECURITY.md](SECURITY.md) | Security implementation guide |
| [docs/MODULES.md](docs/MODULES.md) | Module API reference |
| [docs/IMPLEMENTATION-SUMMARY.md](docs/IMPLEMENTATION-SUMMARY.md) | Implementation details |

---

## 🎓 Learning Resources

- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) - JavaScript modules
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Drawing graphics
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - Scroll animations
- [OWASP XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) - Security guide

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**srijan-xi**  
Portfolio: [srijanxi.netlify.app](https://srijanxi.netlify.app/)  
GitHub: [@Srijan-XI](https://github.com/Srijan-XI)

---

## 🙏 Acknowledgments

- Google Fonts for Outfit & Playfair Display
- MDN Web Docs for excellent documentation
- OWASP for security best practices
- The open-source community

---

## 📊 Project Stats

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Files](https://img.shields.io/badge/files-10-green.svg)
![Lines of Code](https://img.shields.io/badge/lines-4000+-orange.svg)
![Security](https://img.shields.io/badge/security-5%2F5-success.svg)

---

**Created with ❤️ and ✨ by [srijan-xi](https://srijanxi.netlify.app/)**  
**Happy New Year 2026! 🎉**

