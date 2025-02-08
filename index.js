const quizData = [
  {
      question: "¿Te gusta el chocolate?",
      a: "Si",
      b: "No",
      correct: "d",
  },
  {
      question: "¿Eres team perros o gatos?",
      a: "🐶",
      b: "🐱",
      correct: "b",
  },
  {
        question: "¿Prefieres el café al té?",
        a: "☕",
        b: "🍵",
        correct: "a",
    },
    {
        question: "Ya casi terminamos 😉",
        a: "OK",
        b: "OK",
        correct: "a",
    },
   {
      question: "¿Hay algo en tu mente que te gustaría hacer pero no te has atrevido?",
      a: "Si",
      b: "No",
      correct: "b",
  },
   {
      question: "¿Sabías que las sonrisas dicen mucho más que mil palabras?",
      a: "Si",
      b: "No",
      correct: "a",
  },
  {
      question: "Y por ultimo...... 🪄🪄🪄",
      a: "OK",
      b: "OK",
      correct: "a",
  },
  {
      question: "¿Hilda quieres ser mi san valentin 💘?",
      a: "Si ✨",
      b: "No 😿",
      correct: "b",
  },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else if(answer == "a"){
      window.open('./si.html');
      window.close();
     
    }else if(answer == "b"){
      window.open('./no.html');
      window.close();
  }
  }
})