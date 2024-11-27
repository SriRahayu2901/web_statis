document.querySelector('.ri-menu-line').addEventListener('click', () => {const navLinks = document.querySelector('.nav-links'); navLinks.classList.toggel('active'); });
const menuNav = document.querySelector('.box menu-navigation')

menuBar.addEventListener('click', function (){
    menuNav.classList.toggel('menu-active');
});

document.querySelector('.registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const album = document.getElementById('favorite-album').value;

    if (!name || !email || !album) {
        alert('Please fill in all fields!');
        return;
    }

    alert('Registration Successful!');
    this.reset(); // Reset form after submission
});
