function changeBackground() {
    this.classList.add("pinkBackground")
}

function addMouseOverEventListenerToSquare(square) {
    square.addEventListener("mouseover", changeBackground)
}

function clearPad() {
    let container = document.querySelector('#container')
    let squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        container.removeChild(square)
    })
}

function repaintPad() {
    clearPad()
    drawPad(prompt("How many rows do you want new grid to contain?"))
}

function drawPad(numberOfRows) {
    let container = document.querySelector('#container')
    for (let i = 0; i < numberOfRows ** 2; i++) {
        let squareDiv = document.createElement("div")
        squareDiv.classList.add("square")
        squareDiv.style.width = 960 / numberOfRows
        squareDiv.style.height = 960 / numberOfRows
        container.appendChild(squareDiv)
        addMouseOverEventListenerToSquare(squareDiv)
    }
    container.style.gridTemplateColumns = `repeat(${numberOfRows}, 1fr)`

    let clearBtn = document.querySelector('#clear')
    clearBtn.addEventListener('click', repaintPad)
}

//first of all, paint default pad
drawPad(16)