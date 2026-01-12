import {qAndA} from "./DataSet/questionAnswers.js"
const form = document.getElementById("form-content");
const submitBtn = document.getElementById("submit-btn");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
const cAnswers = document.getElementById("correct-answers");
const wAnswers = document.getElementById("Wrong-answers");
const testContent = document.getElementById("test");
const resultContent = document.getElementById("result-container")

qAndA.map((item, index) => {
    form.innerHTML +=
        `<div class = "qn-container">
            <p id="Qn${index}" class="question">${item.Question}</p>` +
        `${item.AnswerArr.map((val, valIndex) => (
            `<input 
                 type="radio" id="Question${index}_${valIndex}" 
                 name="Question${index}_valIndex"
                 value="${val}"
                 class="option"
              />
            <label for="Question${index}_${valIndex}">${val}</label><br>`
        )).join("")}
       </div>`
})

const correctAnswers = [];
const wrongAnswers = [];

function validateAnswers() {

    testContent.style.display = "none";
    resultContent.style.display = "block";

    const answers = [];
    for (let i = 0; i < qAndA.length; i++) {
        const qa = {};
        const question = document.getElementById(`Qn${i}`);
        const answer = document.querySelector(`input[name="Question${i}_valIndex"]:checked`);
        qa.Question = question.innerText;
        qa.Answer = answer?.value ?? "No answer";
        console.log(question.innerText)
        console.log(qa.Answer)
        answers.push(qa)
    }
    console.log(answers)

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].Answer != null && answers[i].Answer == qAndA[i].Answer) {
            correctAnswers.push(answers[i])
        } else {
            wrongAnswers.push(answers[i])
        }
    }

    console.log("Correct answers : ", correctAnswers);
    console.log("Wrong answers : ", wrongAnswers);

    score.innerHTML += correctAnswers.length;

    correctAnswers.map((item, index) => {
        cAnswers.innerHTML += `
            <li class="answer">${item.Question} <b>${item.Answer}</b></li>
        `
    })

    wrongAnswers.map((item, index) => {
        wAnswers.innerHTML += `
            <li class="answer">${item.Question} <b>${item.Answer}</b></li>
        `
    })
}

submitBtn.addEventListener("click", validateAnswers)

let time = 60;
(
    function () {
        const interval = setInterval(() => {
            if (time == 0) {
                validateAnswers()
                clearInterval(interval)
            } else {
                timer.innerHTML = `00: ${time--}`
            }
        }, 1000)
    }
)()
