document.addEventListener('DOMContentLoaded', () => {
    // Carousel Logic
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        // Removed fixedCaption logic as we are back to individual cards

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        // Auto advance (optional)
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Search Logic for Papers Page (Removed as per request)
    // The previous search functionality has been removed.
});

function toggleCite(id) {
    const bibBox = document.getElementById(id);
    if (bibBox) {
        if (bibBox.style.display === 'none' || bibBox.style.display === '') {
            bibBox.style.display = 'block';
        } else {
            bibBox.style.display = 'none';
        }
    }
}
