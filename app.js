const container = document.querySelector('#container');
let penStyle = 'rgb(61, 61, 61)';
let gridLength = 16;
//generates the grid

    //TODO: allow the grid's dimension to be dynamic (8-64 units);
    // different colors options for the "pens".
function generateGrid(){
    for(let i = 0; i < gridLength; i++){
        for(let j = 0; j < gridLength; j++){
            const gridUnit = document.createElement('div');
            gridUnit.classList.add('square', 'unit');
            gridUnit.style.width = `calc(var(--container-dimension) / ${gridLength})`;
            gridUnit.style.height = `calc(var(--container-dimension) / ${gridLength})`;
            gridUnit.addEventListener('mouseover', (e) => {
                gridUnit.style.backgroundColor = penStyle;
            });
            container.appendChild(gridUnit);
        }
    }
}

generateGrid();

//clear the grid with this button
const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', (e) => {
    const gridUnits = document.querySelectorAll('.unit');
    gridUnits.forEach((unit) => {
        unit.style.backgroundColor = 'lightgrey';
    }) 
});

//black pen
const blackButton = document.querySelector('#black-button');

blackButton.addEventListener('click', (e) => {
    penStyle = 'rgb(61, 61, 61)';
})

//eraser pen
const eraserButton = document.querySelector('#eraser-button');

eraserButton.addEventListener('click', (e) => {
    penStyle = 'lightgrey';
})

//change grid dimension
const gridSizeButton = document.querySelector('#grid-button');

gridSizeButton.addEventListener('click', changeGrid);

function changeGrid(){
    while(true){
        gridLength = prompt('Enter a number between 2-30');
        if(gridLength >= 2 && gridLength <= 30){
            //clear all child nodes
            removeUnits();
            //replace with new grid with new grid length.
            generateGrid();
            break;
        }
    }
}

//removes child nodes from the container.
function removeUnits(){
    let child = container.firstElementChild;
    while(child){
        container.removeChild(child);
        child = container.firstElementChild;
    }
}