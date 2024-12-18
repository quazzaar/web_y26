(function () {
        document.addEventListener('DOMContentLoaded', () => {
        const footer = document.querySelector('footer'); // Находим уже существующий футер
        const loadTime = performance.now(); // Время загрузки страницы
        footer.innerHTML += `Страница загружена за ${loadTime.toFixed(2)} мс.`; // Обновляем текст футера
    });
})();