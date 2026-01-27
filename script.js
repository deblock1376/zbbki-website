document.addEventListener('DOMContentLoaded', () => {
    console.log('Zen Bei Butoku Kai website loaded.');

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Scroll Animations (Simple Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Wisdom of the Sensei - Quote Rotator
    const quotes = [
        "To win one hundred victories in one hundred battles is not the highest skill. To subdue the enemy without fighting is the highest skill.",
        "The ultimate aim of the art of karate lies not in victory or defeat, but in the perfection of the character of its participants.",
        "Martial arts is a vehicle for spiritual growth.",
        "If you sleep more than four hours a day, you lose.",
        "Karate is like boiling water; if you do not heat it constantly, it will cool.",
        "Mind over matter.",
        "Patience is the ballast of the soul.",
        "Do you see what you see?",
        "Health is lost, something is lost. Character is lost, all is lost.",
        "If you make a mistake, don't make an encore.",
        "The only mistake is to not learn the lesson."
    ];

    const quoteElement = document.getElementById('dynamic-quote');
    if (quoteElement) {
        let currentQuoteIndex = 0;

        setInterval(() => {
            // Fade out
            quoteElement.style.opacity = '0';

            setTimeout(() => {
                // Change text
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                quoteElement.textContent = `"${quotes[currentQuoteIndex]}"`;

                // Fade in
                quoteElement.style.opacity = '1';
            }, 500); // Wait for fade out

        }, 6000); // Change every 6 seconds

        // Add transition style
        quoteElement.style.transition = 'opacity 0.5s ease-in-out';
    }
});
