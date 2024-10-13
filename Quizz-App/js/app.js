const questionList = [
    new Question("Which of the following is a semantic HTML element?", {a: "<div>", b: "<span>", c: "<article>", d: "<b>"}, "c" ),
    new Question("Which of these elements is used to define the main content of a document?", {a: "<aside>", b: "<header>", c: "<main>", d: " <section>"}, "c" ),
    new Question("Which tag is best used for emphasizing important text in a semantic way?", {a: "<strong>", b: "<i>", c: "<b>", d: "<span>"}, "a" )
]

const quiz = new Quiz(questionList);
const ui = new UI();

ui.btnStart.addEventListener("click", function(){
    ui.quizBox.classList.add("active");
    ui.buttonBox.classList.remove("active");
    ui.showQuestion(quiz.currentQuestion());
    ui.questionNumber(quiz.questionIndex + 1, quiz.questions.length)

})


ui.btnNext.addEventListener('click', function() {
    if(quiz.questions.length != quiz.questionIndex){
        ui.showQuestion(quiz.currentQuestion());
        ui.questionNumber(quiz.questionIndex + 1, quiz.questions.length)
       
    } else {
        ui.quizBox.classList.remove("active")
        ui.scoreBox.classList.add("active"); 
        ui.showBildboard(quiz.correctAnswer, quiz.questions.length);
    }
});


function optionSelected(e) {
    let selectedElement = e.target;

    console.log(selectedElement)
    console.log(e)
    if (selectedElement.nodeName === "SPAN") {
        selectedElement = selectedElement.parentElement;
    }
    const pickedAnswer = selectedElement.textContent[0];
    const currentQuestion = quiz.currentQuestion();

    if (currentQuestion.control(pickedAnswer)) {
        quiz.correctAnswer += 1;
        selectedElement.classList.add("correct");
        selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon );
    } else {
        selectedElement.classList.add("incorrect");
        selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }

    quiz.questionIndex += 1;

    ui.disableAlloption()
};



ui.btnQuit.addEventListener("click", function(){
    window.location.reload()
});

ui.btnReplay.addEventListener("click", function(){
    quiz.questionIndex = 0;
    quiz.correctAnswer = 0;
    
    ui.btnStart.click()
    ui.scoreBox.classList.remove("active");
});
