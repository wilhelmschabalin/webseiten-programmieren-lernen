let prohib = ['+', '*', '=']
let solved = false

function display(content) {
    const displayWrapper = document.getElementById("display-wrapper")

    if (solved == true) {
        displayWrapper.innerHTML = ""
        solved = false
    }

    if (content === "") {
        displayWrapper.innerHTML = ""
    } else if (prohib.includes(content) && prohib.includes(displayWrapper.innerHTML.slice(-1))) {

    } else {
        displayWrapper.innerHTML += content
    }
}

function clearDisplay() {
    document.getElementById("display-wrapper").innerHTML = ""
}

function calculate() {
    const displayWrapper = document.getElementById("display-wrapper")
    
    if (prohib.includes(displayWrapper.innerHTML.slice(-1))) {
        document.getElementById("display-wrapper").innerHTML = "syntax error"
        solved = true
    } else {
        document.getElementById("display-wrapper").innerHTML = "solution"
        solved = true
    }
}