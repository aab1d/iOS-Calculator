const calcScreen = document.querySelector(".calc-screen");
const buttons = document.querySelectorAll(".btn");
let firstNumber, opr, secondNumber;
const operation = function (i, j, o) {
  if (o === "÷") return i / j;
  else if (o === "×") return i * j;
  else if (o === "-") return i - j;
  else if (o === "+") return i + j;
  else return 0;
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnValue = button.textContent;
    // let screenTxt = calcScreen.textContent;
    if (btnValue === "C") calcScreen.textContent = 0;
    else if (btnValue === "←" && calcScreen.textContent.length === 1) {
      calcScreen.textContent = 0;
    } else if (btnValue === "←") {
      calcScreen.textContent = calcScreen.textContent.slice(0, -1);
    } else if (btnValue === "÷") {
      firstNumber = parseInt(calcScreen.textContent);
      opr = "÷";
      calcScreen.textContent = 0;
    } else if (btnValue === "×") {
      firstNumber = parseInt(calcScreen.textContent);
      opr = "×";
      calcScreen.textContent = 0;
    } else if (btnValue === "-") {
      firstNumber = parseInt(calcScreen.textContent);
      opr = "-";
      calcScreen.textContent = 0;
    } else if (btnValue === "+") {
      firstNumber = parseInt(calcScreen.textContent);
      opr = "+";
      calcScreen.textContent = 0;
    } else if (btnValue === "=") {
      secondNumber = parseInt(calcScreen.textContent);
      if (secondNumber === "0") calcScreen.textContent = 0;
      else {
        calcScreen.textContent = operation(firstNumber, secondNumber, opr);
      }
    } else if (calcScreen.textContent === "0")
      calcScreen.textContent = btnValue;
    else calcScreen.textContent += btnValue;
  });
});
