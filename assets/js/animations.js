/**
 * ANIMATIONS.JS
 * Intersection Observer for scroll-triggered reveal animations
 */

// ============================================
// CONFIGURATION
// ============================================

const ANIMATION_CONFIG = {
    // Threshold for when to trigger animation (0-1)
    threshold: 0.1,
    
    // Root margin for triggering animations earlier/later
    rootMargin: '0px 0px -50px 0px',
    
    // Whether to animate only once or every time
    animateOnce: true
};

// ============================================
// DOM ELEMENTS
// ============================================

// Select all elements with reveal classes
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-bottom, .reveal-scale');

// ============================================
// INTERSECTION OBSERVER SETUP
// ============================================

/**
 * Create Intersection Observer for reveal animations
 */
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // When element enters viewport
        if (entry.isIntersecting) {
            // Add active class to trigger animation
            entry.target.classList.add('active');
            
            // If animateOnce is true, unobserve after animation
            if (ANIMATION_CONFIG.animateOnce) {
                observer.unobserve(entry.target);
            }
        } else if (!ANIMATION_CONFIG.animateOnce) {
            // Remove active class when element leaves viewport (if not animateOnce)
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: ANIMATION_CONFIG.threshold,
    rootMargin: ANIMATION_CONFIG.rootMargin
});

// ============================================
// ANIMATION FUNCTIONS
// ============================================

/**
 * Initialize reveal animations for all elements
 */
function initRevealAnimations() {
    revealElements.forEach(element => {
        // Add initial state if not already present
        if (!element.classList.contains('reveal') && 
            !element.classList.contains('reveal-left') &&
            !element.classList.contains('reveal-right') &&
            !element.classList.contains('reveal-bottom') &&
            !element.classList.contains('reveal-scale')) {
            element.classList.add('reveal');
        }
        
        // Observe element
        revealObserver.observe(element);
    });
    
    console.log(`Initialized reveal animations for ${revealElements.length} elements`);
}

/**
 * Manually trigger animation for an element
 * @param {HTMLElement} element - The element to animate
 */
function triggerAnimation(element) {
    if (element) {
        element.classList.add('active');
    }
}

/**
 * Reset animation for an element
 * @param {HTMLElement} element - The element to reset
 */
function resetAnimation(element) {
    if (element) {
        element.classList.remove('active');
    }
}

/**
 * Add staggered delay to elements
 * @param {NodeList} elements - Elements to add delay to
 * @param {number} baseDelay - Base delay in ms
 * @param {number} increment - Delay increment for each element
 */
function addStaggeredDelay(elements, baseDelay = 100, increment = 100) {
    elements.forEach((element, index) => {
        const delay = baseDelay + (index * increment);
        element.style.transitionDelay = `${delay}ms`;
    });
}

// ============================================
// SPECIAL ANIMATIONS
// ============================================

/**
 * Animate skill tags with staggered delay
 */
function animateSkillTags() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach((category, categoryIndex) => {
        const tags = category.querySelectorAll('.skill-tag');
        tags.forEach((tag, tagIndex) => {
            const delay = (categoryIndex * 200) + (tagIndex * 50);
            tag.style.transitionDelay = `${delay}ms`;
        });
    });
}

/**
 * Animate timeline items sequentially
 */
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 200}ms`;
    });
}

/**
 * Animate project cards with staggered delay
 */
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 150}ms`;
    });
}

/**
 * Animate education cards
 */
function animateEducationCards() {
    const educationCards = document.querySelectorAll('.education-card');
    
    educationCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 150}ms`;
    });
}

/**
 * Animate stats counter
 * Animates numbers from 0 to final value
 */
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        
        // Skip if not a number
        if (isNaN(numericValue)) return;
        
        // Check if element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(stat, 0, numericValue, 1500);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
}

/**
 * Animate counter from start to end value
 * @param {HTMLElement} element - The element to animate
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const suffix = element.textContent.replace(/\d/g, '').replace('+', '');
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end + suffix;
        }
    }
    
    requestAnimationFrame(update);
}

// ============================================
// PARALLAX EFFECT
// ============================================

/**
 * Add subtle parallax effect to elements
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.parallax) || 0.5;
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ============================================
// HOVER EFFECTS
// ============================================

/**
 * Add magnetic effect to buttons
 * Buttons slightly follow cursor
 */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all animations
 */
function initAnimations() {
    // Initialize reveal animations
    initRevealAnimations();
    
    // Initialize special animations
    animateSkillTags();
    animateTimeline();
    animateProjectCards();
    animateEducationCards();
    animateStats();
    
    // Initialize parallax
    initParallax();
    
    // Initialize magnetic buttons
    initMagneticButtons();
    
    console.log('Animations.js initialized successfully');
}

// ============================================
// RUN INITIALIZATION WHEN DOM IS READY
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}

// ============================================
// EXPORT FUNCTIONS FOR EXTERNAL USE
// ============================================

// Make functions available globally if needed
window.AnimationUtils = {
    triggerAnimation,
    resetAnimation,
    addStaggeredDelay,
    animateCounter
};
