let prohib = [".", "+", "*", "="];
let solved = false;
let solution = "";
let operator = null;

function clickButton(input) {
  showStatus();
  if (input == "=") {
    calculateResult();
  } else {
    displayInput(input);
    saveInput(input);
  }
  showStatus();
}

function showStatus() {
  if (solved == false) {
    document.getElementById("red").innerHTML = "running";
    document.getElementById("green").innerHTML = "";
  } else {
    document.getElementById("green").innerHTML = "complete";
    document.getElementById("red").innerHTML = "";
  }
}

function calculateResult() {
  const displayWrapper = document.getElementById("display-wrapper");
  if (
    prohib.includes(displayWrapper.innerHTML.slice(-1)) ||
    prohib.includes(displayWrapper.innerHTML.slice(0, 1))
  ) {
    // throws a syntax error if the expression starts or ends with an operator or comma
    document.getElementById("display-wrapper").innerHTML = "syntax error";
    endProcess();
  } else if (displayWrapper.innerHTML == "syntax error") {
    // prevents a solution from being displayed after a syntax error
  } else if (solution == "") {
  } else {
    document.getElementById("display-wrapper").innerHTML = "'" + solution + "'";
    endProcess();
  }
}

function displayInput(input) {
  const displayWrapper = document.getElementById("display-wrapper");
  if (solved == true) {
    // resets the screen after a process counts as solved
    displayWrapper.innerHTML = "";
    solved = false;
  }
  if (input === "") {
    displayWrapper.innerHTML = "";
  } else if (
    prohib.includes(input) &&
    prohib.includes(displayWrapper.innerHTML.slice(-1))
  ) {
    // prevents two operators or commas in a row
  } else {
    displayWrapper.innerHTML += input;
  }
}

function saveInput(input) {
  if (prohib.includes(input) && prohib.includes(solution.slice(-1))) {
    // prevents two operators or commas in a row
  } else if (input == "+" || input == "*") {
    operator = input;
    solution += input;
  } else {
    solution += input;
  }
}

function clearDisplay() {
  showStatus();
  document.getElementById("display-wrapper").innerHTML = "";
  endProcess();
  showStatus();
}

function endProcess() {
  solved = true;
  solution = "";
  operator = null;
}
