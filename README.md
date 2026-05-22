# Mohamed Wassim Garali - Portfolio Website

A professional, visually stunning personal portfolio website for Mohamed Wassim Garali, a BI & Data Analyst from Tunisia. Built with a dark "data-terminal" aesthetic featuring animated particles, smooth scroll animations, and interactive elements.

## 🎨 Design Features

- **Dark Theme**: Sophisticated dark background (#0d0f14) with electric cyan (#00e5ff) and neon green (#39ff14) accents
- **Data-Terminal Aesthetic**: Inspired by data dashboards, terminals, and analytics UIs
- **Animated Hero Background**: Canvas-based particle grid animation with mouse interaction
- **Typing Animation**: Dynamic subtitle cycling through professional titles
- **Scroll Animations**: Intersection Observer-powered reveal effects
- **Glass-Morphism Navbar**: Fixed navigation with backdrop blur effect
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **Noise Texture Overlay**: Subtle depth effect for visual richness

## 📁 Project Structure

```
portfolio-wassim/
│
├── index.html                  # Main entry point with all sections
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Global styles, variables, reset
│   │   ├── animations.css      # All keyframes and transitions
│   │   └── responsive.css      # Media queries for mobile/tablet
│   │
│   ├── js/
│   │   ├── main.js             # Init, scroll behavior, navbar toggle
│   │   ├── animations.js       # Intersection Observer, reveal effects
│   │   ├── typing.js           # Typing effect for hero subtitle
│   │   └── particles.js        # Canvas particle/grid animation (hero bg)
│   │
│   ├── images/
│   │   └── profile.jpg         # Placeholder for profile photo
│   │
│   └── fonts/                  # Optional local fonts
│
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. **Clone or download** the project files to your local machine

2. **Navigate** to the project directory:
   ```bash
   cd "portfolio wassim"
   ```

3. **Open** `index.html` in your web browser

### Using a Local Web Server (Recommended)

For the best experience, especially with canvas animations and smooth scrolling, use a local web server:

#### Option 1: Python Simple HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js HTTP Server
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Run the server
http-server -p 8000
```

#### Option 3: VS Code Live Server Extension
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

Then open your browser and navigate to `http://localhost:8000`

## 📄 Sections Overview

### 1. Navigation Bar
- Fixed top with glass-morphism effect
- Logo: "Wassim.dev" in accent color
- Navigation links: About, Skills, Experience, Projects, Contact
- Mobile hamburger menu
- Active section highlighting on scroll

### 2. Hero Section
- Full-screen height with animated particle grid background
- Large heading: "Mohamed Wassim Garali"
- Typing animation subtitle cycling through professional titles
- Tagline: "Turning raw data into strategic decisions."
- Two CTA buttons: "View Projects" and "Download CV"
- Scroll down indicator

### 3. About Section
- Two-column layout with profile image placeholder and bio
- Professional summary
- Location and availability status
- Stats row: internships, projects, BI tools, languages

### 4. Technical Skills Section
- Categorized skills with icons:
  - Business Intelligence (Power BI, Tableau, Excel, Google Data Studio)
  - Data Engineering & ETL (SSIS, SSAS, Talend, PySpark, Hadoop)
  - Development (Python, SQL, FastAPI, Streamlit, Java, JavaScript)
  - AI & LLM (LLM APIs, Prompt Engineering, NLP, Chatbot Dev)
  - Databases (SQL Server, MySQL, Azure Data Studio)
  - Data Modeling (Data Warehouse, Star Schema)
  - Tools & Methods (Agile, Git/GitHub, Odoo CRM)
- Hover tooltips for skill descriptions
- Glowing tag badges

### 5. Experience Section
- Vertical timeline layout with animated entries
- BI & AI Developer Intern at B2M-IT (02/2026 – 06/2026)
- Data Engineering Intern at B2M IT (07/2025 – 08/2025)

### 6. Projects Section
- Card grid with hover effects
- Enterprise Data Warehouse for BBT
- NYC Yellow Taxi Trips Analysis
- Sales ETL Pipeline & Analysis
- Technology tags for each project

### 7. Education Section
- Master's in Information Systems & Knowledge Engineering
- Bachelor in IT / DSI

### 8. Contact Section
- Contact information (email, phone, location, LinkedIn)
- Functional contact form (frontend only)
- Social media links

### 9. Footer
- Copyright notice
- Back to top button

## 🎨 Customization

### Colors

Edit CSS custom properties in `assets/css/style.css`:

```css
:root {
    --bg-primary: #0d0f14;
    --bg-secondary: #14161b;
    --accent-primary: #00e5ff;
    --accent-secondary: #39ff14;
    /* ... more variables */
}
```

### Typography

Fonts are loaded from Google Fonts. To change fonts:

1. Update the Google Fonts link in `index.html`
2. Update font variables in `assets/css/style.css`:
```css
:root {
    --font-display: 'DM Serif Display', serif;
    --font-mono: 'JetBrains Mono', monospace;
    --font-body: 'Inter', sans-serif;
}
```

### Typing Animation

Edit the typing texts in `assets/js/typing.js`:

```javascript
const TYPING_CONFIG = {
    texts: [
        'BI Developer',
        'Data Analyst',
        'Power BI Expert',
        'ETL Engineer'
    ],
    // ... other config options
};
```

### Particle Animation

Adjust particle settings in `assets/js/particles.js`:

```javascript
const PARTICLE_CONFIG = {
    particleCount: 100,
    minSize: 1,
    maxSize: 3,
    connectionDistance: 120,
    // ... more config options
};
```

### Profile Image

Replace the placeholder in `assets/images/`:
1. Add your profile photo as `profile.jpg` in `assets/images/`
2. Update the image source in `index.html`:
```html
<img src="assets/images/profile.jpg" alt="Mohamed Wassim Garali">
```

### Contact Form

The contact form is currently frontend-only. To add backend functionality:

1. Choose a backend service (Formspree, Netlify Forms, EmailJS, etc.)
2. Update the form action in `index.html`:
```html
<form action="YOUR_FORM_ENDPOINT" method="POST">
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **Vanilla JavaScript**: No frameworks or libraries
- **Canvas API**: Particle animation
- **Intersection Observer API**: Scroll-triggered animations
- **Google Fonts**: DM Serif Display, JetBrains Mono, Inter

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🌐 Features

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Animated particle background
- ✅ Typing animation effect
- ✅ Scroll-triggered reveal animations
- ✅ Interactive skill tags with tooltips
- ✅ Mobile hamburger menu
- ✅ Back to top button
- ✅ Contact form with validation
- ✅ Social media links
- ✅ Accessibility considerations
- ✅ Performance optimized
- ✅ Print-friendly styles

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for interactive elements
- Reduced motion support for users who prefer it
- High contrast mode support

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 About

**Mohamed Wassim Garali**
- BI & Data Analyst
- Location: Nabeul, Tunisia
- Email: wassim.garali@gmail.com
- Phone: +216 21140019
- LinkedIn: mohamed-wassim-garali

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For questions or issues, please contact wassim.garali@gmail.com

---

Built with passion & data © 2026 Mohamed Wassim Garali
