document.addEventListener('DOMContentLoaded', function () {
    function updateGrid(size){
        gridContainer.innerHTML = '';
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        for(let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            gridItem.addEventListener('mouseover', function () {
                gridItem.style.backgroundColor = 'black';
            });

            gridContainer.appendChild(gridItem);
        }

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    }

    const defaultSize = 8;
    const gridContainer = document.querySelector('.grid-container');
    const gridSizeInput = document.getElementById('grid-size');

    updateGrid(defaultSize);

    gridSizeInput.addEventListener('input', function () {
        updateGrid(gridSizeInput.value);
    });
});
