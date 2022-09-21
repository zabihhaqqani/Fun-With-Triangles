let inputs = document.querySelectorAll(".input");
let calculateBtn = document.querySelector("#calculate-hypotenuse");
let message = document.querySelector("#output-msg");

function calculateHypotenuse() {
  let a = Number(inputs[0].value);
  let b = Number(inputs[1].value);

  let sum = a * a + b * b;
  let hypotenuse = Math.sqrt(sum);

  if (Number(inputs[0].value) < 1 || Number(inputs[1].value) < 1) {
    message.innerText = "please enter proper values!!!!";
  } else {
    message.innerText = `The hypotenuse is ${hypotenuse} cm`;
  }
}

calculateBtn.addEventListener("click", calculateHypotenuse);
