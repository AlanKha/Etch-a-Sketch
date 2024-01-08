document.addEventListener('DOMContentLoaded', function () {

    const defaultSize = 16;
    const gridContainer = document.querySelector('.grid-container');
    const gridSizeInput = document.getElementById('grid-size');
    const clearButton = document.getElementById('clear');
    const gridSizeDisplay = document.getElementById('grid-size-display');
    const blackBtn = document.querySelector('#black');
    const rainbowBtn = document.querySelector('#rainbow');
    const eraserBtn = document.querySelector('#eraser')

    let black = true;
    let rainbow = false;
    let eraser = false;

    

    function clearGrid() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(gridItem => {
            gridItem.style.backgroundColor = 'white';
        });
    }

    function updateGrid(size){
        gridContainer.innerHTML = '';
        gridSizeDisplay.textContent = `${size}x${size}`
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        for(let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            gridItem.addEventListener('mouseover', function () {
                if(black){
                    gridItem.style.backgroundColor = 'black';
                }
                if(eraser){
                    gridItem.style.backgroundColor = 'white';
                }
                if(rainbow){
                    gridItem.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                }
            });

            gridContainer.appendChild(gridItem);
        }

        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    }

    function changeColor(color){
        black = false;
        rainbow = false;
        eraser = false;

        blackBtn.classList.remove('selected');
        rainbowBtn.classList.remove('selected');
        eraserBtn.classList.remove('selected');
    
        if (color === 'black') {
            black = true;
            blackBtn.classList.add('selected');
        } else if (color === 'rainbow') {
            rainbow = true;
            rainbowBtn.classList.add('selected');
        } else if (color === 'eraser') {
            eraser = true;
            eraserBtn.classList.add('selected');
        }
    }
    
    
    blackBtn.onclick = () => changeColor("black")
    rainbowBtn.onclick = () => changeColor("rainbow")
    eraserBtn.onclick = () => changeColor("eraser")
    
    clearButton.onclick = () => clearGrid();

    updateGrid(defaultSize);

    gridSizeInput.addEventListener('input', function () {
        updateGrid(gridSizeInput.value);
    });
});
