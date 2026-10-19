// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}

// navbar.js - Improved version
document.addEventListener('DOMContentLoaded', function() {
    console.log('Navbar JS loaded'); // Debug line
    
    // Update navigation based on login status
    updateNavigationForLogin();
    
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (mobileToggle) {
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }
    
    // Improved active page detection
    function setActivePage() {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        console.log('Current page:', currentPage); // Debug line
        
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            // Remove active class from all links
            link.classList.remove('active');
            
            // Get the href attribute
            const href = link.getAttribute('href');
            
            console.log('Checking link:', href); // Debug line
            
            // Check if this link's href matches current page
            if (href === currentPage) {
                link.classList.add('active');
                console.log('Active link set:', href); // Debug line
            }
        });
    }
    
    // Set active page on load
    setActivePage();
    
    // Also set active page when navigating (for single page apps)
    window.addEventListener('popstate', setActivePage);
});

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

// Global logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    }
}