# 🚀 How to Run the Project

## Quick Start (3 Options)

### Option 1: Simple Python Server (Recommended)
```bash
# Navigate to project directory
cd "p:\CODE-X\New_Year"

# Run Python server (Python 3)
python -m http.server 8000

# Open browser to:
http://localhost:8000
```

### Option 2: Node.js HTTP Server
```bash
# Install http-server globally (one time)
npm install -g http-server

# Navigate to project directory
cd "p:\CODE-X\New_Year"

# Run server
http-server -p 8000

# Open browser to:
http://localhost:8000
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Automatically opens in browser

## Why Use a Local Server?

When opening HTML files directly (`file://` protocol), browsers block:
- ✗ ES6 module imports (CORS policy)
- ✗ Some JavaScript features
- ✗ Font loading from URLs
- ✗ Fetch requests

With a local server (`http://localhost`):
- ✓ All JavaScript modules work
- ✓ Particles and fireworks animate
- ✓ Full interactive features
- ✓ Proper font rendering
- ✓ Optimal performance

## What Works Without a Server?

Even without a server (opening `index.html` directly):
- ✓ All HTML and CSS
- ✓ Basic navigation links
- ✓ Responsive layout
- ✓ Most styling and animations
- ✓ Smooth scrolling (2025.html has fallback)
- ✗ Particle effects (requires module loading)
- ✗ Fireworks canvas (requires module loading)

## Testing

After starting the server, verify:
1. Navigate to `http://localhost:8000`
2. Click "🚀 2025 Tech" in navigation
3. Test "Explore Updates" button (should scroll)
4. Test "Launch Animation" button (fireworks)
5. Test "Back to Home" button
6. Check console for errors (F12)

## Troubleshooting

### Port Already in Use
```bash
# Use different port
python -m http.server 8080
# Then open: http://localhost:8080
```

### Python Not Found
- Install Python from python.org
- Or use Node.js option instead

### Module Errors in Console
- Must use local server (not file://)
- Check all files are in same directory
- Verify script.js and js/ folder exist

## Production Deployment

For hosting online:
1. Upload all files to web host
2. Ensure directory structure is maintained
3. Test on actual domain
4. No server needed (web host provides HTTP)

---

**Note**: The 2025.html page has fallback JavaScript that allows basic navigation and scrolling to work even without a server, but for the full experience with animations, use a local server!
