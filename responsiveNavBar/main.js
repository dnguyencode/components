const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.getElementsByClassName('navbar-links');

toggleButton.addEventListener('click', () => {
    for (i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].classList.toggle('active');
    }
})