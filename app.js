const container = document.querySelector('#container');
let penStyle = 'black';
//generates the grid

    //TODO: allow the grid's dimension to be dynamic (8-64 units);
    // different colors options for the "pens".
for(let i = 0; i < 256; i++){
    const gridUnit = document.createElement('div');
    gridUnit.classList.add('square', 'unit');
    gridUnit.addEventListener('mouseover', (e) => {
        gridUnit.style.backgroundColor = penStyle;
    });
    container.appendChild(gridUnit)
}

//clear the grid with this button
const clearButton = document.querySelector('#clear-button');
const gridUnits = document.querySelectorAll('.unit');

clearButton.addEventListener('click', (e) => {
    gridUnits.forEach((unit) => {
        unit.style.backgroundColor = 'white';
    }) 
});

//black pen
const blackButton = document.querySelector('#black-button');

blackButton.addEventListener('click', (e) => {
    penStyle = 'black';
})

//eraser pen
const eraserButton = document.querySelector('#eraser-button');

eraserButton.addEventListener('click', (e) => {
    penStyle = 'white';
})

//rainbow pen
// const rainbowButton = document.querySelector('#rainbow-button');

// rainbowButton.addEventListener('click', rainbowColor);

// function rainbowColor(){
//     let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


//}