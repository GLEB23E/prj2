const search = () => {
    const searchInput = document.querySelector('.search-input');
    const gridItems = document.querySelectorAll('.grid-item');

    // Функция для отображения всех элементов
    function showAllItems() {
        gridItems.forEach(item => {
            item.style.display = 'block';
        });
    }

    // Обработчик события input для поля ввода
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        gridItems.forEach(item => {
            const textElement = item.querySelector('.gridtxt');
            const itemName = textElement.textContent.toLowerCase();

            if (itemName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Если поле ввода пустое, показываем все элементы
        if (!searchTerm) {
            showAllItems();
        }
    });

    // Показываем все элементы при загрузке страницы
    showAllItems();

} 
export default search

