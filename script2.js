document.addEventListener('DOMContentLoaded', () => {
   
    const heading = document.querySelector('header h1');
   
   
    heading.style.transform = 'translateY(-100%)';
    heading.style.opacity = 0;  

   
    setTimeout(() => {
        heading.style.transition = 'transform 2s ease, opacity 2s ease';
        heading.style.transform = 'translateY(0)';  
        heading.style.opacity = 1;  
    }, 200);  

   
    const cakesMenu = document.querySelector('.cakes-menu');

   
    cakesMenu.style.transform = 'translateX(-100%)';
    cakesMenu.style.opacity = 0;  


    setTimeout(() => {
        cakesMenu.style.transition = 'transform 3s ease, opacity 3s ease';
        cakesMenu.style.transform = 'translateX(0)';  
        cakesMenu.style.opacity = 1;  
    }, 200);  


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

    cakeBoxes.forEach(cakeBox => {
        cakeBox.addEventListener('click', () => {
            const cakeName = cakeBox.querySelector('h3').textContent;
            alert(`You clicked on ${cakeName}!`);
        });
    });
});

