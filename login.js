// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'home.html';
        return;
    }
    
    initializeLoginPage();
});

function initializeLoginPage() {
    // Initialize navigation
    initNavigation();
    
    // Initialize form handling
    initFormHandling();
    
    // Create floating shapes
    createFloatingShapes();
    
    // Add input animations
    initInputAnimations();
}

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.2)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.1)';
                navbar.style.backdropFilter = 'blur(15px)';
            }
        }
    });
    
    // Update navigation for login status
    updateNavigationForLogin();
}

// Create floating shapes
function createFloatingShapes() {
    const container = document.querySelector('.floating-shapes');
    if (!container) return;
    
    // Create shapes (same as register page)
    const shapes = [
        { class: 'shape-1', size: 150 },
        { class: 'shape-2', size: 100 },
        { class: 'shape-3', size: 120 },
        { class: 'shape-4', size: 80 }
    ];
    
    shapes.forEach(shape => {
        const element = document.createElement('div');
        element.className = `shape ${shape.class}`;
        element.style.width = `${shape.size}px`;
        element.style.height = `${shape.size}px`;
        container.appendChild(element);
    });
}

// Form handling
function initFormHandling() {
    const loginForm = document.querySelector('.login-form');
    const loginBtn = document.querySelector('.login-btn');

    if (!loginForm) return;

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            email: this.querySelector('input[type="email"]').value,
            password: this.querySelector('input[type="password"]').value
        };

        // Simple validation
        if (validateLoginForm(formData)) {
            // Store login status in localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', formData.email);
            
            // Update navigation immediately
            updateNavigationForLogin();
            
            // Show success message
            showSuccessMessage('Welcome to Spectrum 2025! 🎉');
            
            // Add celebration effect
            celebrateLogin();
            
            // Reset form
            this.reset();
            
            // Redirect to dashboard after 2 seconds
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 2000);
        }
    });

    // Real-time validation
    const inputs = loginForm.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

// Update navigation based on login status
function updateNavigationForLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginLink = document.querySelector('.nav-link[href="index.html"]');
    
    if (loginLink && isLoggedIn) {
        // Change login link to logout
        loginLink.innerHTML = '<i class="fas fa-sign-out-alt"></i><span>Logout</span>';
        loginLink.href = '#';
        loginLink.onclick = function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userEmail');
                window.location.href = 'index.html';
            }
        };
    }
}

// Form validation
function validateLoginForm(data) {
    if (!data.email.trim() || !isValidEmail(data.email)) {
        showError('Please enter a valid email address');
        return false;
    }

    if (!data.password) {
        showError('Please enter your password');
        return false;
    }

    return true;
}

// Field validation
function validateField(field) {
    const value = field.value.trim();
    
    if (!value) {
        field.style.borderColor = '#ff6b6b';
        return false;
    }

    if (field.type === 'email' && !isValidEmail(value)) {
        field.style.borderColor = '#ff6b6b';
        return false;
    }

    field.style.borderColor = '#98fb98';
    return true;
}

// Helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message
function showError(message) {
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff6b6b, #ff9ec0);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        font-weight: 500;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Show success message
function showSuccessMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #b19cd9, #ff9ec0);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        font-weight: 500;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Celebration effect
function celebrateLogin() {
    const loginBtn = document.querySelector('.login-btn');
    if (!loginBtn) return;
    
    // Change button text temporarily
    const originalText = loginBtn.querySelector('.btn-text').textContent;
    loginBtn.querySelector('.btn-text').textContent = 'Welcome! 🎉';
    loginBtn.style.background = 'linear-gradient(45deg, #98fb98, #90ee90)';
    
    // Reset button after 2 seconds
    setTimeout(() => {
        loginBtn.querySelector('.btn-text').textContent = originalText;
        loginBtn.style.background = 'linear-gradient(45deg, #b19cd9, #ff9ec0)';
    }, 2000);
}

// Input animations
function initInputAnimations() {
    const inputs = document.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// Global function to check login status (for other pages)
function checkLoginStatus() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Global function to get user email
function getUserEmail() {
    return localStorage.getItem('userEmail') || '';
}