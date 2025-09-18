document.addEventListener('DOMContentLoaded', function () {
    // Auto-update copyright year
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.copyright-year');
    copyrightElements.forEach(element => {
        element.textContent = currentYear;
    });

    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Function to apply filter
    function applyFilter(filter) {
        // Update active button state
        filterButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-blue-600', 'text-white');

            // Restore original button colors based on their data-filter
            const btnFilter = btn.getAttribute('data-filter');
            if (btnFilter === '3d-printing') {
                btn.classList.add('bg-green-100', 'text-green-800', 'hover:bg-green-200');
            } else if (btnFilter === '3d-software') {
                btn.classList.add('bg-purple-100', 'text-purple-800', 'hover:bg-purple-200');
            } else if (btnFilter === '3d-scanning') {
                btn.classList.add('bg-blue-100', 'text-blue-800', 'hover:bg-blue-200');
            } else {
                btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-100');
            }
        });

        // Find and activate the correct button
        const activeButton = document.querySelector(`[data-filter="${filter}"]`);
        if (activeButton) {
            activeButton.classList.add('active', 'bg-blue-600', 'text-white');
            activeButton.classList.remove('bg-green-100', 'bg-purple-100', 'bg-blue-100', 'text-green-800', 'text-purple-800', 'text-blue-800');
        }

        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category.includes(filter)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Check for URL parameter and apply filter on page load
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam) {
        applyFilter(filterParam);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navigation
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                nav.classList.add('shadow-lg');
                nav.classList.add('bg-white/95');
                nav.classList.add('backdrop-blur-sm');
            } else {
                nav.classList.remove('shadow-lg');
                nav.classList.remove('bg-white/95');
                nav.classList.remove('backdrop-blur-sm');
            }
        });
    }

    // Add loading animation to project cards
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-4px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .bg-white.rounded-lg');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add tooltip functionality
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.classList.add('tooltip');
    });

    // Form validation (if forms are added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Add form validation logic here
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function (e) {
        // Escape key to close mobile menu
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }

        // Tab key navigation improvements
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function () {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add lazy loading for images (if images are added later)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('image-placeholder');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.classList.add('image-placeholder');
        imageObserver.observe(img);
    });

    // Add copy to clipboard functionality for code snippets
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.className = 'copy-btn absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-sm';
        copyButton.addEventListener('click', function () {
            navigator.clipboard.writeText(block.textContent).then(function () {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            });
        });

        const pre = block.parentElement;
        if (pre) {
            pre.style.position = 'relative';
            pre.appendChild(copyButton);
        }
    });

    // Add search functionality for projects (if search is added later)
    const searchInput = document.querySelector('#project-search');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();

            projectCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();

                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Add theme toggle functionality (if dark mode is added later)
    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }

    // Add analytics tracking (if analytics are added later)
    function trackEvent(eventName, eventData = {}) {
        // Add analytics tracking logic here
    }

    // Track page views
    trackEvent('page_view', {
        page: window.location.pathname,
        title: document.title
    });

    // Track project clicks
    const projectLinks = document.querySelectorAll('.project-card a');
    projectLinks.forEach(link => {
        link.addEventListener('click', function () {
            const projectTitle = this.closest('.project-card').querySelector('h3').textContent;
            trackEvent('project_click', {
                project: projectTitle,
                url: this.href
            });
        });
    });

    // Add error handling for failed image loads
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.addEventListener('error', function () {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTMwQzExNi41NjkgMTMwIDEzMCAxMTYuNTY5IDEzMCAxMDBDMTMwIDgzLjQzMTUgMTE2LjU2OSA3MCAxMDAgNzBDODMuNDMxNSA3MCA3MCA4My40MzE1IDcwIDEwMEM3MCAxMTYuNTY5IDgzLjQzMTUgMTMwIDEwMCAxMzBaIiBmaWxsPSIjOUI5QkEwIi8+CjxwYXRoIGQ9Ik0xMDAgMTEwQzEwNS41MjMgMTEwIDExMCAxMDUuNTIzIDExMCAxMDBDMTEwIDk0LjQ3NzIgMTA1LjUyMyA5MCAxMDAgOTBDOTQuNDc3MiA5MCA5MCA5NC40NzcyIDkwIDEwMEM5MCAxMDUuNTIzIDk0LjQ3NzIgMTEwIDEwMCAxMTBaIiBmaWxsPSIjOUI5QkEwIi8+Cjwvc3ZnPgo=';
            this.alt = 'Image not available';
        });
    });

    // Add performance monitoring
    window.addEventListener('load', function () {
        const loadTime = performance.now();
        trackEvent('page_load_time', {
            loadTime: Math.round(loadTime)
        });
    });

    // Add accessibility improvements
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function () {
            this.classList.add('focus-visible');
        });

        element.addEventListener('blur', function () {
            this.classList.remove('focus-visible');
        });
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(style);
