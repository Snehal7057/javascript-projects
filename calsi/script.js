const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const operation = document.querySelector("select");
const doTaskBtn = document.querySelector(".btn1");
const clearBtn = document.querySelector(".btn-danger");

doTaskBtn.addEventListener("click", () => {
  const val1 = parseFloat(num1.value);
  const val2 = parseFloat(num2.value);
  const op = operation.value;
  if (isNaN(val1) || isNaN(val2)) {
    Swal.fire("Plz enter valid input!");

    return;
  }
  let output;
  switch (op) {
    case "+":
      output = val1 + val2;
      break;
    case "-":
      output = val1 - val2;
      break;
    case "*":
      output = val1 * val2;
      break;
    case "/":
      if (val2 == 0) {
        alert("Shuttt....divide by zero cant be possible...");
        return;
      }
      output = val1 / val2;
      break;
    default:
      alert("Plz select any operation");
      return;
  }
  result.value = output;
});
clearBtn.addEventListener("click", () => {
  num1.value = "";
  num2.value = "";
  result.value = "";
  operation.selectedIndex = 0;

  // set cursor back to first input
  num1.focus();
});
window.onload = () => {
  document.getElementById("num1").focus();
};
