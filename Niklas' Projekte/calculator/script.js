let prohib = ['+', '*', '=']
let solved = false
let solution = ""

function statuss() {
    if (solved == false) {
        document.getElementById("red").innerHTML = "running"
        document.getElementById("green").innerHTML = ""
    } else {
        document.getElementById("green").innerHTML = "complete"
        document.getElementById("red").innerHTML = ""
    }
}

// display(content) shows whatever is entered.

function display(content) {
    const displayWrapper = document.getElementById("display-wrapper")

    statuss()

    if (solved == true) { // If the last process is solved and a button is pressed, the screen resets and the new process counts as not solved.
        displayWrapper.innerHTML = ""
        solved = false
    }

    if (content == "") { // If the function is called with no parameter passed, nothing is displayed.
        displayWrapper.innerHTML = ""
    } else if (prohib.includes(content) && prohib.includes(displayWrapper.innerHTML.slice(-1))) { // If two operators are placed in a row, nothing will happen.

    } else {
        displayWrapper.innerHTML += content
        solution += content
    }

    statuss()
}

// clearDisplay() empties the display-wrapper.

function clearDisplay() {

    statuss()

    document.getElementById("display-wrapper").innerHTML = ""
    solution = ""
    solved = true

    statuss()
}

// calculate() checks if the input is valid and, if so, calculates the result.

function calculate() {
    const displayWrapper = document.getElementById("display-wrapper")

    statuss()

    if (prohib.includes(displayWrapper.innerHTML.slice(-1)) || prohib.includes(displayWrapper.innerHTML.slice(0, 1))) { // If the expression starts or ends with an operator, a syntax error is thrown.
        document.getElementById("display-wrapper").innerHTML = "syntax error"
        solved = true
        solution = ""
    } else if (displayWrapper.innerHTML == "syntax error") { // If there is already a syntax error present, pressing the "=" button should not show a solution.

    } else if (solution == "") { // If no solution could be calculated, nothing happens.

    } else { // Else, the solution is displayed and the process counts as solved.
        document.getElementById("display-wrapper").innerHTML = "'" + solution + "'"
        solved = true
        solution = ""
    }

    statuss()
}