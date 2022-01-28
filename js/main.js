// document.addEventListener('DOMContentLoaded', function(event){ // подождали пока загрузится весь сайт
//     const modal = document.querySelector('.modal'); // нашли модальное окно и назвали её modal что бы не искаит каждый раз, const озночает что значение не изменится
//     const modalBtn = document.querySelectorAll('[data-toggle=modal]') // нашли все кнопки что должны вести на модальное окно, так же нашли все кнопки и назвали их modalBtn
//     const closeBtn = document.querySelector('.modal__close') // нашли кнопку закрытия модального окна, назвали closeBtn

//     const switchModal = () => { // создали переменную которая означала функцию открытия
//         modal.classList.toggle('modal-visible') // сделали "выключатель" (если модальное окно открыто то оно закроится и на оборот)
//     } 

//     modalBtn.forEach(element => { // присвоили функцию кнопки(что открывает окно)
//         element.addEventListener('click', switchModal) // при нажатии на нужные кнопки будет открыто модальное окно
//     })

//     closeBtn.addEventListener('click', switchModal) // при нажатии на крест модальное окно закроется


// })

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');
        modalDialog = $('.modal__dialog')

    modalBtn.on('click', function () {
        modal.toggleClass('modal-visible')
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal-visible')
    });

    $(document).mouseup( function(e) {
        if(!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0 ) {
            modal.removeClass('modal-visible')
        };
    });

    $(document).on('keydown', function(e) {
    if (e.keyCode == 27)
    modal.removeClass('modal-visible')
    });


    const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
     },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     },
    });


    var next = $('.swiper-button-next')
    var prev = $('.swiper-button-prev')
    var bullets =$('.swiper-pagination')


    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10)
});