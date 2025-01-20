const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions,currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
  console.log('Started')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
   questionElement.innerText = question.question
   question.answers.forEach(answer => {
     const button = document.createElement('button')
     button.innerText = answer.text
     button.classList.add('btn')
     if(answer.correct){
       button.dataset.correct = answer.correct
     }
     button.addEventListener('click',selectAnswer)
     answerButtonsElement.appendChild(button)
   })
}

function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e){
   const selectedButton = e.target
   const correct = selectedButton.dataset.correct
   setStatusClass(document.body,correct)
   Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button,button.dataset.correct)
   })
   if(shuffledQuestions.length > currentQuestionIndex+ 1){
      
   nextButton.classList.remove('hide')
   }else{
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
   }
}

  function setStatusClass(element,correct){
    clearStatusClass(element)
      if(correct){
        element.classList.add('correct')
      }else{
        element.classList.add('wrong')
      }
    }

 function clearStatusClass(element){
   element.classList.remove('correct')
   element.classList.remove('wrong')
 }   
  
const questions = [
  {
    question:'Which keyword is use to define a function in Javascript?',
    answers:[
      {text:'function',correct:true},
      {text:'method',correct:false},
      {text:'def',correct:false},
    ]
  },

  {
    question:'Which of the following is a CSS Framework?',
    answers:[
      {text:'Bootstrap',correct:true},
      {text:'Angular',correct:false},
      {text:'ReactJS',correct:false},
    ]
  },

  {
    question:'Which tag is used to create a hyperlink in HTML?',
    answers:[
      {text:'<link>',correct:false},
      {text:'<a>',correct:true},
      {text:'<href>',correct:false},
    ]
  },

  {
    question:'Which CSS display property is set by default?',
    answers:[
      {text:'Inline',correct:false},
      {text:'Block',correct:true},
      {text:'Inline-block',correct:false},
      {text:'Static',correct:false},
    ]
  },

  {
       question:'Which keyword was originally used to declare variables in Javascript before ES6?',
      answers:[
      {text:'let',correct:false},
      {text:'const',correct:false},
      {text:'var',correct:true},
    ]
  },

  {
    question:'What is the correct HTML tag for inserting a line break?',
    answers:[
    {text:'<br>',correct:true},
    {text:'<lb>',correct:false},
    {text:'<break>',correct:false},
    {text:'<hr>',correct:false}
   ]
  },

  {
    question:'Which method is used to write a message in the browser console?',
    answers:[
    {text:'alert()',correct:false},
    {text:'console.log()',correct:true},
    {text:'document.write()',correct:false},
    ]
  },

]