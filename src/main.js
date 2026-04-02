import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Dark Mode Toggle ---
    const html = document.documentElement;
    const themeToggleBtnDesktop = document.getElementById('theme-toggle');
    const themeIconDesktop = document.getElementById('theme-icon');
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    const themeIconMobile = document.getElementById('theme-icon-mobile');

    // Initialize Theme (check local storage or system preference)
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
        updateIcons('light_mode');
    } else {
        html.classList.remove('dark');
        updateIcons('dark_mode');
    }

    function updateIcons(iconName) {
        if(themeIconDesktop) themeIconDesktop.textContent = iconName;
        if(themeIconMobile) themeIconMobile.textContent = iconName;
    }

    function toggleTheme() {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            localStorage.theme = 'dark';
            updateIcons('light_mode');
        } else {
            localStorage.theme = 'light';
            updateIcons('dark_mode');
        }
    }

    if(themeToggleBtnDesktop) themeToggleBtnDesktop.addEventListener('click', toggleTheme);
    if(themeToggleBtnMobile) themeToggleBtnMobile.addEventListener('click', toggleTheme);

    // --- 2. Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMenu() {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeMenu() {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    }

    if(mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMenu);
    if(closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- 3. Navbar Scroll Effect ---
    const nav = document.getElementById('navbar');
    const navBg = document.getElementById('nav-bg');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.replace('py-4', 'py-2');
            navBg.classList.replace('opacity-0', 'opacity-100');
            nav.classList.add('shadow-sm');
        } else {
            nav.classList.replace('py-2', 'py-4');
            navBg.classList.replace('opacity-100', 'opacity-0');
            nav.classList.remove('shadow-sm');
        }
    });

    // --- 4. Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-12');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatableElements = document.querySelectorAll('.animate-on-scroll');
    animatableElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-1000', 'ease-out');
        observer.observe(el);
    });
});