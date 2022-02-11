let container = document.querySelector('#container');
const button = document.querySelector('button');
var root = document.querySelector(':root');

const initialSize = 16 * 16;

function createInitialGrid() {
    for (let i = 0; i < initialSize; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
    createPixels();
}

createInitialGrid();

function clearContainer() {
    let first = container.firstElementChild;
    while (first) {
        first.remove();
        first = container.firstElementChild;
    }
}

function createSketch(length) {

    clearContainer();
    const size = length * length;
    for (let i = 0; i < size; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
    root.style.setProperty('--columns', length);
    root.style.setProperty('--rows', length);

}

function checkLength(length) {
    if (length > 100) {
        alert("Can't create sketch of size more than (100 x 100)!");
        length = 100;
    }
}

button.addEventListener('click', () => {
    const dimension = +prompt("Enter the number of squares of a side in the sketch (up to 100 maximum)", "16");
    checkLength(dimension);
    createSketch(dimension);
    createPixels();
});

function createPixels() {
    let painted = false;

    for (const child of container.children) {

        child.addEventListener('mousedown', function(e) {
            painted = true;
            e.stopPropagation();
        });

        child.addEventListener('mousemove', function(e) {
            if (painted) {
                child.classList.remove('grid');
                child.classList.add('grid-dark');
            }
            e.stopPropagation();
        });

        child.addEventListener('mouseup', function(e) {
            painted = false;
            e.stopPropagation();
        });
    }
}