// ── Sticky Header + Scroll-to-top + Hide on scroll down ────
const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (header) {
        header.classList.toggle("sticky", currentScrollY > 50);

        const menuIsOpen = navlist && navlist.classList.contains("open");
        if (currentScrollY <= 40 || currentScrollY < lastScrollY || menuIsOpen) {
            header.classList.remove("hidden");
        } else {
            header.classList.add("hidden");
        }
    }

    const scrollBtn = document.getElementById("scrollTop");
    if (scrollBtn) scrollBtn.classList.toggle("visible", currentScrollY > 400);

    lastScrollY = currentScrollY;
});

// ── Mobile Menu Toggle ─────────────────────────────────────
const menuIcon = document.getElementById("menu-icon");
const navlist  = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    navlist.classList.toggle("open");
    menuIcon.classList.toggle("bx-x");
});

document.querySelectorAll(".navlist a").forEach(link => {
    link.addEventListener("click", () => {
        navlist.classList.remove("open");
        menuIcon.classList.remove("bx-x");
    });
});

// ── Nav-link slide-in delays ────────────────────────────────
document.querySelectorAll(".navlist li").forEach((li, i) => {
    const a = li.querySelector("a");
    if (a) a.style.setProperty("--delay", `${i * 0.15}s`);
});

// ── Counter Animation (cyclic) ──────────────────────────────
function animateCounter(el) {
    const target  = parseInt(el.dataset.target);
    const suffix  = el.dataset.suffix || "";
    const duration = 2000;  // count-up duration in ms
    const pause    = 3000;  // pause between cycles in ms
    const steps    = 60;
    const stepTime = duration / steps;

    function runCycle() {
        let current = 0;
        el.textContent = "0" + suffix;

        const timer = setInterval(() => {
            current += Math.ceil(target / steps);
            if (current >= target) {
                current = target;
                clearInterval(timer);
                // after pause, restart
                setTimeout(runCycle, pause);
            }
            el.textContent = current + suffix;
        }, stepTime);
    }

    runCycle();
}

// Use IntersectionObserver to trigger when stats bar enters view
const statsBar = document.querySelector(".stats-bar");
if (statsBar) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".counter").forEach(el => animateCounter(el));
                observer.disconnect(); // start once, then it loops itself
            }
        });
    }, { threshold: 0.4 });

    observer.observe(statsBar);
}

// Trigger cake drop animation only when cakes section is reached
const cakeStage = document.querySelector(".cake-stage");
if (cakeStage) {
    const cakeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                cakeStage.classList.add("animate");
                cakeObserver.disconnect();
            }
        });
    }, { threshold: 0.45 });

    cakeObserver.observe(cakeStage);
}
