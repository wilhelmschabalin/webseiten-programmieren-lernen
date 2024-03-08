let prohib = [".", "+", "*", "="];
let solved = false;
let solution = "";
let operator = null;

function showStatus() {
  if (solved == false) {
    document.getElementById("red").innerHTML = "running";
    document.getElementById("green").innerHTML = "";
  } else {
    document.getElementById("green").innerHTML = "complete";
    document.getElementById("red").innerHTML = "";
  }
}

function display(content) {
  const displayWrapper = document.getElementById("display-wrapper");
  showStatus();
  if (solved == true) {
    // resets the screen after a process counts as solved
    displayWrapper.innerHTML = "";
    solved = false;
  }
  if (content === "") {
    displayWrapper.innerHTML = "";
  } else if (
    prohib.includes(content) &&
    prohib.includes(displayWrapper.innerHTML.slice(-1))
  ) {
    // No two operators or commas can be placed in a row.
  } else {
    displayWrapper.innerHTML += content;
    solution += content;
    if (content == "+" || content == "*") {
      saveOperator(content);
    }
  }
  showStatus();
}

function saveOperator(input) {
  operator = input;
}

function calculateResult() {
  const displayWrapper = document.getElementById("display-wrapper");
  showStatus();
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
    // If no solution could be calculated, nothing happens.
  } else {
    // Else, the solution is displayed and the process counts as solved.
    document.getElementById("display-wrapper").innerHTML = "'" + solution + "'";
    endProcess();
  }
  showStatus();
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

function testOperator() {
  document.getElementById("testOperator").innerHTML = operator;
}
