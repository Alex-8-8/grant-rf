const mobileNavToggler = () => {
    const menuToggler = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const listItemClose = document.querySelector(".mobile-nav__item--close");

    menuToggler.addEventListener('click', () => {
        mobileNav.classList.toggle('mobile-nav--show')
        menuToggler.classList.toggle('menu-toggle--close')
    })

    listItemClose.addEventListener('click', () => {
        mobileNav.classList.toggle('mobile-nav--show')
        menuToggler.classList.toggle('menu-toggle--close')
    })

    document.getElementById('html').classList.toggle('scroll-disable');
}

mobileNavToggler()
