document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Animação de Scroll (Scroll Reveal) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // --- Lógica para Menu Ativo conforme o Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px' // Ativa quando a seção está no meio da tela
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});
