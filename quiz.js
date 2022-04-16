let form = document.querySelector(".quiz-form")
let btn = document.querySelector(".submit-btn")
let outputMsg = document.querySelector(".output-msg")

const correctAnswers = ['90°', 'right angled'];

function calculateScore(e) {
    e.preventDefault(e);
    let score = 0
    let index = 0

    const formResults = new FormData(form)
    for (let data of formResults.values()) {
        if (data === correctAnswers[index]) {
            score++
        }
            index++

    }
    outputMsg.innerText = `Your score is ${score}`
}

btn.addEventListener("click", calculateScore)