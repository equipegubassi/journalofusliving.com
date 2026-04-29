// Fox News Template - JavaScript

// Current Time Display
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;

    const timeString = `${displayHours}:${minutes} ${ampm}`;
    const timezoneString = 'EST';

    const timeElement = document.querySelector('.current-time .time');
    const zoneElement = document.querySelector('.current-time .zone');

    if (timeElement) timeElement.textContent = timeString;
    if (zoneElement) zoneElement.textContent = timezoneString;
}

// Update time immediately and then every minute
updateTime();
setInterval(updateTime, 60000);

// Share functionality
document.querySelectorAll('.share-btn').forEach((btn) => {
    btn.addEventListener('click', function() {
        console.log('Share button clicked');
        
        // Simple feedback
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Like button functionality
const likeButton = document.querySelector('.like-button');
if (likeButton) {
    likeButton.addEventListener('click', function() {
        console.log('Like button clicked');
        this.style.color = '#C8102E';
        
        // Increment like count (demo)
        const likeCountSpan = document.querySelector('.like-count span');
        if (likeCountSpan) {
            let currentCount = parseInt(likeCountSpan.textContent);
            likeCountSpan.textContent = currentCount + 1;
        }
    });
}

// Comment actions
document.querySelectorAll('.comment-action').forEach(action => {
    action.addEventListener('click', function() {
        const actionType = this.textContent;
        console.log(`${actionType} clicked`);
        
        if (actionType === 'Like') {
            this.style.color = '#C8102E';
            this.style.fontWeight = '700';
        }
    });
});

// Menu icon interaction
const menuIcon = document.querySelector('.menu-icon');
if (menuIcon) {
    menuIcon.addEventListener('click', function() {
        console.log('Menu clicked');
        this.style.opacity = '0.7';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 200);
    });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading fallback for older browsers
if ('loading' in HTMLImageElement.prototype) {
    console.log('Native lazy loading supported');
} else {
    console.log('Native lazy loading not supported - consider using intersection observer');
}

// Performance monitoring
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});

// Scroll event for header shadow
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (header && currentScroll > 10) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else if (header) {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});
