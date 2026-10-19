// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}
// All Events Data (same as events.js)
const eventsData = [
    {
        id: 1,
        title: "Dance Fiesta",
        category: "cultural",
        description: "Groove to the rhythm in our ultimate dance competition featuring various styles from classical to contemporary. Participants will be judged on technique, creativity, choreography, and stage presence. The competition features solo, duet, and group categories, with exciting prizes for winners in each category.",
        date: "March 15, 2025",
        time: "6:00 PM - 9:00 PM",
        venue: "Main Auditorium",
        prizes: "1st: ₹25,000 | 2nd: ₹15,000 | 3rd: ₹10,000",
        rules: [
            "Maximum team size: 12 members",
            "Time limit: 8 minutes per performance",
            "Music must be submitted 24 hours before the event",
            "Props are allowed but must be managed by the team",
            "Costumes should be appropriate for the performance",
            "Judges' decision will be final and binding"
        ],
        coordinators: [
            { name: "Priya Sharma", role: "Lead Coordinator", email: "priya.sharma@spectrum.edu" },
            { name: "Rahul Verma", role: "Technical Head", email: "rahul.verma@spectrum.edu" }
        ],
        icon: "💃"
    },
    {
        id: 2,
        title: "Startup Pitch",
        category: "technical",
        description: "Pitch your innovative ideas to industry experts and win exciting prizes for your startup venture. This competition is open to all aspiring entrepreneurs with groundbreaking ideas. Get feedback from seasoned investors and industry leaders.",
        date: "March 16, 2025",
        time: "10:00 AM - 1:00 PM",
        venue: "Innovation Hall",
        prizes: "1st: ₹50,000 | 2nd: ₹30,000 | 3rd: ₹20,000",
        rules: [
            "Team size: 1-4 members",
            "Pitch duration: 7 minutes + 3 minutes Q&A",
            "Business plan submission required",
            "Original ideas only - no plagiarism",
            "Prototype/demo is encouraged",
            "All participants must be current students"
        ],
        coordinators: [
            { name: "Arjun Patel", role: "Event Head", email: "arjun.patel@spectrum.edu" },
            { name: "Neha Gupta", role: "Mentor Coordinator", email: "neha.gupta@spectrum.edu" }
        ],
        icon: "💡"
    },
    {
        id: 3,
        title: "Art Attack",
        category: "cultural",
        description: "Unleash your creativity on canvas in this exciting art competition with multiple categories. From traditional painting to digital art, showcase your artistic talents and win amazing prizes.",
        date: "March 15, 2025",
        time: "2:00 PM - 5:00 PM",
        venue: "Art Gallery",
        prizes: "1st: ₹20,000 | 2nd: ₹12,000 | 3rd: ₹8,000",
        rules: [
            "Individual participation only",
            "Bring your own materials",
            "Canvas size: Maximum 24x36 inches",
            "Theme will be announced on spot",
            "No pre-made artworks allowed",
            "Digital art category requires own equipment"
        ],
        coordinators: [
            { name: "Sneha Reddy", role: "Art Coordinator", email: "sneha.reddy@spectrum.edu" },
            { name: "Karan Singh", role: "Logistics Head", email: "karan.singh@spectrum.edu" }
        ],
        icon: "🎨"
    },
    {
        id: 4,
        title: "Robo Wars",
        category: "technical",
        description: "Build and battle with your robotic creations in this thrilling robotics competition. Test your engineering skills in this high-intensity robot combat event.",
        date: "March 17, 2025",
        time: "11:00 AM - 4:00 PM",
        venue: "Tech Arena",
        prizes: "1st: ₹35,000 | 2nd: ₹20,000 | 3rd: ₹15,000",
        rules: [
            "Team size: 2-4 members",
            "Robot weight limit: 15kg",
            "Safety measures mandatory",
            "Wireless control required",
            "No hazardous materials allowed",
            "Technical inspection before competition"
        ],
        coordinators: [
            { name: "Vikram Joshi", role: "Technical Head", email: "vikram.joshi@spectrum.edu" },
            { name: "Ananya Das", role: "Safety Officer", email: "ananya.das@spectrum.edu" }
        ],
        icon: "⚡"
    },
    {
        id: 5,
        title: "Gaming Arena",
        category: "fun",
        description: "Esports tournament featuring popular games with exciting prizes and competitive gameplay. Battle it out in various gaming categories and prove your skills.",
        date: "March 16, 2025",
        time: "12:00 PM - 8:00 PM",
        venue: "E-Sports Zone",
        prizes: "1st: ₹30,000 | 2nd: ₹18,000 | 3rd: ₹12,000",
        rules: [
            "Individual and team entries",
            "Bring your own controllers",
            "Fair play policy strictly enforced",
            "No cheating or hacks allowed",
            "Schedule will be provided",
            "Equipment provided for PC games"
        ],
        coordinators: [
            { name: "Rohan Mehra", role: "Gaming Head", email: "rohan.mehra@spectrum.edu" },
            { name: "Pooja Nair", role: "Tournament Manager", email: "pooja.nair@spectrum.edu" }
        ],
        icon: "🎮"
    },
    {
        id: 6,
        title: "Food Fest",
        category: "fun",
        description: "Culinary delights and cooking competitions with diverse cuisines from around the world. Show off your cooking skills and taste amazing food.",
        date: "March 15-17, 2025",
        time: "10:00 AM - 8:00 PM",
        venue: "Food Court",
        prizes: "1st: ₹15,000 | 2nd: ₹10,000 | 3rd: ₹5,000",
        rules: [
            "Individual or team participation",
            "Ingredients provided for competition",
            "Hygiene standards must be maintained",
            "Original recipes encouraged",
            "Judging based on taste and presentation",
            "Food safety protocols followed"
        ],
        coordinators: [
            { name: "Chef Rajiv Malhotra", role: "Head Judge", email: "rajiv.malhotra@spectrum.edu" },
            { name: "Meera Krishnan", role: "Event Coordinator", email: "meera.krishnan@spectrum.edu" }
        ],
        icon: "🍕"
    },
    {
        id: 7,
        title: "AI Workshop",
        category: "workshops",
        description: "Hands-on session on artificial intelligence and machine learning with industry experts. Learn cutting-edge AI technologies and applications.",
        date: "March 16, 2025",
        time: "9:00 AM - 12:00 PM",
        venue: "Computer Lab",
        prizes: "Certificate of Participation",
        rules: [
            "Basic programming knowledge required",
            "Laptops mandatory",
            "Pre-registration necessary",
            "Limited seats available",
            "Hands-on coding sessions",
            "Q&A session with experts"
        ],
        coordinators: [
            { name: "Dr. Anil Kumar", role: "Workshop Lead", email: "anil.kumar@spectrum.edu" },
            { name: "Sanjay Rao", role: "Technical Mentor", email: "sanjay.rao@spectrum.edu" }
        ],
        icon: "🤖"
    },
    {
        id: 8,
        title: "Photography 101",
        category: "workshops",
        description: "Learn professional photography techniques and composition from award-winning photographers. Master the art of capturing perfect moments.",
        date: "March 17, 2025",
        time: "2:00 PM - 5:00 PM",
        venue: "Media Center",
        prizes: "Certificate of Participation",
        rules: [
            "Bring your own camera",
            "All skill levels welcome",
            "Practical shooting sessions",
            "Portfolio review available",
            "Equipment basics covered",
            "Creative techniques taught"
        ],
        coordinators: [
            { name: "Prof. Sameer Ahmed", role: "Photography Expert", email: "sameer.ahmed@spectrum.edu" },
            { name: "Nisha Verma", role: "Workshop Coordinator", email: "nisha.verma@spectrum.edu" }
        ],
        icon: "📸"
    },
    {
        id: 9,
        title: "Music Festival",
        category: "cultural",
        description: "Live performances by talented musicians across various genres and instruments. A celebration of musical diversity and talent.",
        date: "March 17, 2025",
        time: "7:00 PM - 10:00 PM",
        venue: "Open Air Theater",
        prizes: "1st: ₹22,000 | 2nd: ₹15,000 | 3rd: ₹8,000",
        rules: [
            "Solo and group performances",
            "Time limit: 10 minutes",
            "Own instruments required",
            "Sound check mandatory",
            "Various genres welcome",
            "Original compositions encouraged"
        ],
        coordinators: [
            { name: "Rahul Menon", role: "Music Director", email: "rahul.menon@spectrum.edu" },
            { name: "Priya Iyer", role: "Stage Manager", email: "priya.iyer@spectrum.edu" }
        ],
        icon: "🎤"
    },
    {
        id: 10,
        title: "Coding Challenge",
        category: "technical",
        description: "Intense coding competition testing algorithms, data structures, and problem-solving skills. Battle against the best coders.",
        date: "March 15, 2025",
        time: "9:00 AM - 1:00 PM",
        venue: "Programming Lab",
        prizes: "1st: ₹40,000 | 2nd: ₹25,000 | 3rd: ₹15,000",
        rules: [
            "Individual participation",
            "Laptops provided",
            "Multiple programming languages",
            "Algorithmic problems",
            "Time-bound challenges",
            "Plagiarism strictly prohibited"
        ],
        coordinators: [
            { name: "Prof. Deepak Sharma", role: "Judge", email: "deepak.sharma@spectrum.edu" },
            { name: "Amit Bansal", role: "Technical Head", email: "amit.bansal@spectrum.edu" }
        ],
        icon: "💻"
    },
    {
        id: 11,
        title: "Treasure Hunt",
        category: "fun",
        description: "Adventure-filled treasure hunt across campus with clues, puzzles, and exciting rewards. Test your problem-solving and teamwork skills.",
        date: "March 16, 2025",
        time: "3:00 PM - 6:00 PM",
        venue: "Campus Wide",
        prizes: "1st: ₹18,000 | 2nd: ₹12,000 | 3rd: ₹8,000",
        rules: [
            "Team size: 3-5 members",
            "No running - safety first",
            "Clues must be solved in order",
            "No external help allowed",
            "Respect campus property",
            "Time limit: 3 hours"
        ],
        coordinators: [
            { name: "Aditya Roy", role: "Game Master", email: "aditya.roy@spectrum.edu" },
            { name: "Simran Kaur", role: "Clue Designer", email: "simran.kaur@spectrum.edu" }
        ],
        icon: "🗺️"
    },
    {
        id: 12,
        title: "Web Dev Workshop",
        category: "workshops",
        description: "Build modern websites from scratch using latest technologies and frameworks. Learn full-stack development in this intensive workshop.",
        date: "March 15, 2025",
        time: "2:00 PM - 5:00 PM",
        venue: "Development Lab",
        prizes: "Certificate of Participation",
        rules: [
            "Basic HTML/CSS knowledge",
            "Laptops required",
            "Hands-on project building",
            "Industry best practices",
            "Portfolio development",
            "Career guidance session"
        ],
        coordinators: [
            { name: "Kiran Bedi", role: "Web Expert", email: "kiran.bedi@spectrum.edu" },
            { name: "Rohit Malhotra", role: "Mentor", email: "rohit.malhotra@spectrum.edu" }
        ],
        icon: "🌐"
    }
];

// Confetti function

// Get event ID from URL
function getEventIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1; // Default to first event if no ID
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEventDetailsPage();
});

function initializeEventDetailsPage() {
    // Initialize navigation
    initNavigation();
    
    // Load event details based on URL parameter
    const eventId = getEventIdFromURL();
    loadEventDetails(eventId);
    
    // Load upcoming events (excluding current event)
    renderUpcomingEvents(eventId);
    
    // Add event listeners
    addEventListeners(eventId);
    
    // Initialize animations
    initAnimations();
    
 
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

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });

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

// Load event details
function loadEventDetails(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    const eventDetails = document.getElementById('eventDetails');
    
    if (!event || !eventDetails) return;
    
    eventDetails.innerHTML = createEventDetailsHTML(event);
}

// Create event details HTML
function createEventDetailsHTML(event) {
    return `
        <!-- Event Header -->
        <div class="event-header">
            <div class="event-category">${getCategoryName(event.category)}</div>
            <h1 class="event-title">${event.title} <span class="event-emoji">${event.icon}</span></h1>
            <p class="event-tagline">${getEventTagline(event.category)}</p>
        </div>

        <!-- Event Banner -->
        <div class="event-banner">
            <div class="banner-image" style="background: ${getEventGradient(event.category)}"></div>
            <div class="banner-overlay"></div>
        </div>

        <!-- Event Info Grid -->
        <div class="event-info-grid">
            <!-- Main Content -->
            <div class="event-main-content">
                <div class="info-section">
                    <h3 class="section-title">About the Event</h3>
                    <p class="event-description">${event.description}</p>
                </div>

                <div class="info-section">
                    <h3 class="section-title">Event Rules</h3>
                    <ul class="rules-list">
                        ${event.rules.map(rule => `<li>${rule}</li>`).join('')}
                    </ul>
                </div>

                <div class="info-section">
                    <h3 class="section-title">Coordinators</h3>
                    <div class="coordinators-grid">
                        ${event.coordinators.map(coordinator => `
                            <div class="coordinator-card">
                                <div class="coordinator-avatar">${coordinator.name.charAt(0)}</div>
                                <div class="coordinator-info">
                                    <h4>${coordinator.name}</h4>
                                    <p>${coordinator.role}</p>
                                    <span class="coordinator-contact">${coordinator.email}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Sidebar Info -->
            <div class="event-sidebar">
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-calendar"></i>
                    </div>
                    <div class="info-content">
                        <h4>Date & Time</h4>
                        <p>${event.date}</p>
                        <p>${event.time}</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="info-content">
                        <h4>Venue</h4>
                        <p>${event.venue}</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="info-content">
                        <h4>Participants</h4>
                        <p>${getParticipantInfo(event.category)}</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div class="info-content">
                        <h4>Prizes</h4>
                        <p>${event.prizes}</p>
                    </div>
                </div>

                <!-- Register Button -->
                <button class="register-btn-large" onclick="registerForEvent(${event.id})">
                    <span class="btn-text">Register for this Event</span>
                    <span class="btn-glow"></span>
                </button>
            </div>
        </div>
    `;
}

// Helper functions
function getCategoryName(category) {
    const categories = {
        'cultural': 'Cultural Event',
        'technical': 'Technical Event',
        'fun': 'Fun & Games',
        'workshops': 'Workshop'
    };
    return categories[category] || category;
}

function getEventTagline(category) {
    const taglines = {
        'cultural': 'Where creativity meets expression and art comes to life',
        'technical': 'Innovation, technology, and cutting-edge solutions',
        'fun': 'Fun, excitement, and unforgettable memories',
        'workshops': 'Learn, grow, and master new skills'
    };
    return taglines[category] || 'An amazing event at Spectrum 2025';
}

function getEventGradient(category) {
    const gradients = {
        'cultural': 'linear-gradient(45deg, #ff9ec0, #ffb6c1)',
        'technical': 'linear-gradient(45deg, #b19cd9, #d8bfd8)',
        'fun': 'linear-gradient(45deg, #9ce3ff, #87ceeb)',
        'workshops': 'linear-gradient(45deg, #98fb98, #90ee90)'
    };
    return gradients[category] || 'linear-gradient(45deg, #b19cd9, #ff9ec0)';
}

function getParticipantInfo(category) {
    const info = {
        'cultural': 'Individual & Teams',
        'technical': 'Individual & Teams',
        'fun': 'Teams of 3-5',
        'workshops': 'Individual'
    };
    return info[category] || 'Individual & Teams';
}

// Render upcoming events (excluding current event)
function renderUpcomingEvents(currentEventId) {
    const eventsList = document.getElementById('upcomingEvents');
    if (!eventsList) return;
    
    const upcomingEvents = eventsData
        .filter(event => event.id !== currentEventId)
        .slice(0, 5); // Show max 5 upcoming events
    
    eventsList.innerHTML = upcomingEvents.map(event => `
        <div class="upcoming-event-card" onclick="navigateToEvent(${event.id})">
            <h4 class="upcoming-event-title">${event.icon} ${event.title}</h4>
            <div class="upcoming-event-meta">
                <i class="fas fa-calendar"></i>
                <span>${event.date} • ${event.time}</span>
            </div>
            <div class="upcoming-event-meta">
                <i class="fas fa-map-marker-alt"></i>
                <span>${event.venue}</span>
            </div>
        </div>
    `).join('');
}

// Add event listeners
function addEventListeners(eventId) {
    // Register button listener is added via onclick in HTML
}

// Navigate to other events
function navigateToEvent(eventId) {
    window.location.href = `event-details.html?id=${eventId}`;
}

// Register for event
function registerForEvent(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (event) {
        showNotification(`Successfully registered for ${event.title}! 🎉`, 'success');
        celebrateRegistration();
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
function celebrateRegistration() {
    const registerBtn = document.querySelector('.register-btn-large');
    if (!registerBtn) return;
    
    const originalText = registerBtn.querySelector('.btn-text').textContent;
    registerBtn.querySelector('.btn-text').textContent = 'Registered! 🎉';
    registerBtn.style.background = 'linear-gradient(45deg, #98fb98, #90ee90)';
    
    createCelebrationParticles();
// Extra confetti on registration
    
    setTimeout(() => {
        registerBtn.querySelector('.btn-text').textContent = originalText;
        registerBtn.style.background = 'linear-gradient(45deg, #b19cd9, #ff9ec0)';
    }, 2000);
}

// Create celebration particles
function createCelebrationParticles() {
    const particlesContainer = document.querySelector('.event-details');
    if (!particlesContainer) return;
    
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'celebration-particle';
        
        const size = Math.random() * 8 + 4;
        const left = Math.random() * 100;
        const colors = ['#b19cd9', '#ff9ec0', '#9ce3ff', '#98fb98'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const emojis = ['🎉', '✨', '🌟', '💫', '🎊'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        particle.style.cssText = `
            position: absolute;
            font-size: ${size}px;
            left: ${left}%;
            top: 50%;
            opacity: 0;
            pointer-events: none;
            z-index: 100;
            animation: celebrateParticle 1.5s ease-out forwards;
        `;
        particle.textContent = emoji;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize animations
function initAnimations() {
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

    const animatedElements = document.querySelectorAll('.info-section, .info-card, .upcoming-events');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Add celebration animation to CSS
const celebrationStyles = document.createElement('style');
celebrationStyles.textContent = `
    @keyframes celebrateParticle {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        20% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-80px) rotate(360deg) scale(0);
        }
    }
`;
document.head.appendChild(celebrationStyles);