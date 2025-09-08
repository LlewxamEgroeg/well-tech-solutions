// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
            scrollToSection(targetId);
        }
    });
});

// Booking Form Functionality
const bookingOptions = document.querySelectorAll('.booking-option');
const bookingFormContainer = document.getElementById('bookingFormContainer');
const bookingTitle = document.getElementById('bookingTitle');
const summaryType = document.getElementById('summaryType');
const summaryRate = document.getElementById('summaryRate');
const summaryEstimate = document.getElementById('summaryEstimate');
const addressGroup = document.getElementById('addressGroup');
const serviceTypeInput = document.getElementById('service-type');

// Handle booking option selection
bookingOptions.forEach(option => {
    option.addEventListener('click', function() {
        const serviceType = this.getAttribute('data-type');
        
        // Update UI based on selection
        bookingOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        
        // Show booking form
        bookingFormContainer.style.display = 'block';
        
        // Update form based on selection
        if (serviceType === 'onsite') {
            bookingTitle.textContent = 'Book On-Site Visit';
            summaryType.textContent = 'On-Site Visit';
            summaryRate.textContent = 'R220/hour';
            summaryEstimate.textContent = 'R220 - R880';
            addressGroup.style.display = 'block';
            serviceTypeInput.value = 'onsite';
        } else {
            bookingTitle.textContent = 'Book Remote Support';
            summaryType.textContent = 'Remote Support';
            summaryRate.textContent = 'R150/hour';
            summaryEstimate.textContent = 'R150 - R600';
            addressGroup.style.display = 'none';
            serviceTypeInput.value = 'remote';
        }
        
        // Scroll to form
        bookingFormContainer.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');
const bookingForm = document.getElementById('bookingForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitContactForm();
    });
}

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitBookingForm();
    });
}

function submitContactForm() {
    // In a real implementation, you would send the form data to a server
    // For this demo, we'll just show a success message
    alert('Thank you for your message! We will contact you soon.');
    contactForm.reset();
}

function submitBookingForm() {
    // In a real implementation, you would send the form data to a server
    // For this demo, we'll just show a success message
    alert('Your booking has been submitted successfully! We will confirm your appointment shortly.');
    bookingForm.reset();
    bookingFormContainer.style.display = 'none';
    
    // Reset booking options
    bookingOptions.forEach(opt => opt.classList.remove('selected'));
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .about-feature, .pricing-card, .booking-option');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
document.querySelectorAll('.service-card, .about-feature, .pricing-card, .booking-option').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Trigger animation on load
window.addEventListener('load', () => {
    setTimeout(animateOnScroll, 100);
});

// Water ripple effect enhancement
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    
    // Add interactive water effect on mouse move
    hero.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const ripples = document.querySelectorAll('.water-ripple');
        ripples.forEach((ripple, index) => {
            const moveX = (x - 0.5) * (index + 1) * 10;
            const moveY = (y - 0.5) * (index + 1) * 10;
            ripple.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});

// Depth visualization interaction
document.querySelectorAll('.depth-layer').forEach(layer => {
    layer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    layer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Service card interaction
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize form elements
document.addEventListener('DOMContentLoaded', function() {
    // Set min date for booking form to today
    const today = new Date().toISOString().split('T')[0];
    const bookingDate = document.getElementById('booking-date');
    if (bookingDate) {
        bookingDate.setAttribute('min', today);
    }
    
    // Add current year to footer
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} Well-Tech Solutions. All rights reserved.`;
    }
});