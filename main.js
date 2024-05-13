

// Initialize all sliders
document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach(function(slider) {
        initializeSlider(slider);
    });
});

function initializeSlider(slider) {
    const slides = slider.querySelectorAll(".slides img");
    let slideIndex = 0;
    let intervalId = null;

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);

        // Add event listeners to buttons
        const prevButton = slider.querySelector(".prev");
        const nextButton = slider.querySelector(".next");
        prevButton.addEventListener("click", function() {
            prevSlide(slider);
        });
        nextButton.addEventListener("click", function() {
            nextSlide(slider);
        });
    }

    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach(function(slide) {
            slide.classList.remove("displaySlide");
        });
        slides[slideIndex].classList.add("displaySlide");

    }









    function prevSlide(slider) {
        clearInterval(intervalId);
        slideIndex--;
        showSlide(slideIndex);
    }

    function nextSlide(slider) {
        clearInterval(intervalId);
        slideIndex++;
        showSlide(slideIndex);
    }
}








