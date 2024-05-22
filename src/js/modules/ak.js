const ak = () => {
        // Получаем кнопку "Еще..."
    const moreButton = document.querySelector('.idk');

    // Функция, которая добавляет элемент в список
    function addNewItem() {
        const gridContainer = document.querySelector('.grid-container');
        const newItem = document.createElement('div');
        newItem.classList.add('grid-item');
        newItem.innerHTML = `
            <img class="gridimg" src="./assets/img/running_shoes_PNG5823.png" alt="">
            <div class="gridtxt">Nike</div>
            <div class="price">1000 руб.</div>
            <button class="add-to-cart-button">Добавить в корзину</button>
        `;
        gridContainer.appendChild(newItem);
        const newItem2 = document.createElement('div');
        newItem2.classList.add('grid-item');
        newItem2.innerHTML = `
            <img class="gridimg" src="./assets/img/running_shoes_PNG5823.png" alt="">
            <div class="gridtxt">Nike</div>
            <div class="price">1000 руб.</div>
            <button class="add-to-cart-button">Добавить в корзину</button>
        `;
        gridContainer.appendChild(newItem2);
        const newItem3 = document.createElement('div');
        newItem3.classList.add('grid-item');
        newItem3.innerHTML = `
            <img class="gridimg" src="./assets/img/running_shoes_PNG5823.png" alt="">
            <div class="gridtxt">Nike</div>
            <div class="price">1000 руб.</div>
            <button class="add-to-cart-button">Добавить в корзину</button>
        `;
        gridContainer.appendChild(newItem3);
        const newItem4 = document.createElement('div');
        newItem4.classList.add('grid-item');
        newItem4.innerHTML = `
            <img class="gridimg" src="./assets/img/running_shoes_PNG5823.png" alt="">
            <div class="gridtxt">Nike</div>
            <div class="price">1000 руб.</div>
            <button class="add-to-cart-button">Добавить в корзину</button>
        `;
        gridContainer.appendChild(newItem4);
    }

    // Обработчик события клика на кнопку "Еще..."
    moreButton.addEventListener('click', addNewItem);

}
export default ak