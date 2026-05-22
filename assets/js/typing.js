/**
 * TYPING.JS
 * Typing animation effect for hero subtitle
 */

// ============================================
// CONFIGURATION
// ============================================

const TYPING_CONFIG = {
    // Array of texts to type
    texts: [
        'BI Developer',
        'Data Analyst',
        'Power BI Expert',
        'ETL Engineer'
    ],
    
    // Typing speed in milliseconds
    typingSpeed: 100,
    
    // Deleting speed in milliseconds
    deletingSpeed: 50,
    
    // Pause before deleting in milliseconds
    pauseBeforeDelete: 2000,
    
    // Pause before typing next text in milliseconds
    pauseBeforeType: 500,
    
    // Whether to loop the animation
    loop: true
};

// ============================================
// DOM ELEMENTS
// ============================================

const typingText = document.getElementById('typing-text');

// ============================================
// STATE VARIABLES
// ============================================

let textIndex = 0; // Index of current text in array
let charIndex = 0; // Index of current character being typed
let isDeleting = false; // Whether currently deleting
let isPaused = false; // Whether currently paused

// ============================================
// TYPING FUNCTIONS
// ============================================

/**
 * Type the next character
 */
function typeCharacter() {
    const currentText = TYPING_CONFIG.texts[textIndex];
    
    if (charIndex < currentText.length) {
        // Add next character
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        // Schedule next character
        setTimeout(typeCharacter, TYPING_CONFIG.typingSpeed);
    } else {
        // Finished typing current text
        isPaused = true;
        
        // Pause before deleting
        setTimeout(() => {
            isPaused = false;
            isDeleting = true;
            deleteCharacter();
        }, TYPING_CONFIG.pauseBeforeDelete);
    }
}

/**
 * Delete the current character
 */
function deleteCharacter() {
    const currentText = TYPING_CONFIG.texts[textIndex];
    
    if (charIndex > 0) {
        // Remove last character
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        // Schedule next deletion
        setTimeout(deleteCharacter, TYPING_CONFIG.deletingSpeed);
    } else {
        // Finished deleting current text
        isDeleting = false;
        
        // Move to next text
        textIndex++;
        
        // Check if we've gone through all texts
        if (textIndex >= TYPING_CONFIG.texts.length) {
            if (TYPING_CONFIG.loop) {
                textIndex = 0; // Loop back to first text
            } else {
                return; // Stop animation
            }
        }
        
        // Pause before typing next text
        isPaused = true;
        setTimeout(() => {
            isPaused = false;
            typeCharacter();
        }, TYPING_CONFIG.pauseBeforeType);
    }
}

/**
 * Start the typing animation
 */
function startTyping() {
    if (typingText) {
        typeCharacter();
        console.log('Typing animation started');
    }
}

/**
 * Stop the typing animation
 */
function stopTyping() {
    // This is a simple implementation - for more complex control,
    // you would need to store timeout IDs and clear them
    isPaused = true;
    console.log('Typing animation stopped');
}

/**
 * Reset the typing animation
 */
function resetTyping() {
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    isPaused = false;
    
    if (typingText) {
        typingText.textContent = '';
    }
    
    console.log('Typing animation reset');
}

/**
 * Restart the typing animation
 */
function restartTyping() {
    resetTyping();
    startTyping();
}

// ============================================
// CURSOR CONTROL
// ============================================

/**
 * Add blinking cursor effect
 */
function initCursor() {
    const cursor = document.querySelector('.typing-cursor');
    
    if (cursor) {
        // Cursor animation is handled in CSS via @keyframes blink
        // This function is for any additional cursor control if needed
        console.log('Cursor initialized');
    }
}

/**
 * Toggle cursor visibility
 * @param {boolean} visible - Whether cursor should be visible
 */
function toggleCursor(visible) {
    const cursor = document.querySelector('.typing-cursor');
    
    if (cursor) {
        cursor.style.opacity = visible ? '1' : '0';
    }
}

// ============================================
// ADVANCED FEATURES
// ============================================

/**
 * Change typing speed dynamically
 * @param {number} speed - New typing speed in milliseconds
 */
function setTypingSpeed(speed) {
    TYPING_CONFIG.typingSpeed = speed;
}

/**
 * Change deleting speed dynamically
 * @param {number} speed - New deleting speed in milliseconds
 */
function setDeletingSpeed(speed) {
    TYPING_CONFIG.deletingSpeed = speed;
}

/**
 * Add new text to the typing array
 * @param {string} text - Text to add
 */
function addText(text) {
    TYPING_CONFIG.texts.push(text);
}

/**
 * Remove text from the typing array
 * @param {number} index - Index of text to remove
 */
function removeText(index) {
    if (index >= 0 && index < TYPING_CONFIG.texts.length) {
        TYPING_CONFIG.texts.splice(index, 1);
    }
}

/**
 * Set custom texts for typing animation
 * @param {Array<string>} texts - Array of texts to type
 */
function setTexts(texts) {
    TYPING_CONFIG.texts = texts;
    resetTyping();
    startTyping();
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize typing animation
 */
function initTyping() {
    if (typingText) {
        // Initialize cursor
        initCursor();
        
        // Start typing animation
        startTyping();
        
        console.log('Typing.js initialized successfully');
    } else {
        console.warn('Typing element not found');
    }
}

// ============================================
// RUN INITIALIZATION WHEN DOM IS READY
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTyping);
} else {
    initTyping();
}

// ============================================
// EXPORT FUNCTIONS FOR EXTERNAL USE
// ============================================

// Make functions available globally if needed
window.TypingUtils = {
    startTyping,
    stopTyping,
    resetTyping,
    restartTyping,
    toggleCursor,
    setTypingSpeed,
    setDeletingSpeed,
    addText,
    removeText,
    setTexts
};
