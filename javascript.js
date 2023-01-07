const grid = document.querySelector('.grid');

createGrid = (val) => {
    for (let i = 0; i < val * val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
};

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    let val = 16;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'white';
    }
});

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    createGrid(val);
});

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

createGrid(16);