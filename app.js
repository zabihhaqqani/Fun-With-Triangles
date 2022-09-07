const angles = document.querySelectorAll(".angle")
const checkTriangleBtn = document.querySelector(".triangle-check")
const message = document.querySelector(".output-msg")

//is Triangle logic
function calculateSumOfAllAngles() {

    let sum = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value)
    if (sum === 180){
        message.innerText = "Yup it forms a triangle"

    }else if(Number(angles[0].value)<1||Number(angles[1].value)<1||Number(angles[2].value)<1){
        message.innerText = "please don't enter any negative values!!!!"
    }else{
        message.innerText = "Nope it does not form a triangle"

    }
}

console.log(message);
checkTriangleBtn.addEventListener("click", calculateSumOfAllAngles)

