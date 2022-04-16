let inputs = document.querySelectorAll(".input")
let calculateBtn = document.querySelector("#calculate-hypotenuse")
let message = document.querySelector("#output-msg")

function calculateHypotenuse() {

    let a = Number(inputs[0].value)
    let b = Number(inputs[1].value)

    let sum = a * a + b * b
    let hypotenuse = Math.sqrt(sum)

    message.innerText = `The hypotenuse is ${hypotenuse} cm`

}


calculateBtn.addEventListener("click", calculateHypotenuse)