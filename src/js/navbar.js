export function createNavbar(currentPage) {
    const navbar = document.createElement('nav');
    navbar.className = 'fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 border-b border-red-900/20 px-4 py-3 z-50';

    const container = document.createElement('div');
    container.className = 'container mx-auto flex items-center justify-between';

    // Logo/Home link
    const homeLink = document.createElement('a');
    homeLink.href = '../index.html';
    homeLink.className = 'text-amber-300 hover:text-amber-400 transition-colors pixel-font text-xl';
    homeLink.textContent = 'Balatro';

    // Navigation links
    const linkContainer = document.createElement('div');
    linkContainer.className = 'flex space-x-6';

    const links = [
        { title: 'Introducción', url: '../src/introduction.html' },
        { title: 'Acta de Constitución', url: '../src/acta.html' },
        { title: 'Planificación', url: '../src/planning.html' },
        { title: 'Ejecución', url: '../src/execution.html' },
        { title: 'Monitoreo', url: '../src/monitoring.html' },
        { title: 'Cierre', url: '../src/closure.html' },
        { title: 'Conclusión', url: '../src/conclusion.html' },
        { title: 'Portafolio', url: '../src/portfolio.html'}
    ];

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = `text-gray-300 hover:text-red-400 transition-colors ${
            currentPage === link.url ? 'text-red-400' : ''
        }`;
        a.textContent = link.title;
        linkContainer.appendChild(a);
    });

    container.appendChild(homeLink);
    container.appendChild(linkContainer);
    navbar.appendChild(container);

    return navbar;
}