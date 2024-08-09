let burger = document.getElementsByClassName('burger')[0]
let menuList = document.getElementsByClassName('link')[0]

burger.addEventListener('click', () => {
    menuList.classList.toggle('active-menu')
    burger.classList.toggle('active-burger')
})

$(document).ready(function() {
    console.log($('.slick-block'))
    $('.slick-block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
    });
})