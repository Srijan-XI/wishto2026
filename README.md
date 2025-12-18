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


```
┌─────────────────────┐
│   script.js     │  ← Main Entry Point
│   (Application)     │
└──────────┬──────────┘
           │
           ├─────────────────────────────────┐
           │                                 │
           ▼                                 ▼
    ┌─────────────┐                  ┌─────────────┐
    │ animations  │◄─────────────────│  countdown  │
    │    .js      │                  │    .js      │
    └──────┬──────┘                  └──────┬──────┘
           │                                │
           │                                │
           │         ┌─────────────┐        │
           └────────►│interactions │◄───────┘
                     │    .js      │
                     └──────┬──────┘
                            │
                            ▼
                     ┌─────────────┐
                     │   utils     │
                     │    .js      │
                     └─────────────┘
```

## 🎨 Features by Module

| 🔧 **utils.js** | ✨ **animations.js** |
|-----------------|---------------------|
| • Debounce function<br>• Input sanitization<br>• Smooth scrolling<br>• Touch feedback<br>• Local storage<br>• Haptic feedback<br>• Event tracking | • Particle system (50 particles)<br>• Fireworks canvas<br>• Confetti bursts<br>• Celebration effects<br>• Resolution animations |

| ⏰ **countdown.js** | 🎮 **interactions.js** |
|---------------------|------------------------|
| • New Year countdown<br>• Year progress bar<br>• Animated counters<br>• Statistics display | • Wishes submission<br>• Resolution tracker (6 categories)<br>• Quotes carousel (4 quotes + swipe)<br>• Contact form validation<br>• Back to top button |

## 🎯 Key Features

### ✅ Already Implemented
- ✨ Premium glassmorphism design
- 🎆 Interactive fireworks
- ⏰ Real-time countdown to 2026
- 🎯 Resolution tracker (6 categories)
- 💌 Wishes submission system
- 💬 Quotes carousel with auto-play
- 📅 2025 memories gallery
- 📊 Year timeline
- 📞 Contact form with validation
- ⬆️ Back to top button
- 📱 Mobile optimized with touch support
- ♿ Accessibility features (ARIA, keyboard nav)
- 💾 Local storage ready
- 📳 Haptic feedback
- 🎨 Smooth animations throughout
- 🔒 **Comprehensive input sanitization** 
- 🛡️ **XSS protection** 
- ✅ **Form validation with length constraints** 

## 🔒 Security Features

### Input Sanitization
- **XSS Protection**: All user inputs sanitized against script injection
- **HTML Encoding**: Special characters properly escaped
- **Protocol Validation**: URLs checked for dangerous protocols
- **Length Validation**: All inputs have min/max constraints
- **Email Validation**: RFC-compliant email checking
- **Event Handler Stripping**: Removes onclick, onerror, etc.

### Validation Rules
- **Wishes**: 3-200 characters, sanitized
- **Name**: 2-50 characters, letters/spaces/hyphens only
- **Email**: 5-100 characters, valid format
- **Message**: 10-1000 characters, sanitized

See [SECURITY.md](SECURITY.md) for complete security documentation.

### 🚀 Ready to Add
- 🌓 Dark/Light theme toggle
- 📤 Social sharing
- 📥 Export resolutions as PDF
- 🔔 Browser notifications
- 🎵 Sound effects
- 📊 Analytics integration
- 🌐 PWA support
- 🔒 Enhanced security

## 🎭 User Journey

```
1. Landing
   └─► Hero section with 2025 → 2026 transition
       └─► Floating elements & particles

2. Countdown
   └─► Live timer to Jan 1, 2026
       └─► Year progress bar

3. Goals & Dreams
   └─► Feature cards with hover effects
       └─► Animated statistics

4. Wishes
   └─► User can submit wishes
       └─► Confetti animation on submit

5. Resolutions
   └─► 6 tracked categories
       └─► Click to update progress
           └─► 100% triggers celebration

6. Memories of 2025
   └─► Timeline of key moments
       └─► Staggered animations

7. Inspirational Quotes
   └─► Auto-rotating carousel
       └─► Swipe support on mobile

8. Timeline 2026
   └─► Vertical timeline with milestones
       └─► Hover effects

9. Contact
   └─► Validated form
       └─► Real-time error checking
```

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - CSS Grid & Flexbox
  - Custom Properties
  - Animations & Transitions
  - Glassmorphism
  - Responsive Design

### JavaScript
- **ES6+ Modules** - Modern JS
- **Canvas API** - Fireworks
- **Intersection Observer** - Scroll animations
- **LocalStorage API** - Data persistence
- **Vibration API** - Haptic feedback

### Design
- **Google Fonts** - Outfit & Playfair Display
- **Color Palette** - Gradient-based theme
- **Icons** - SVG inline
- **Emojis** - Unicode characters

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) { ... }

/* Tablet */
@media (max-width: 768px) { ... }

/* Mobile */
@media (max-width: 480px) { ... }

/* Landscape */
@media (max-height: 600px) and (orientation: landscape) { ... }

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) { ... }
```

## 🎨 Color Scheme

```css
Primary:    #667eea → #764ba2 (Purple gradient)
Secondary:  #f093fb → #f5576c (Pink gradient)
Accent:     #4facfe → #00f2fe (Blue gradient)
Gold:       #f6d365 → #fda085 (Gold gradient)
Dark BG:    #0a0a0f (Almost black)
```

## 🚀 Performance

- Debounced scroll events
- Reduced particles on mobile (50 → 25)
- Lazy initialization
- CSS containment
- GPU-accelerated animations
- Intersection Observer for lazy animations

## 📝 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Srijan-XI/wishto2026.git
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html
   # Or use a local server for modules to work
   npx serve
   ```

3. **Customize**
   - Edit content in `index.html`
   - Modify styles in `styles.css`
   - Add features in `js/` modules

## 🎓 Learning Resources

- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

**Created with ❤️ by srijan-xi**
**Happy New Year 2026! 🎉**
