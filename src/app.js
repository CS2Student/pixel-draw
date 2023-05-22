const grid = document.getElementById('grid-container');

/* Create 16x16 canvas */


for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
        var cell = document.createElement('div');
        cell.classList.add('grid-cell');

        grid.appendChild(cell);
    }
}

console.log(grid.innerHTML);