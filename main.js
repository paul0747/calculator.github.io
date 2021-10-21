let btn1 = document.getElementById("btn-number1");
let btn2 = document.getElementById("btn-number2");
let btn3 = document.getElementById("btn-number3");
let btn4 = document.getElementById("btn-number4");
let btn5 = document.getElementById("btn-number5");
let btn6 = document.getElementById("btn-number6");
let btn7 = document.getElementById("btn-number7");
let btn8 = document.getElementById("btn-number8");
let btn9 = document.getElementById("btn-number9");
let btn0 = document.getElementById("btn-number0");

let btnDecimal = document.getElementById("btn-decimal");
let btnClear = document.getElementById("btn-clear");
let btnPlus = document.getElementById("plus-sign");
let btnSubtract = document.getElementById("subtract-sign");
let btnMultiply = document.getElementById("multiply-sign");
let btnDivide = document.getElementById("divide-sign");

let arrElements = [];
const storeElements = Array.from(
  document.querySelectorAll(`[class*="btn numbers"], [class*="btn sign"]`)
);

storeElements.forEach((button) => {
  button.addEventListener("click", () => {
    arrElements.push(button.innerHTML);
    document.getElementById("input-number").innerHTML = arrElements.join("");
  });
});

// Format Array
let formatArr = [];
let formatArray = (arrElements) => {
  let newStr = "";
  for (let i = 0; i < arrElements.length; i++) {
    let operanzi = ["+", "-", "x", "÷"];

    if (!operanzi.includes(arrElements[i])) {
      newStr += arrElements[i];
    } else {
      formatArr.push(newStr);
      formatArr.push(arrElements[i]);
      newStr = "";
    }
  }
  formatArr.push(newStr);
  console.log(formatArr);
};

let calculate = () => {
  formatArray(arrElements);
  let divide = formatArr.indexOf("÷");
  while (divide != -1) {
    formatArr.splice(
      divide - 1,
      3,
      formatArr[divide - 1] / formatArr[divide + 1]
    );
    divide = formatArr.indexOf("÷");
  }
  let multiply = formatArr.indexOf("x");
  while (multiply != -1) {
    formatArr.splice(
      multiply - 1, //start
      3, // deleteCount
      formatArr[multiply - 1] * formatArr[multiply + 1] //item1
    );
    multiply = formatArr.indexOf("x");
  }
  let subtract = formatArr.indexOf("-");
  while (subtract != -1) {
    formatArr.splice(
      subtract - 1, //start
      3, // deleteCount
      formatArr[subtract - 1] - formatArr[subtract + 1] //item1
    );
    subtract = formatArr.indexOf("-");
  }
  let sum = formatArr.indexOf("+");
  while (sum != -1) {
    formatArr.splice(
      sum - 1, //start
      3, // deleteCount
      parseFloat(formatArr[sum - 1]) + parseFloat(formatArr[sum + 1]) //item1
    );
    sum = formatArr.indexOf("+");
  }

  document.getElementById("input-number").innerHTML = formatArr;
  arrElements = [];
  formatArr = [];
};

btnClear.addEventListener("click", () => {
  window.location.reload();
});
