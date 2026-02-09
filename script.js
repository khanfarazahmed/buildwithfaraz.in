document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = particle.style.height = Math.random() * 5 + 2 + 'px';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particlesContainer.appendChild(particle);
        }
    }
    createParticles();

    window.addEventListener('scroll', function() {
        const heroSections = document.querySelectorAll('.hero-skills, .hero-projects');
        heroSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    document.querySelectorAll('.hero-skills, .hero-projects').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px) scale(0.95)';
        section.style.transition = 'opacity 0.8s, transform 0.8s';
    });

});
