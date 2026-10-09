// Personal webpage interactions: mobile nav toggle + scroll spy.
(function () {
    'use strict';

    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    const links = Array.from(document.querySelectorAll('.nav__link'));
    const sections = links
        .filter((link) => (link.getAttribute('href') || '').startsWith('#'))
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    // --- Mobile menu toggle ---
    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            const isOpen = navList.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close the menu after tapping a link (mobile).
        navList.addEventListener('click', function (event) {
            if (event.target.classList.contains('nav__link')) {
                navList.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Scroll spy: highlight the nav link for the section in view ---
    if ('IntersectionObserver' in window && sections.length) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    const id = entry.target.getAttribute('id');
                    links.forEach(function (link) {
                        link.classList.toggle(
                            'is-active',
                            link.getAttribute('href') === '#' + id
                        );
                    });
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }
})();

// --- Article pages: contents rail highlight + copy link ---
(function () {
    'use strict';

    const tocLinks = Array.from(document.querySelectorAll('.toc__link'));
    const targets = tocLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if ('IntersectionObserver' in window && targets.length) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    const id = '#' + entry.target.id;
                    tocLinks.forEach(function (link) {
                        link.classList.toggle('is-current', link.getAttribute('href') === id);
                    });
                });
            },
            { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
        );
        targets.forEach(function (t) { observer.observe(t); });
    }

    const copyBtn = document.querySelector('[data-copy-link]');
    if (copyBtn && navigator.clipboard) {
        copyBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(window.location.href.split('#')[0]).then(function () {
                copyBtn.textContent = 'copied ✓';
                setTimeout(function () { copyBtn.textContent = 'copy link'; }, 1600);
            });
        });
    }
})();

// --- Poyo: stands still, walks to wherever you click ---
(function () {
    'use strict';

    const poyo = document.querySelector('.poyo');
    if (!poyo) return;
    const nav = poyo.closest('.nav');
    if (!nav) return;

    const SPEED = 46; // pixels per second — a slow stroll
    let walkTimer = null;

    function moveTo(clientX) {
        const navRect = nav.getBoundingClientRect();
        const half = poyo.offsetWidth / 2;
        const maxLeft = navRect.width - poyo.offsetWidth - 2;
        let target = clientX - navRect.left - half;
        target = Math.max(2, Math.min(maxLeft, target));

        const current = parseFloat(window.getComputedStyle(poyo).left) || 0;
        const dist = Math.abs(target - current);
        if (dist < 2) return;

        poyo.style.transform = 'scaleX(' + (target < current ? -1 : 1) + ')';
        const dur = Math.max(0.3, dist / SPEED);
        poyo.style.transitionDuration = dur + 's';
        poyo.classList.add('is-walking');
        poyo.style.left = target + 'px';

        clearTimeout(walkTimer);
        walkTimer = setTimeout(function () {
            poyo.classList.remove('is-walking');
        }, dur * 1000);
    }

    document.addEventListener('click', function (e) {
        moveTo(e.clientX);
    });
})();