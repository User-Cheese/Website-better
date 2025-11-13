document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize Particles.js for the dynamic background
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffc107" // Accent color for particles
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffd700", // Gold lines
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // 2. Dynamic Quote Rotation
    const quotes = [
        { text: "A journey through history, color, and a landscape born from the sea.", author: "– Flevoland Explorer" },
        { text: "Driving on the bottom of a former sea: an unparalleled experience.", author: "– Local Resident" },
        { text: "The vastness of the polder truly puts you in awe of human engineering.", author: "– Visitor Review" },
        { text: "Batavia Haven: where Dutch maritime legacy sets sail once more.", author: "– History Enthusiast" }
    ];

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    let currentQuoteIndex = 0;

    function changeQuote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        const newQuote = quotes[currentQuoteIndex];
        
        // Use CSS classes for fade effect, handled by the scroll observer for initial state
        quoteText.style.opacity = 0;
        quoteAuthor.style.opacity = 0;

        setTimeout(() => {
            quoteText.textContent = newQuote.text;
            quoteAuthor.textContent = newQuote.author;
            quoteText.style.opacity = 1;
            quoteAuthor.style.opacity = 1;
        }, 500); 
    }
    // Only start changing quotes if the quote section is visible or after a delay
    // The initial animation is handled by the Intersection Observer
    setTimeout(() => {
        setInterval(changeQuote, 8000); // Change quote every 8 seconds
    }, 2000); // Start after initial hero animation and maybe a bit for user to see first quote

    // 3. Scroll-triggered animations for sections and cards
    const sections = document.querySelectorAll('.section-hidden');
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of item visible to trigger
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('section-hidden');
                entry.target.classList.add('section-visible');
                // observer.unobserve(entry.target); // Optional: stop observing once animated
            } else {
                // Optional: Re-hide if scrolling back up (for re-animation)
                // entry.target.classList.remove('section-visible');
                // entry.target.classList.add('section-hidden');
            }
        });
    }, observerOptions);

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);


    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    animateOnScrollElements.forEach(element => {
        elementObserver.observe(element);
    });

    // 4. Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
