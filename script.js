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
        { text: "Every turn offers a new, unique perspective of reclaimed land.", author: "– Traveler's Note" }
    ];

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    let currentQuoteIndex = 0;

    function changeQuote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        const newQuote = quotes[currentQuoteIndex];
        
        quoteText.style.opacity = 0;
        quoteAuthor.style.opacity = 0;

        setTimeout(() => {
            quoteText.textContent = newQuote.text;
            quoteAuthor.textContent = newQuote.author;
            quoteText.style.opacity = 1;
            quoteAuthor.style.opacity = 1;
        }, 500); 
    }
    
    // Start quote rotation after a short delay
    setTimeout(() => {
        setInterval(changeQuote, 8000); 
    }, 2000); 

    // 3. Scroll-triggered animations for sections and cards (Intersection Observer)
    const sections = document.querySelectorAll('.section-hidden');
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('section-hidden');
                entry.target.classList.add('section-visible');
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
