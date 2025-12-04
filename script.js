document.addEventListener('DOMContentLoaded', () => {
    console.log('Pixel Art Gallery Loaded!');

    // Add click event to gallery items for a simple "lightbox" effect (alert for now, can be upgraded)
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // In a real app, this would open a modal
            // For now, let's just do a cute animation
            item.style.transform = 'scale(0.9) rotate(5deg)';
            setTimeout(() => {
                item.style.transform = 'scale(1.05) rotate(0deg)';
            }, 200);
        });
    });

    // Typewriter effect for the RPG box
    const rpgText = document.querySelector('.rpg-box p');
    const text = rpgText.textContent;
    rpgText.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            rpgText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    typeWriter();
});
