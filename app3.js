class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};



// SHOW SCORES
function showScores() {
    let quizEndHTML =
        `
    <h1>Quiz Completo!</h1>
    <h2 id='score'> Você acertou: ${quiz.score} de ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="instructions.html">Jogar novamente</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
    new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/1.gif'> </br>  Meu mês preferido?",
        ["julho", "dezembro", "abril", "março"], "março"
    ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/2.gif'> </br>  O que aconteceu ano passado?",
            ["comprei um animal", "me casei", "minha irmã nasceu", "meu pai morreu"], "me casei"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/3.gif'> </br>  Em que ano eu nasci?",
            ["1988", "1995", "2004", "1999"], "1999"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/4.gif'> </br>  O que aconteceu?",
            ["ano passado minha avó faleceu", "há 3 anos atrás eu comprei um gato amarelo", "hoje completa 5 anos que eu e Bruno nos casamos", "minha filha, Laura, faz 2 anos hoje."], "hoje completa 5 anos que eu e Bruno nos casamos"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/5.gif'> </br>  Qual ano foi sinalizado?",
            ["1980", "1778", "2001", "2045"], "1778"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/6.gif'> </br>  Por que quarta é meu dia preferido?",
            ["porque eu não trabalho", "porque é o dia que eu posso sair para dançar", "porque eu posso dormir mais", "porque eu não tenho que ir à escola"], "porque eu não trabalho"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/7.gif'> </br>  Qual mês minha avó nasceu?",
            ["janeiro", "abril", "dezembro", "fevereiro"], "fevereiro"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/8.gif'> </br>  O que aconteceu com Ronaldo?",
            ["faleceu há uns 5 anos atrás", "começou um trabalho novo", "completou 10 anos de casado com Andreia", "teve uma filha no mês passado"], "teve uma filha no mês passado"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/9.gif'> </br>  Ontem eu ...?",
            ["fui trabalhar de ônibus", "saí para dançar", "não fui trabalhar", "encontrei minha prima"], "saí para dançar"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/10.gif'> </br>  Minha prima preferida é a ... ?",
            ["Vanessa", "Letícia", "Eduarda", "Larissa"], "Eduarda"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/11.gif'> </br>  Meu marido se chama?",
            ["Mário", "Lauro", "Eduardo", "Douglas"], "Mário"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/12.gif'> </br>  Em que mês a filha da minha irmã nasceu?",
            ["maio", "outubro", "setembro", "junho"], "setembro"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/13.gif'> </br>  Assinale a frase correta.",
            ["ontem fui ao mercado e comprei leite e café", "mês passado comprei um carro novo", "muito tempo depois eu me lembrei", "amanhã irei à escola"], "amanhã irei à escola"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/14.gif'> </br>  Assinale a frase correta.",
            ["ontem à noite", "amanhã", "eu tenho a minha cachorra Nina há muito tempo", "Não me lembro do nome dele"], "ontem à noite"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/intermediario/15.gif'> </br>  Assinale a frase correta.",
            ["esqueci de acordar cedo", "minha mãe nasceu há 35 anos", "Maria tem uma filha que tem 5 anos", "Rodrigo não gostou dela"], "minha mãe nasceu há 35 anos"
    ),
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();




