const answerElement = document.querySelector("#answer")
const questionInput = document.querySelector("#questionInput")
const askButton = document.querySelector("#askButton")

const answers = [
  "Absolutely!",
  "I'm not so sure.",
  "Don't count on that!.",
  "No doubt about that!",
  "Ask again later.",
  "Yes, definitely!",
  "My answer is no.",
  "You can count on that.",
  "I won't tell you now.",
  "In my point of view, yes.",
  "My sources tell me no.",
  "Probably.",
  "It is not possible to predict now.",
  "Yes.",
  "All signals point to yes!",
]


function askQuestion() {
  if (questionInput.value == ""){
  alert("Type your question again!")
  return
}
   askButton.setAttribute("disabled", true)
  const question = "<div>" + questionInput.value + "</div>"
  const totalAnswers = answers.length;
  const randomNumber = Math.floor(Math.random() * totalAnswers);

  answerElement.innerHTML = question + answers[randomNumber]

  answerElement.style.opacity = 1


  setTimeout(function() {
    answerElement.style.opacity = 0
    askButton.removeAttribute("disabled")
  }, 3000);
}

