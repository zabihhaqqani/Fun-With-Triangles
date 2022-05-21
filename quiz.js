let form = document.querySelector(".quiz-form")
let btn = document.querySelector(".submit-btn")
let outputMsg = document.querySelector(".output-msg")

const correctAnswers = ['90°', 'right angled', 'Equilateral', '√3/4 a2', '4.33cm'];

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
    outputMsg.innerText = `Your score is ${score}/5`
}

btn.addEventListener("click", calculateScore)