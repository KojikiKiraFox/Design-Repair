document.addEventListener('DOMContentLoaded', function(event){ // подождали пока загрузится весь сайт
    const modal = document.querySelector('.modal'); // нашли модальное окно и назвали её modal что бы не искаит каждый раз, const озночает что значение не изменится
    const modalBtn = document.querySelectorAll('[data-toggle=modal]') // нашли все кнопки что должны вести на модальное окно, так же нашли все кнопки и назвали их modalBtn
    const closeBtn = document.querySelector('.modal__close') // нашли кнопку закрытия модального окна, назвали closeBtn

    const switchModal = () => { // создали переменную которая означала функцию открытия
        modal.classList.toggle('modal-visible') // сделали "выключатель" (если модальное окно открыто то оно закроится и на оборот)
    } 

    modalBtn.forEach(element => { // присвоили функцию кнопки(что открывает окно)
        element.addEventListener('click', switchModal) // при нажатии на нужные кнопки будет открыто модальное окно
    })

    closeBtn.addEventListener('click', switchModal) // при нажатии на крест модальное окно закроется


});