const container = document.querySelector('#container');


for(let i = 0; i < 256; i++){
    const gridUnit = document.createElement('div');
    gridUnit.classList.add('square');
    gridUnit.addEventListener('mouseover', (e) => {
        gridUnit.classList.add('hovered');
    });
    container.appendChild(gridUnit)
}
