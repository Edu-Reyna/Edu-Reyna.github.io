import { planningData } from 'js/planningData.js';
import { renderPlanning } from 'js/planningRenderer.js';
import { initializeAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('content');
    contentContainer.appendChild(renderPlanning(planningData));
});
initializeAnimations();