let prohib = ['+', '*', '=']


function display(content) {
    const displayWrapper = document.getElementById("display-wrapper")

    if (content === "") {
        displayWrapper.innerHTML = "";
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

    } else {
        document.getElementById("display-wrapper").innerHTML = "solution"
    }
}