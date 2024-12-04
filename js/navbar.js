const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

// Проверяем, что элементы существуют
if (menuButton && menu) {
    // Обработчик клика на кнопку гамбургера
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active'); // Переключаем класс 'active' для показа/скрытия меню
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
}