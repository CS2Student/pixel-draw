const grid = document.getElementById('grid');

/* Create 16x16 canvas */

let size = 16;

function createCanvas(size) {

    grid.style.gridTemplateColumns = 'repeat(${size}, 1fr)';
    grid.style.gridTemplateRows = 'repeat(${size}, 1fr)';

    for (let i = 0; i < (size * size); i++) {
        var cell = document.createElement('div');
        cell.classList.add('grid-cell');
        grid.appendChild(cell);
    }

}

createCanvas(size);