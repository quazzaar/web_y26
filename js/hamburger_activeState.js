(function() {
    const menuLinks = document.querySelectorAll('.navbar__menu-link');
    const currentPage = document.location.pathname;

    menuLinks.forEach(link => {
        const linkPage = new URL(link.href).pathname;
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
})();