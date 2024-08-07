document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const fullScreenMenu = document.getElementById('fullScreenMenu');
    const textBoxes = document.querySelectorAll('.text-box');

    hamburgerMenu.addEventListener('click', function() {
        fullScreenMenu.classList.toggle('hidden');
    });

    window.addEventListener('scroll', function() {
        textBoxes.forEach(box => {
            const boxPosition = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxPosition < windowHeight - 100) {
                box.classList.add('visible');
            }
        });
    });
});