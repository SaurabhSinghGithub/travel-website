// Search bar js

let searchIcon = document.querySelector('#searchIcon');
let searchBar = document.querySelector('.search');

searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    searchIcon.classList.toggle('fa-xmark');
})

// Form js

let formIcon = document.querySelector('#formIcon');
let form = document.querySelector('.form');
let closeForm = document.querySelector('.closeForm');


formIcon.addEventListener('click', () => {

    form.classList.add('active')

})

closeForm.addEventListener('click', () => {

    form.classList.remove('active')

})

// navbar toggle js
let navbarIcon = document.querySelector('.navbarIcon');
let navbar = document.querySelector('.navbar');

navbarIcon.addEventListener('click', () => {

    navbar.classList.toggle('active');
    navbarIcon.classList.toggle('fa-xmark');

})

// hide on scroll js

window.onscroll = () => {
    searchBar.classList.remove('active');
    searchIcon.classList.remove('fa-xmark');

    form.classList.remove('active')

    navbar.classList.remove('active');
    navbarIcon.classList.remove('fa-xmark');
}

// Home video js

let circle = document.querySelectorAll('.circle');
let videoSlider = document.querySelector('#video-slider');


circle.forEach(element => {
    element.addEventListener('click', () => {

        document.querySelector('.circle.active').classList.remove('active')
        element.classList.add('active');

        let player = element.getAttribute('data-src')
        videoSlider.src = player;

    })
});


// swiper js

var swiper = new Swiper(".swiper-container", {

    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 25,

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
    }

});

var swiper = new Swiper(".swiper-brands", {

    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 15,

    breakpoints: {

        500: {
            slidesPerView: 2,
        },

        600: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 5,
        },
    }

});