const bigBox = document.querySelector("#bigbox")
const slider = document.querySelector("#range");
const sliderText = document.querySelector('#range-value')
const clearBtn = document.querySelector('#clear')
const rainbow = document.getElementById('rainbow')
clearBtn.addEventListener('click', () => {
    makeGrid(slider.value)
})

rainbow.oninput = function() {makeGrid(slider.value)
    sliderText.textContent = `${slider.value} X ${slider.value} in total: ${slider.value * slider.value} `}



slider.oninput = function() {makeGrid(this.value)
    sliderText.textContent = `${this.value} X ${this.value} in total: ${this.value * this.value} `}


    function randomColor(){
        return Math.floor(Math.random() * 255)
    }
    


function makeGrid(boxes) {
    bigBox.innerHTML = ''
    if(boxes > 64){
        return
    }
    bigBox.style.gridTemplateColumns = `repeat(${boxes}, 1fr)`
    bigBox.style.gridTemplateRows = `repeat(${boxes}, 1fr)`    
        for(let i = 0; i < boxes * boxes; i++){
        let div = document.createElement('div')
        if(rainbow.checked){
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
            })
        } else {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#ccc'
        })}
        bigBox.appendChild(div)}
}