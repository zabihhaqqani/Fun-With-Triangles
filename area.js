let inputs = document.querySelectorAll(".input")
let calculateBtn = document.querySelector("#calculate-area")
let outputMsg = document.querySelector("#output-msg")


function calculateAreaOfTriangle() {

    let base = Number(inputs[0].value)
    let height = Number(inputs[1].value)

    let area = (base * height)/2

    outputMsg.innerText = `the area is ${area} cm²`

}


calculateBtn.addEventListener("click", calculateAreaOfTriangle)