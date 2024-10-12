const quiz = new Quiz(questionList);
const ui = new UI();

document.getElementById("next").addEventListener('click', function() {
    if(quiz.questions.length != quiz.questionIndex){
        ui.showQuestion(quiz.nextQuestion());
        quiz.questionIndex += 1;

        console.log(quiz);
    } else {
        console.log("quiz finished")
    }
})

