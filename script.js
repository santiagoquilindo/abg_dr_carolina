// Script para menú móvil hamburger - Optimizado con validaciones
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.main-nav');
    const headerContainer = document.querySelector('.header-container');

    // Validar que elementos existan
    if (!nav || !headerContainer) {
        console.warn('Elementos de navegación no encontrados');
        return;
    }

    // Crear botón hamburger
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
    `;
    hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-controls', 'main-nav');

    // Asignar ID a nav si no lo tiene
    if (!nav.id) {
        nav.id = 'main-nav';
    }

    // Insertar hamburger antes de nav
    headerContainer.insertBefore(hamburger, nav);

    // Función para cerrar menú
    function closeMenu() {
        nav.classList.remove('nav-open');
        hamburger.classList.remove('hamburger-open');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    // Función para abrir/cerrar menú
    function toggleMenu() {
        nav.classList.toggle('nav-open');
        hamburger.classList.toggle('hamburger-open');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
    }

    // Toggle menú al hacer click en hamburger
    hamburger.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer click en enlace
    nav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        const isOpen = nav.classList.contains('nav-open');
        if (isOpen && !headerContainer.contains(e.target)) {
            closeMenu();
        }
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const isOpen = nav.classList.contains('nav-open');
            if (isOpen) {
                closeMenu();
                hamburger.focus(); // Mantener focus en hamburger
            }
        }
    });
});