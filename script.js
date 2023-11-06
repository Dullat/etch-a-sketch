const sketchBox = document.querySelector('.sketch-box');
const slider = document.querySelector('.slider');
const reset = document.querySelector('.reset');
const erase = document.querySelector('.eraser');
const sliderValue = 0;



function createSketchBox(v) {
    sketchBox.style.display = 'grid';
    sketchBox.style.gridTemplateColumns = `repeat(${v}, 1fr)`;
    sketchBox.style.gridTemplateRows = `repeat(${v}, 1fr)`;
    createPixle('aliceblue', v);
}

function clearBox() {
    let pixleArray = document.querySelectorAll('.pixle');
    pixleArray.forEach(element => {
        element.remove();
        console.log("haha");
    });
}

function createPixle(color, v) {
    for (let i = 0; i < v * v; i++) {
        const pixle = document.createElement('div');
        pixle.classList.add('pixle');
        pixle.style.cssText = `height: auto; aspect-ratio: 1; background: ${color};`;
        pixle.addEventListener('mouseover', changeColor);
        pixle.addEventListener('mousedown', changeColor);
        sketchBox.appendChild(pixle);
    }
}

let mouseDown = false
sketchBox.onmousedown = () => { mouseDown = true }
sketchBox.onmouseup = () => { mouseDown = false }
sketchBox.addEventListener('mousemove', (e) => {


})

function changeColor(e) {
    if ((e.type === 'mouseover') && (mouseDown)) {
        e.target.style.background = colorName();
    }
}

createSketchBox(20);

slider.addEventListener('mouseup', function () {
    console.log(slider.value);
    clearBox();

    createSketchBox(slider.value);
    1000
});

reset.addEventListener('click', () => {
    clearBox();
    createSketchBox(20);
    slider.value = 20;
})

function colorName(){
    
}
