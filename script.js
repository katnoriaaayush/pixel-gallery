document.addEventListener('DOMContentLoaded', () => {
    console.log('Pixel Art Gallery Loaded!');

    const strips = document.querySelectorAll('.photobooth-strip');
    const body = document.body;

    strips.forEach(strip => {
        // Create Back Button
        const backBtn = document.createElement('button');
        backBtn.innerText = 'BACK';
        backBtn.classList.add('back-btn');
        
        // Add button to the top of the strip
        strip.insertBefore(backBtn, strip.firstChild);

        // Expand on click
        strip.addEventListener('click', (e) => {
            // If clicking the back button, don't trigger expand (handled below)
            if (e.target === backBtn) return;

            if (!strip.classList.contains('expanded')) {
                strip.classList.add('expanded');
                body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });

        // Collapse on Back Button click
        backBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling to strip click
            strip.classList.remove('expanded');
            body.style.overflow = ''; // Restore scrolling
        });
    });

    // Typewriter effect for the RPG box
    const rpgText = document.querySelector('.rpg-box p');
    if (rpgText) {
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
    }
});
