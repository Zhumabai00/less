$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
    });


});



Fancybox.bind("#gallery a", {
    groupAll: true,
});

const burger = document.getElementById('burger');
const show = document.getElementById('show-burger');
let bool = true;
burger.addEventListener("click", (btn) => {
    if (bool) {
        show.classList.add('active');
        bool = !bool

    } else {
        show.classList.remove('active');
        bool = !bool;
    }
})
show.addEventListener('click', (b) => {
    if (b.target == show) {
        show.classList.remove('active');
    } else {
        // show.classList.add('active');
    }
})
