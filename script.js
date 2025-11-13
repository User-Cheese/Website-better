document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        { text: "A journey through history, color, and a landscape born from the sea.", author: "– Flevoland Explorer" },
        { text: "Driving on the bottom of a former sea: an unparalleled experience.", author: "– Local Resident" },
        { text: "The vastness of the polder truly puts you in awe of human engineering.", author: "– Visitor Review" }
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

    setInterval(changeQuote, 8000);
});
