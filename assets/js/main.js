
// Mobile nav toggle button
let MenuBtn = document.querySelector('#MenuBtn');

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});