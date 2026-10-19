// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}
// Events Data
const eventsData = [
    {
        id: 1,
        title: "Dance Fiesta",
        category: "cultural",
        description: "Groove to the rhythm in our ultimate dance competition featuring various styles from classical to contemporary.",
        date: "March 15, 2025",
        time: "6:00 PM - 9:00 PM",
        image: "dance",
        icon: "💃"
    },
    {
        id: 2,
        title: "Startup Pitch",
        category: "technical",
        description: "Pitch your innovative ideas to industry experts and win exciting prizes for your startup venture.",
        date: "March 16, 2025",
        time: "10:00 AM - 1:00 PM",
        image: "startup",
        icon: "💡"
    },
    {
        id: 3,
        title: "Art Attack",
        category: "cultural",
        description: "Unleash your creativity on canvas in this exciting art competition with multiple categories.",
        date: "March 15, 2025",
        time: "2:00 PM - 5:00 PM",
        image: "art",
        icon: "🎨"
    },
    {
        id: 4,
        title: "Robo Wars",
        category: "technical",
        description: "Build and battle with your robotic creations in this thrilling robotics competition.",
        date: "March 17, 2025",
        time: "11:00 AM - 4:00 PM",
        image: "robotics",
        icon: "⚡"
    },
    {
        id: 5,
        title: "Gaming Arena",
        category: "fun",
        description: "Esports tournament featuring popular games with exciting prizes and competitive gameplay.",
        date: "March 16, 2025",
        time: "12:00 PM - 8:00 PM",
        image: "gaming",
        icon: "🎮"
    },
    {
        id: 6,
        title: "Food Fest",
        category: "fun",
        description: "Culinary delights and cooking competitions with diverse cuisines from around the world.",
        date: "March 15-17, 2025",
        time: "10:00 AM - 8:00 PM",
        image: "food",
        icon: "🍕"
    },
    {
        id: 7,
        title: "AI Workshop",
        category: "workshops",
        description: "Hands-on session on artificial intelligence and machine learning with industry experts.",
        date: "March 16, 2025",
        time: "9:00 AM - 12:00 PM",
        image: "ai",
        icon: "🤖"
    },
    {
        id: 8,
        title: "Photography 101",
        category: "workshops",
        description: "Learn professional photography techniques and composition from award-winning photographers.",
        date: "March 17, 2025",
        time: "2:00 PM - 5:00 PM",
        image: "photography",
        icon: "📸"
    },
    {
        id: 9,
        title: "Music Festival",
        category: "cultural",
        description: "Live performances by talented musicians across various genres and instruments.",
        date: "March 17, 2025",
        time: "7:00 PM - 10:00 PM",
        image: "music",
        icon: "🎤"
    },
    {
        id: 10,
        title: "Coding Challenge",
        category: "technical",
        description: "Intense coding competition testing algorithms, data structures, and problem-solving skills.",
        date: "March 15, 2025",
        time: "9:00 AM - 1:00 PM",
        image: "coding",
        icon: "💻"
    },
    {
        id: 11,
        title: "Treasure Hunt",
        category: "fun",
        description: "Adventure-filled treasure hunt across campus with clues, puzzles, and exciting rewards.",
        date: "March 16, 2025",
        time: "3:00 PM - 6:00 PM",
        image: "treasure",
        icon: "🗺️"
    },
    {
        id: 12,
        title: "Web Dev Workshop",
        category: "workshops",
        description: "Build modern websites from scratch using latest technologies and frameworks.",
        date: "March 15, 2025",
        time: "2:00 PM - 5:00 PM",
        image: "webdev",
        icon: "🌐"
    }
];

// Confetti function
function createConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random position and size
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${left}vw`;
        confetti.style.top = `-${size}px`;
        
        // Random animation duration and delay
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.animationDelay = `${delay}s`;
        
        container.appendChild(confetti);
    }
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEventsPage();
});

function initializeEventsPage() {
    // Initialize navigation
    initNavigation();
    
    // Load all events initially
    renderEvents('all');
    
    // Initialize category tabs
    initCategoryTabs();
    
    // Add scroll animations
    initScrollAnimations();
    
    // Create confetti
    createConfetti();
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
}

// Category tabs functionality
function initCategoryTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and render events
            const category = this.getAttribute('data-category');
            renderEvents(category);
        });
    });
}

// Render events based on category
function renderEvents(category) {
    const eventsGrid = document.getElementById('eventsGrid');
    if (!eventsGrid) return;
    
    const filteredEvents = category === 'all' 
        ? eventsData 
        : eventsData.filter(event => event.category === category);
    
    eventsGrid.innerHTML = filteredEvents.map(createEventCard).join('');
    
    // Add event listeners to cards and buttons
    addEventCardListeners();
}

// Create event card HTML
function createEventCard(event) {
    return `
        <div class="event-card" data-category="${event.category}" data-id="${event.id}">
            <div class="event-image"></div>
            <div class="event-content">
                <span class="event-category">${getCategoryName(event.category)}</span>
                <h3 class="event-title">${event.icon} ${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-meta">
                    <i class="fas fa-calendar"></i>
                    <span>${event.date} • ${event.time}</span>
                </div>
                <button class="register-btn" onclick="event.stopPropagation(); registerForEvent(${event.id})">
                    Register Now
                </button>
            </div>
        </div>
    `;
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'cultural': 'Cultural',
        'technical': 'Technical',
        'fun': 'Fun & Games',
        'workshops': 'Workshops'
    };
    return categories[category] || category;
}

// Add event listeners to event cards
function addEventCardListeners() {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('click', function() {
            const eventId = this.getAttribute('data-id');
            navigateToEventDetails(eventId);
        });
    });
}

// Navigate to event details page
function navigateToEventDetails(eventId) {
    // Navigate to event details page with event ID
    window.location.href = `event-details.html?id=${eventId}`;
}

// Show event modal (temporary until details page is created)
function showEventModal(event) {
    const modal = document.createElement('div');
    modal.className = 'event-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${event.icon} ${event.title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p><strong>Category:</strong> ${getCategoryName(event.category)}</p>
                <p><strong>Date & Time:</strong> ${event.date} • ${event.time}</p>
                <p><strong>Description:</strong> ${event.description}</p>
                <p>Full event details page coming soon!</p>
            </div>
            <div class="modal-footer">
                <button class="modal-register-btn" onclick="registerForEvent(${event.id})">Register Now</button>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 20px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Register for event - UPDATED WITH LOGIN CHECK
function registerForEvent(eventId) {
    // Check if user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
        showNotification('Please login first to register for events', 'error');
        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        return;
    }
    
    const event = eventsData.find(e => e.id == eventId);
    if (event) {
        showNotification(`Successfully registered for ${event.title}! 🎉`, 'success');
        // Add extra confetti when registering
        createConfetti();
        
        // In a real app, you would save this registration to localStorage or backend
        saveEventRegistration(eventId);
    }
}

// Save event registration to localStorage
function saveEventRegistration(eventId) {
    let userRegistrations = JSON.parse(localStorage.getItem('userEventRegistrations')) || [];
    
    // Add event if not already registered
    if (!userRegistrations.includes(eventId)) {
        userRegistrations.push(eventId);
        localStorage.setItem('userEventRegistrations', JSON.stringify(userRegistrations));
    }
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(45deg, #b19cd9, #ff9ec0)' : 
                      type === 'error' ? 'linear-gradient(45deg, #ff6b6b, #ff9ec0)' :
                      'linear-gradient(45deg, #9ce3ff, #b19cd9)'};
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
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe event cards for scroll animations
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Add modal animations to CSS
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from { 
            opacity: 0;
            transform: translateY(30px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    
    .modal-header h2 {
        color: #4a4a6a;
        margin: 0;
    }
    
    .modal-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #6a6a8a;
        transition: color 0.3s ease;
    }
    
    .modal-close:hover {
        color: #b19cd9;
    }
    
    .modal-body {
        margin-bottom: 2rem;
        line-height: 1.6;
    }
    
    .modal-body p {
        margin-bottom: 1rem;
    }
    
    .modal-footer {
        text-align: center;
    }
    
    .modal-register-btn {
        padding: 1rem 2rem;
        background: linear-gradient(45deg, #b19cd9, #ff9ec0);
        color: white;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .modal-register-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(177, 156, 217, 0.4);
    }
`;
document.head.appendChild(modalStyles);