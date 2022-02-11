let container = document.querySelector('#container');

const initialSize = 16 * 16;

function createInitialGrid() {
    for (let i = 0; i < initialSize; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid-white');
        grid.setAttribute('style', 'border: 1px dotted black; padding: 16px; background-color: white;');
        container.appendChild(grid);
    }
    container.setAttribute('style', 'grid-template-columns: repeat(16, auto);');
}