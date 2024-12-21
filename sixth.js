 // Add hover effects to all <strong> elements
 document.querySelectorAll('strong').forEach(strong => {
    strong.addEventListener('mouseenter', () => {
        strong.style.transform = 'scale(1.1)';
        strong.style.transition = 'transform 0.2s ease-in-out';
    });
    strong.addEventListener('mouseleave', () => {
        strong.style.transform = 'scale(1)';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
