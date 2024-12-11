export function calculateCirclePosition(index, total, radius) {
    const angle = (index / total) * 2 * Math.PI;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
}

export function createNavigationButton(link, index, total) {
    const button = document.createElement('a');
    button.href = link.url;
    button.className = `
        absolute transform -translate-x-1/2 -translate-y-1/2
        w-32 h-32 rounded-full
        flex items-center justify-center
        bg-gradient-to-br ${link.color}
        text-white font-bold pixel-font text-center
        shadow-lg hover:scale-110 transition-all duration-300
        border-2 border-white/20 backdrop-blur-sm
        hover:border-white/40
    `;
    
    const { x, y } = calculateCirclePosition(index, total, 200);
    button.style.left = `calc(50% + ${x}px)`;
    button.style.top = `calc(50% + ${y}px)`;
    
    button.textContent = link.title;
    return button;
}