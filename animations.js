document.addEventListener("DOMContentLoaded", function () {

    const aboutSection = document.querySelector(".about");
    const aboutImg = document.querySelector(".about-img");
    const aboutText = document.querySelector(".about-text");

    // initial styles
    aboutImg.style.transform = "translateX(-150px)";
    aboutText.style.transform = "translateX(150px)";
    aboutImg.style.opacity = "0";
    aboutText.style.opacity = "0";

    aboutImg.style.transition = "all 1s ease";
    aboutText.style.transition = "all 1s ease";

    function animateOnScroll() {

        const sectionTop = aboutSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {

            aboutImg.style.transform = "translateX(0)";
            aboutText.style.transform = "translateX(0)";

            aboutImg.style.opacity = "1";
            aboutText.style.opacity = "1";
        }
    }

    window.addEventListener("scroll", animateOnScroll);

});


// Review section animation
const reviewSection = document.querySelector(".review");
const reviewText = document.querySelector(".review .middle-text");
const reviewBoxes = document.querySelectorAll(".review .box");

// initial styles
reviewText.style.transform = "translateX(-150px)";
reviewText.style.opacity = "0";
reviewText.style.transition = "all 1s ease";

reviewBoxes.forEach(box => {
    box.style.transform = "translateX(150px)";
    box.style.opacity = "0";
    box.style.transition = "all 1s ease";
});

function animateReviews() {

    const sectionTop = reviewSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {

        reviewText.style.transform = "translateX(0)";
        reviewText.style.opacity = "1";

        reviewBoxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.transform = "translateX(0)";
                box.style.opacity = "1";
            }, index * 200); // slight delay for each box
        });
    }
}

window.addEventListener("scroll", animateReviews);

const contactImg = document.querySelector(".contact-img");
const contactText = document.querySelector(".contact-text");

// initial state
contactImg.style.transform = "translateX(-150px)";
contactImg.style.opacity = "0";
contactImg.style.transition = "all 1s ease";

contactText.style.transform = "translateX(150px)";
contactText.style.opacity = "0";
contactText.style.transition = "all 1s ease";

// observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            contactImg.style.transform = "translateX(0)";
            contactImg.style.opacity = "1";

            contactText.style.transform = "translateX(0)";
            contactText.style.opacity = "1";

        }
    });
}, { threshold: 0.3 });

observer.observe(document.querySelector(".contact"));