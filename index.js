// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Button click handlers
    const primaryButtons = document.querySelectorAll('.btn-primary, .btn-cta-primary');
    primaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Get Started Free clicked');
            // Add your signup/registration logic here
        });
    });

    const secondaryButtons = document.querySelectorAll('.btn-secondary, .btn-cta-secondary');
    secondaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Learn More / Sign In clicked');
            // Add your navigation logic here
        });
    });

    // Add scroll animation on scroll
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

    // Observe feature cards and testimonial cards
    const cards = document.querySelectorAll('.feature-card, .testimonial-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

