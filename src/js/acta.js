import { sections } from './data.js';
import { renderSection } from './renderer.js';
import { initializeAnimations } from './animations.js';

const contentContainer = document.getElementById('content');

sections.forEach((section, index) => {
    const sectionElement = renderSection(section);
    sectionElement.style.animationDelay = `${index * 0.1}s`;
    sectionElement.classList.add('animate-fade-in');
    contentContainer.appendChild(sectionElement);
});

initializeAnimations();