function display(content) {
    const displayWrapper = document.getElementById("display-wrapper");

    if (content === "") {
        displayWrapper.innerHTML = "";
    } else {
        displayWrapper.innerHTML += content;
    }
}

function clearDisplay() {
    document.getElementById("display-wrapper").innerHTML = "";
}  