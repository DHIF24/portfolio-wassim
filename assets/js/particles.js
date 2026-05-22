/**
 * PARTICLES.JS
 * Canvas particle/grid animation for hero background
 */

// ============================================
// CONFIGURATION
// ============================================

const PARTICLE_CONFIG = {
    // Number of particles
    particleCount: 100,
    
    // Particle size range
    minSize: 1,
    maxSize: 3,
    
    // Particle speed range
    minSpeed: 0.2,
    maxSpeed: 0.8,
    
    // Connection distance for drawing lines
    connectionDistance: 120,
    
    // Mouse interaction distance
    mouseDistance: 150,
    
    // Colors
    particleColor: 'rgba(0, 229, 255, 0.8)',
    lineColor: 'rgba(0, 229, 255, 0.2)',
    
    // Whether to show grid lines
    showGrid: true,
    
    // Grid spacing
    gridSpacing: 50,
    
    // Grid color
    gridColor: 'rgba(0, 229, 255, 0.05)'
};

// ============================================
// DOM ELEMENTS
// ============================================

const canvas = document.getElementById('hero-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

// ============================================
// STATE VARIABLES
// ============================================

let particles = [];
let animationId;
let mouse = { x: null, y: null };
let canvasWidth, canvasHeight;

// ============================================
// PARTICLE CLASS
// ============================================

class Particle {
    constructor() {
        this.reset();
    }
    
    /**
     * Reset particle to random position and velocity
     */
    reset() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * (PARTICLE_CONFIG.maxSize - PARTICLE_CONFIG.minSize) + PARTICLE_CONFIG.minSize;
        this.speedX = (Math.random() - 0.5) * (PARTICLE_CONFIG.maxSpeed - PARTICLE_CONFIG.minSpeed) + PARTICLE_CONFIG.minSpeed;
        this.speedY = (Math.random() - 0.5) * (PARTICLE_CONFIG.maxSpeed - PARTICLE_CONFIG.minSpeed) + PARTICLE_CONFIG.minSpeed;
        this.opacity = Math.random() * 0.5 + 0.5;
    }
    
    /**
     * Update particle position
     */
    update() {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around screen edges
        if (this.x < 0) this.x = canvasWidth;
        if (this.x > canvasWidth) this.x = 0;
        if (this.y < 0) this.y = canvasHeight;
        if (this.y > canvasHeight) this.y = 0;
        
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < PARTICLE_CONFIG.mouseDistance) {
                const force = (PARTICLE_CONFIG.mouseDistance - distance) / PARTICLE_CONFIG.mouseDistance;
                const directionX = dx / distance;
                const directionY = dy / distance;
                
                // Push particle away from mouse
                this.x -= directionX * force * 2;
                this.y -= directionY * force * 2;
            }
        }
    }
    
    /**
     * Draw particle
     */
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_CONFIG.particleColor;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

// ============================================
// CANVAS FUNCTIONS
// ============================================

/**
 * Set canvas size to match window
 */
function resizeCanvas() {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    // Reinitialize particles on resize
    initParticles();
}

/**
 * Initialize particles
 */
function initParticles() {
    particles = [];
    
    for (let i = 0; i < PARTICLE_CONFIG.particleCount; i++) {
        particles.push(new Particle());
    }
}

/**
 * Draw grid lines
 */
function drawGrid() {
    if (!PARTICLE_CONFIG.showGrid) return;
    
    ctx.strokeStyle = PARTICLE_CONFIG.gridColor;
    ctx.lineWidth = 1;
    
    // Vertical lines
    for (let x = 0; x <= canvasWidth; x += PARTICLE_CONFIG.gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
    }
    
    // Horizontal lines
    for (let y = 0; y <= canvasHeight; y += PARTICLE_CONFIG.gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
    }
}

/**
 * Draw connections between nearby particles
 */
function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < PARTICLE_CONFIG.connectionDistance) {
                const opacity = 1 - (distance / PARTICLE_CONFIG.connectionDistance);
                ctx.beginPath();
                ctx.strokeStyle = PARTICLE_CONFIG.lineColor;
                ctx.globalAlpha = opacity;
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
    }
}

/**
 * Animation loop
 */
function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Draw grid
    drawGrid();
    
    // Update and draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    // Draw connections
    drawConnections();
    
    // Continue animation
    animationId = requestAnimationFrame(animate);
}

/**
 * Start particle animation
 */
function startAnimation() {
    if (!animationId) {
        animate();
        console.log('Particle animation started');
    }
}

/**
 * Stop particle animation
 */
function stopAnimation() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
        console.log('Particle animation stopped');
    }
}

// ============================================
// MOUSE EVENT HANDLERS
// ============================================

/**
 * Handle mouse move
 */
function handleMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

/**
 * Handle mouse leave
 */
function handleMouseLeave() {
    mouse.x = null;
    mouse.y = null;
}

// ============================================
// ADVANCED FEATURES
// ============================================

/**
 * Change particle count
 * @param {number} count - New particle count
 */
function setParticleCount(count) {
    PARTICLE_CONFIG.particleCount = count;
    initParticles();
}

/**
 * Change connection distance
 * @param {number} distance - New connection distance
 */
function setConnectionDistance(distance) {
    PARTICLE_CONFIG.connectionDistance = distance;
}

/**
 * Toggle grid visibility
 */
function toggleGrid() {
    PARTICLE_CONFIG.showGrid = !PARTICLE_CONFIG.showGrid;
}

/**
 * Change particle color
 * @param {string} color - New particle color
 */
function setParticleColor(color) {
    PARTICLE_CONFIG.particleColor = color;
}

/**
 * Change line color
 * @param {string} color - New line color
 */
function setLineColor(color) {
    PARTICLE_CONFIG.lineColor = color;
}

/**
 * Add explosion effect at position
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {number} count - Number of particles to add
 */
function createExplosion(x, y, count = 20) {
    for (let i = 0; i < count; i++) {
        const particle = new Particle();
        particle.x = x;
        particle.y = y;
        particle.speedX = (Math.random() - 0.5) * 5;
        particle.speedY = (Math.random() - 0.5) * 5;
        particles.push(particle);
    }
    
    // Remove extra particles after animation
    setTimeout(() => {
        particles.splice(0, count);
    }, 2000);
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize particle system
 */
function initParticles() {
    if (!canvas || !ctx) {
        console.warn('Canvas not found');
        return;
    }
    
    // Set canvas size
    resizeCanvas();
    
    // Initialize particles
    particles = [];
    for (let i = 0; i < PARTICLE_CONFIG.particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Add event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Start animation
    startAnimation();
    
    console.log('Particles.js initialized successfully');
}

// ============================================
// RUN INITIALIZATION WHEN DOM IS READY
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
} else {
    initParticles();
}

// ============================================
// EXPORT FUNCTIONS FOR EXTERNAL USE
// ============================================

// Make functions available globally if needed
window.ParticleUtils = {
    startAnimation,
    stopAnimation,
    setParticleCount,
    setConnectionDistance,
    toggleGrid,
    setParticleColor,
    setLineColor,
    createExplosion
};
