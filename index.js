const bigBox = document.querySelector("#bigbox")

let slider = document.querySelector("#range");
let sliderText = document.querySelector('#range-value')


slider.oninput = function() {makeGrid(this.value)
sliderText.textContent = `${this.value} X ${this.value} in total: ${this.value * this.value} `}

function makeGrid(boxes) {
    bigBox.innerHTML = ''
    if(boxes > 64){
        return
    }
    bigBox.style.gridTemplateColumns = `repeat(${boxes}, 1fr)`
    bigBox.style.gridTemplateRows = `repeat(${boxes}, 1fr)`    
        for(let i = 0; i < boxes * boxes; i++){
        let boxKun = document.createElement('div')
        boxKun.classList.add('aqua')
        bigBox.appendChild(boxKun)}
}

// makeGrid(boxes)