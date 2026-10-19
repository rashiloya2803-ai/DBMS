// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}
// Sample Data
const participantsData = [
    {
        id: 1,
        name: "Sarah Johnson",
        email: "sarah.j@spectrum.edu",
        department: "Computer Science",
        events: 5,
        status: "active",
        joinDate: "2024-01-15",
        avatar: "SJ"
    },
    {
        id: 2,
        name: "Michael Chen",
        email: "michael.c@spectrum.edu",
        department: "Electronics",
        events: 3,
        status: "active",
        joinDate: "2024-01-18",
        avatar: "MC"
    },
    {
        id: 3,
        name: "Emily Davis",
        email: "emily.d@spectrum.edu",
        department: "Mechanical",
        events: 2,
        status: "pending",
        joinDate: "2024-01-20",
        avatar: "ED"
    },
    {
        id: 4,
        name: "Alex Rodriguez",
        email: "alex.r@spectrum.edu",
        department: "Information Technology",
        events: 4,
        status: "active",
        joinDate: "2024-01-22",
        avatar: "AR"
    },
    {
        id: 5,
        name: "Priya Sharma",
        email: "priya.s@spectrum.edu",
        department: "Civil Engineering",
        events: 1,
        status: "inactive",
        joinDate: "2024-01-25",
        avatar: "PS"
    },
    {
        id: 6,
        name: "David Kim",
        email: "david.k@spectrum.edu",
        department: "Computer Science",
        events: 6,
        status: "active",
        joinDate: "2024-01-28",
        avatar: "DK"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAdminPanel();
});

function initializeAdminPanel() {
    // Initialize charts
    initializeCharts();
    
    // Load participants table
    renderParticipantsTable();
    
    // Initialize event listeners
    initEventListeners();
    
    // Add holographic effects
    initHolographicEffects();
}

// Initialize Charts
function initializeCharts() {
    // Growth Chart
    const growthCtx = document.getElementById('growthChart').getContext('2d');
    new Chart(growthCtx, {
        type: 'line',
        data: {
            labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'],
            datasets: [{
                label: 'Participants',
                data: [450, 620, 780, 910, 1050, 1180, 1247],
                borderColor: '#b19cd9',
                backgroundColor: 'rgba(177, 156, 217, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#ff9ec0',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#6a6a8a'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#6a6a8a'
                    }
                }
            }
        }
    });

    // Category Chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Cultural', 'Technical', 'Fun & Games'],
            datasets: [{
                data: [45, 35, 20],
                backgroundColor: [
                    '#ff9ec0',
                    '#b19cd9',
                    '#9ce3ff'
                ],
                borderWidth: 0,
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Render Participants Table
function renderParticipantsTable() {
    const tableBody = document.getElementById('participantsTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = participantsData.map(participant => `
        <tr>
            <td>
                <input type="checkbox" class="table-checkbox">
            </td>
            <td>
                <div class="participant-info">
                    <div class="participant-avatar">${participant.avatar}</div>
                    <div>
                        <div class="participant-name">${participant.name}</div>
                    </div>
                </div>
            </td>
            <td>${participant.email}</td>
            <td>${participant.department}</td>
            <td>${participant.events}</td>
            <td>
                <span class="status-badge status-${participant.status}">
                    ${participant.status.charAt(0).toUpperCase() + participant.status.slice(1)}
                </span>
            </td>
            <td>${formatDate(participant.joinDate)}</td>
            <td>
                <div class="table-actions">
                    <button class="action-btn view" onclick="viewParticipant(${participant.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn edit" onclick="editParticipant(${participant.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" onclick="deleteParticipant(${participant.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Participant Actions
function viewParticipant(id) {
    const participant = participantsData.find(p => p.id === id);
    if (participant) {
        showNotification(`Viewing ${participant.name}'s profile`, 'info');
    }
}

function editParticipant(id) {
    const participant = participantsData.find(p => p.id === id);
    if (participant) {
        showNotification(`Editing ${participant.name}'s details`, 'info');
    }
}

function deleteParticipant(id) {
    const participant = participantsData.find(p => p.id === id);
    if (participant && confirm(`Are you sure you want to delete ${participant.name}?`)) {
        showNotification(`${participant.name} has been deleted`, 'success');
        // In real app, this would update the backend
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

// Initialize event listeners
function initEventListeners() {
    // Navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.classList.contains('logout')) {
                e.preventDefault();
                if (confirm('Are you sure you want to logout?')) {
                    window.location.href = 'index.html';
                }
                return;
            }
            
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Chart period buttons
    const chartBtns = document.querySelectorAll('.chart-btn');
    chartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            chartBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Table row selection
    const tableCheckboxes = document.querySelectorAll('.table-checkbox');
    tableCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const row = this.closest('tr');
            if (this.checked) {
                row.style.background = 'rgba(177, 156, 217, 0.2)';
            } else {
                row.style.background = '';
            }
        });
    });
}

// Holographic effects
function initHolographicEffects() {
    // Add shimmer effect to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.setProperty('--holographic-opacity', '0.3');
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.setProperty('--holographic-opacity', '0');
        });
    });
}

// Add holographic CSS variables
const holographicStyles = document.createElement('style');
holographicStyles.textContent = `
    .stat-card {
        --holographic-opacity: 0;
        position: relative;
        overflow: hidden;
    }
    
    .stat-card::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, var(--holographic-opacity)), 
            transparent);
        transition: left 0.5s ease;
    }
    
    .stat-card:hover::after {
        left: 100%;
    }
`;
document.head.appendChild(holographicStyles);