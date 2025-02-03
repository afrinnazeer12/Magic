// JavaScript for Animations and Interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Select the heading
    const heading = document.querySelector('header h1');
    
    // Initially position the heading off-screen to the top
    heading.style.transform = 'translateY(-100%)';
    heading.style.opacity = 0;  // Initially hide the heading

    // Apply animation after page load
    setTimeout(() => {
        heading.style.transition = 'transform 2s ease, opacity 2s ease'; // Smooth slide and fade-in
        heading.style.transform = 'translateY(0)';  // Slide the heading into place
        heading.style.opacity = 1;  // Fade the heading in
    }, 200);  // Slight delay to ensure the heading is off-screen initially

    // Select the cake menu section
    const cakesMenu = document.querySelector('.cakes-menu');

    // Initially position the cakes menu off-screen to the left
    cakesMenu.style.transform = 'translateX(-100%)';
    cakesMenu.style.opacity = 0;  // Initially hide the section

    // Apply sliding animation after page load
    setTimeout(() => {
        cakesMenu.style.transition = 'transform 3s ease, opacity 3s ease'; // Smooth slide and fade-in
        cakesMenu.style.transform = 'translateX(0)';  // Slide the section into view
        cakesMenu.style.opacity = 1;  // Fade the section in
    }, 200);  // Slight delay to ensure the section is off-screen initially

    // Add hover effect to each cake box
    const cakeBoxes = document.querySelectorAll('.cake-box');
    cakeBoxes.forEach(cakeBox => {
        cakeBox.addEventListener('mouseover', () => {
            cakeBox.style.transition = 'transform 0.3s, box-shadow 0.3s';
            cakeBox.style.transform = 'scale(1.05)';
            cakeBox.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });

        cakeBox.addEventListener('mouseout', () => {
            cakeBox.style.transform = 'scale(1)';
            cakeBox.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add click event listener for each cake box
    cakeBoxes.forEach(cakeBox => {
        cakeBox.addEventListener('click', () => {
            const cakeName = cakeBox.querySelector('h3').textContent;
            alert(`You clicked on ${cakeName}!`);
        });
    });
});
