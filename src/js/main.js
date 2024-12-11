import { createNavbar } from './navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    // Get current page path
    const currentPage = window.location.pathname;
    
    // Create and insert navbar
    const navbar = createNavbar(currentPage);
    document.body.insertBefore(navbar, document.body.firstChild);
});