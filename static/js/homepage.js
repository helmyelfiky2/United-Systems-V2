document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true, // Enable looping
        slidesPerView: 6, // Number of logos visible at a time
        spaceBetween: 20, // Space between logos
        autoplay: {
            delay: 5000, // Auto-scroll delay in ms
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: { // Responsive settings
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
        },
    });

    // Initialize PureCounter
    new PureCounter();

    document.getElementById('contact-form').addEventListener('submit', function (e) {
        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
});