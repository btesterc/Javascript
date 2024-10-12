function Question(text, answers, corretAnswer) {
    this.text = text;
    this.answers = answers;
    this. corretAnswer = corretAnswer;
}

Question.prototype.control = function(answer) {
    return  answer === this.corretAnswer;
}

// ------- manuel question provider --------
//  it should be changed by database provider

const questionList = [
    new Question("Which of the following is a semantic HTML element?", {a: "<div>", b: "<span>", c: "<article>", d: "<b>"}, "c" ),
    new Question("Which of these elements is used to define the main content of a document?", {a: "<aside>", b: "<header>", c: "<main>", d: " <section>"}, "c" ),
    new Question("Which tag is best used for emphasizing important text in a semantic way?", {a: "<strong>", b: "<i>", c: "<b>", d: "<span>"}, "a" )
]


console.log(questionList[0].control("c"))
