const DEFAULT_COLOR = 'white';
const DEFAULT_MODE = 'paint';
const DEFAULT_SIZE = 16;
const DEFAULT_MOUSE_STATUS = false;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let size = DEFAULT_SIZE;
let isMouseDown = DEFAULT_MOUSE_STATUS;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);

const grid = document.getElementById('grid');
const colorSetting = document.getElementById('colorSetting');
const eraserSetting = document.getElementById('eraserSetting');
const clearSetting = document.getElementById('clearSetting');
const sizeSetting = document.getElementById('sizeSetting');
const sizeValue = document.getElementById('sizeValue');


colorSetting.onclick = (e) => {
    currentColor = e.target.value;
}

clearSetting.onclick = () => {
    grid.innerText = '';
    createCanvas(size);
}

sizeSetting.oninput = (e) => {
    size = e.target.value;
    sizeValue.innerText = `${size} x ${size}`;
    grid.innerText = '';
    createCanvas(size);
}


function createCanvas(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        var cell = document.createElement('div');
        cell.classList.add('grid-cell');
        
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mouseout', changeColor);
        cell.addEventListener('mousedown', changeColor);

        grid.appendChild(cell);
    }
}

function changeColor(e) {
    const eventTarget = e.target;
    const eventType = e.type;

    if (eventType === 'mouseover' && eventType !== 'mousedown') {
        eventTarget.classList.add('hovered');
    }

    if (eventType === 'mouseout') {
        eventTarget.classList.remove('hovered');
    }

    if (isMouseDown === true) {
        if (currentMode === 'paint') {
            eventTarget.style.backgroundColor = 'black';
        }
        if (currentMode === 'erase') {
            eventTarget.style.backgroundColor = 'white';
        }
    }

}


/* MAIN */
createCanvas(size);