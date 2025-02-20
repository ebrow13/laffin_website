function showMenubar() {
    const menubar = document.querySelector('.menubar');
    menubar.style.display = 'flex';
}

function hideMenubar() {
    const menubar = document.querySelector('.menubar');
    menubar.style.display = 'none';
}

function stickyNav() {
    var headerHeight = document.querySelector('#navigationbar').offsetHeight;
    var navbar = document.querySelector('nav');
    var scrollValue = window.scrollY;

    if(scrollValue > headerHeight) {
        navbar.classList.add('header-sticky');
    }
    else{
        navbar.classList.remove('header-sticky');
    }
}

window.addEventListener('scroll', stickyNav);
