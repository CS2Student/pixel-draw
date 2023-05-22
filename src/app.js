const grid = document.getElementById('grid');

let currentColor = 'white';
let currentMode = 'paint';

/* Create 16x16 canvas */

let size = 16;
let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);

function createCanvas(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        var cell = document.createElement('div');
        cell.classList.add('grid-cell');
        
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);

        grid.appendChild(cell);
    }
}

function changeColor(e) {
    const eventTarget = e.target;
    const eventType = e.type;
    isMouseDown = true;

    if (eventType === 'mouseover' && eventType !== 'mousedown') {
        eventTarget.style.backgroundColor = 'pink';
    }

    if (isMouseDown === true) {
        if (currentMode === 'paint') {
            eventTarget.style.backgroundColor = 'black';
        }
    }

}

createCanvas(size);