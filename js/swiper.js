document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        // Настройки

        direction: 'horizontal', // Горизонтальный слайдер
        loop: true,              // Бесконечная прокрутка

        // Навигационные кнопки
        navigation: {
            nextEl: '.swiper-button-next', //кнопка, которая ведет к следующему элементу
            prevEl: '.swiper-button-prev', //кнопка, которая ведет к предыдущему элементу
        },

        // Пагинация
        pagination: {
            el: '.swiper-pagination', //добавляем пагинацию (точки внизу, которые
            clickable: true, //делаем точки пагинации кликабельными
        },

        // Прокрутка
        autoplay: {
            delay: 3000, //каждые 3000 мс происходит автоматическая прокрутка на следующий слайд
        },
    });
});