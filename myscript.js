
document.addEventListener("DOMContentLoaded", function () {
    

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-btn">&times;</span>
            <h2>Thank You!</h2>
            <p>Your order has been placed successfully.</p>
            <button class="popup-ok">OK</button>
        </div>
    `;
    document.body.appendChild(popup);

    const orderBtn = document.querySelector(".btn"); 
    const closeBtn = document.querySelector(".close-btn");
    const popupOk = document.querySelector(".popup-ok");

    orderBtn.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popupOk.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    
    const menuIcon = document.querySelector("#menu-icon");
    const navList = document.querySelector(".navlist");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");
        menuIcon.classList.toggle("bx-x");
    });


   
    ScrollReveal().reveal(".home-text", {
        delay: 300,
        origin: "top",
        distance: "85px",
        duration: 2500,
        reset: true
    });

    ScrollReveal().reveal(".home-img", {
        delay: 400,
        origin: "top",
        distance: "85px",
        duration: 2500,
        reset: true
    });

    ScrollReveal().reveal(".about-img", {
        delay: 200,
        origin: "top",
        distance: "85px",
        duration: 2500,
        reset: true
    });

    ScrollReveal().reveal(".about-text", {
        delay: 400,
        origin: "top",
        distance: "85px",
        duration: 2500,
        reset: true
    });

    ScrollReveal().reveal(".cake-content .row", {
        interval: 200,
        origin: "top",
        distance: "85px",
        duration: 2500,
        reset: true
    });

    ScrollReveal().reveal(".review-content .box", {
        interval: 200,
        origin: "top",
        distance: "85px",
        duration: 2500,
        reset: true
    });

    ScrollReveal().reveal(".contact-text", {
        delay: 400,
        origin: "top",
        distance: "85px",
        duration: 2500,
        reset: true
    });
});
