// Header
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn')

window.onscroll = () => {
    searchBtn.classList.remove('fa-xmark');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-xmark')
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-xmark');
    searchBar.classList.toggle('active');
})

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active')
})

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active')
})

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
})


videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;

    })
});


// Review slider

var swiper = new Swiper(".review-slider", {

    pagination: {
        el: ".swiper-pagination",
    },

    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// brand slider

var swiper = new Swiper(".brand-slider", {

    pagination: {
        el: ".swiper-pagination",
    },

    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {

        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    }
});

