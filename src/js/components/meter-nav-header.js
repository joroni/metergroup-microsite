(function() {

    this.isOpen = false;
    let hamburger = {
        nav: document.querySelector('meter-nav-main'),
        navToggle: document.querySelector('.toggle'),

        initialize() {
            this.navToggle.addEventListener('click', () => { this.toggle(); });
        },

        toggle(force) {

            this.isOpen = typeof force === 'boolean' ? force : !this.isOpen

            this.navToggle.classList.toggle('open');
            this.nav.classList.toggle('open');
            this.navToggle.setAttribute('aria-expanded', String(this.isOpen));
        },
    };

    hamburger.initialize();

}());