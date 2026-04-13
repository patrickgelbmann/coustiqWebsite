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

    // --- 5. Contact Form ---
    const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
    const FORM_ACCESS_KEY = 'be5df1d5-6c44-4a3a-96b4-f372a8c40b0f';

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name    = document.getElementById('cf-name').value.trim();
            const email   = document.getElementById('cf-email').value.trim();
            const message = document.getElementById('cf-message').value.trim();
            const feedback = document.getElementById('cf-feedback');
            const submitBtn  = document.getElementById('cf-submit');
            const submitText = document.getElementById('cf-submit-text');
            const submitIcon = document.getElementById('cf-submit-icon');

            if (!name || !email || !message) {
                showFeedback(feedback, 'Bitte füllen Sie alle Pflichtfelder aus.', 'error');
                return;
            }

            // Loading state
            submitBtn.disabled = true;
            submitText.textContent = 'Wird gesendet …';
            submitIcon.textContent = 'hourglass_top';

            try {
                const res = await fetch(FORM_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        access_key: FORM_ACCESS_KEY,
                        name:    document.getElementById('cf-name').value,
                        email:   document.getElementById('cf-email').value,
                        phone:   document.getElementById('cf-phone').value,
                        subject: document.getElementById('cf-subject').value,
                        message: document.getElementById('cf-message').value,
                    }),
                });

                if (res.ok) {
                    showFeedback(feedback, 'Vielen Dank! Wir melden uns so schnell wie möglich bei Ihnen.', 'success');
                    form.reset();
                } else {
                    throw new Error('server error');
                }
            } catch {
                showFeedback(feedback, 'Etwas ist schiefgelaufen. Bitte schreiben Sie uns direkt an office@coustiq.com.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitText.textContent = 'Anfrage senden';
                submitIcon.textContent = 'send';
            }
        });
    }

    function showFeedback(el, message, type) {
        el.textContent = message;
        el.className = type === 'success'
            ? 'mb-6 px-4 py-3 rounded-xl text-sm font-medium bg-accent/20 text-accent border border-accent/30'
            : 'mb-6 px-4 py-3 rounded-xl text-sm font-medium bg-red-500/20 text-red-300 border border-red-500/30';
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});