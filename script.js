const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-open-button");

menuOpenButton.addEventListener("click", () => {
    // Togggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

// Initialize swiper 
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,

    // if we need pagination
    pagination: {
        el: 'Swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: 'swiper-button-next',
        prevEl: '.swiper-button-prev'.
    },

    // responsive breakpoints
    breakpoints: {
        0: {
            slidesPerview: 1
        },
        768: {
            slidesPerview: 2
        },
        1024: {
            slidesPerview: 3
        }
    }
});


