// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}

// Events Data
const registeredEvents = [
    {
        id: 1,
        title: "Dance Fiesta",
        category: "cultural",
        date: "March 15, 2025",
        time: "6:00 PM",
        venue: "Main Auditorium",
        status: "registered",
        icon: "💃"
    },
    {
        id: 2,
        title: "Startup Pitch",
        category: "technical",
        date: "March 16, 2025",
        time: "10:00 AM",
        venue: "Innovation Hall",
        status: "registered",
        icon: "💡"
    },
    {
        id: 3,
        title: "Art Attack",
        category: "cultural",
        date: "March 15, 2025",
        time: "2:00 PM",
        venue: "Art Gallery",
        status: "registered",
        icon: "🎨"
    },
    {
        id: 4,
        title: "Coding Challenge",
        category: "technical",
        date: "March 15, 2025",
        time: "9:00 AM",
        venue: "Programming Lab",
        status: "registered",
        icon: "💻"
    }
];

const upcomingEvents = [
    {
        id: 5,
        title: "Robo Wars",
        category: "technical",
        date: "March 17, 2025",
        time: "11:00 AM",
        venue: "Tech Arena",
        icon: "⚡"
    },
    {
        id: 6,
        title: "Gaming Arena",
        category: "fun",
        date: "March 16, 2025",
        time: "12:00 PM",
        venue: "E-Sports Zone",
        icon: "🎮"
    },
    {
        id: 7,
        title: "Music Festival",
        category: "cultural",
        date: "March 17, 2025",
        time: "7:00 PM",
        venue: "Open Air Theater",
        icon: "🎤"
    },
    {
        id: 8,
        title: "AI Workshop",
        category: "workshops",
        date: "March 16, 2025",
        time: "9:00 AM",
        venue: "Computer Lab",
        icon: "🤖"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Display user info if available
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        const userInfoElement = document.querySelector('.user-info h3');
        if (userInfoElement) {
            userInfoElement.textContent = userEmail.split('@')[0]; // Show name part only
        }
    }
    
    initializeDashboard();
});

function initializeDashboard() {
    // Load registered events
    renderRegisteredEvents();
    
    // Load upcoming events
    renderUpcomingEvents();
    
    // Create floating shapes
    createFloatingShapes();
    
    // Initialize event listeners
    initEventListeners();
    
    // Start scanning animation
    startScanningAnimation();
}

// Create floating shapes
function createFloatingShapes() {
    const container = document.querySelector('.floating-shapes');
    if (!container) return;
    
    const shapes = [
        { class: 'shape-1', size: 150 },
        { class: 'shape-2', size: 100 },
        { class: 'shape-3', size: 120 }
    ];
    
    shapes.forEach(shape => {
        const element = document.createElement('div');
        element.className = `shape ${shape.class}`;
        element.style.width = `${shape.size}px`;
        element.style.height = `${shape.size}px`;
        container.appendChild(element);
    });
}

// Render registered events
function renderRegisteredEvents() {
    const container = document.getElementById('registeredEvents');
    if (!container) return;
    
    container.innerHTML = registeredEvents.map(event => `
        <div class="event-card" data-id="${event.id}">
            <div class="event-header">
                <div class="event-icon ${event.category}">
                    ${event.icon}
                </div>
                <div>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-category">${getCategoryName(event.category)}</p>
                </div>
            </div>
            <div class="event-meta">
                <span><i class="fas fa-calendar"></i> ${event.date}</span>
                <span><i class="fas fa-clock"></i> ${event.time}</span>
                <span><i class="fas fa-map-marker-alt"></i> ${event.venue}</span>
            </div>
            <div class="event-actions">
                <button class="btn btn-primary" onclick="viewEventDetails(${event.id})">
                    View Details
                </button>
                <button class="btn btn-outline" onclick="unregisterEvent(${event.id})">
                    Unregister
                </button>
            </div>
        </div>
    `).join('');
}

// Render upcoming events
function renderUpcomingEvents() {
    const container = document.getElementById('upcomingEvents');
    if (!container) return;
    
    container.innerHTML = upcomingEvents.map(event => `
        <div class="upcoming-card" data-id="${event.id}">
            <div class="upcoming-header">
                <div class="upcoming-icon ${event.category}">
                    ${event.icon}
                </div>
                <div>
                    <h4 class="upcoming-title">${event.title}</h4>
                    <p class="upcoming-meta">${event.date} • ${event.time}</p>
                </div>
            </div>
            <div class="upcoming-actions">
                <button class="btn btn-primary btn-sm" onclick="joinEvent(${event.id})">
                    Join Event
                </button>
                <button class="btn btn-outline btn-sm" onclick="viewEventDetails(${event.id})">
                    Details
                </button>
            </div>
        </div>
    `).join('');
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'cultural': 'Cultural Event',
        'technical': 'Technical Event',
        'fun': 'Fun & Games',
        'workshops': 'Workshop'
    };
    return categories[category] || category;
}

// Event action functions
function viewEventDetails(eventId) {
    // In a real app, this would navigate to event details
    showNotification(`Viewing details for event ${eventId}`, 'info');
}

function unregisterEvent(eventId) {
    const event = registeredEvents.find(e => e.id === eventId);
    if (event && confirm(`Are you sure you want to unregister from ${event.title}?`)) {
        showNotification(`Unregistered from ${event.title}`, 'success');
        // In a real app, this would update the backend
    }
}

function joinEvent(eventId) {
    const event = upcomingEvents.find(e => e.id === eventId);
    if (event) {
        showNotification(`Successfully joined ${event.title}! 🎉`, 'success');
        // In a real app, this would register the user for the event
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
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
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

// Scanning animation
function startScanningAnimation() {
    const cards = document.querySelectorAll('.event-card, .upcoming-card');
    
    // Add scanning effect every 3 seconds
    setInterval(() => {
        cards.forEach(card => {
            card.style.setProperty('--scan-progress', '0%');
            
            setTimeout(() => {
                card.style.setProperty('--scan-progress', '100%');
            }, 10);
        });
    }, 3000);
}

// Initialize event listeners
function initEventListeners() {
    // Navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Handle logout
            if (this.querySelector('.fa-sign-out-alt')) {
                if (confirm('Are you sure you want to logout?')) {
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('userEmail');
                    window.location.href = 'login.html';
                }
            }
        });
    });
    
    // Notification button
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            showNotification('You have 3 new notifications!', 'info');
        });
    }
}

// Add scanning animation styles
const scanStyles = document.createElement('style');
scanStyles.textContent = `
    .event-card::before,
    .upcoming-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.4), 
            transparent);
        transition: left 0.5s ease;
    }
    
    .event-card:hover::before,
    .upcoming-card:hover::before {
        left: 100%;
    }
`;
document.head.appendChild(scanStyles);