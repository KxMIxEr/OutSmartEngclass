document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.hero-btn');
    if (btn) {
        btn.addEventListener('click', function() {
            const nextSection = document.getElementById('about');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    // Slide-in animation for text
    const slideEls = document.querySelectorAll('.slide-in');
    slideEls.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-60px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
        }, 200 + i * 180);
    });
});
