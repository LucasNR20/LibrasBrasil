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
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/1.gif'> </br>  Assinale a frase correta.",
            ["ontem à noite eu assisti youtube", "ontem à noite eu fui dançar com Carlos", "amanhã não irei trabalhar", "hoje eu me casei"], "amanhã não irei trabalhar"
    ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/2.gif'> </br>  Assinale a frase correta.",
            ["eu gosto de dançar, mas gosto mais ainda de dormir", "netflix ou youtube? Prefiro netflix", "não quero trabalhar amanhã", "minha filha nascerá no mês de julho"], "netflix ou youtube? Prefiro netflix"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/3.gif'> </br>  Assinale a frase correta.",
            ["ontem", "agora preciso ir para a escola, tchau", "gosto muito da minha prima Talita", "suco de laranja"], "gosto muito da minha prima Talita"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/4.gif'> </br>  Assinale a frase correta.",
            ["tenho 4 irmãos, mas gosto mais do meu irmão Fabrício", "minha tia Roberta não gosta da minha tia Tábata", "meu avô Daniel tem 90 anos", "há 7 anos meu amigo André nasceu"], "minha tia Roberta não gosta da minha tia Tábata"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/5.gif'> </br>  Assinale a frase correta.",
            ["não gosto de laranja, mas de limão.", "ontem fiquei muito tempo no instagram", "prefiro amazon do que Netflix", "esqueci do aniversário do Benício"], "ontem fiquei muito tempo no instagram"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/6.gif'> </br>  Assinale a frase correta.",
            ["não gosto do Ângelo", "o ano de 1980 foi o meu preferido", "pode repetir de novo?", "2001 foi o ano que menos gostei"], "não gosto do Ângelo"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/7.gif'> </br>  Assinale a frase correta.",
            ["comprei 2 carros novos", "2001 foi o ano que menos gostei, pois eu não estava trabalhando", "amanhã não irei encontrar Gabriel", "Murilo não gostou da Vanessa"], "2001 foi o ano que menos gostei, pois eu não estava trabalhando"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/8.gif'> </br>  Assinale a frase correta.",
            ["nunca fui à escola ", "minha cachorra Mel morreu há 3 anos, agora só tenho 2 cachorras", "nunca irei à casa do Eduardo", "minha mãe faleceu e meu pai se casou de novo com a Joana"], "minha cachorra Mel morreu há 3 anos, agora só tenho 2 cachorras"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/9.gif'> </br>  Assinale a frase correta.",
            ["vendi meu carro pois prefiro usar o ônibus", "meu pai não gosta do meu namorado", "verde e azul são minhas cores preferidas", "não irei ver a filha do meu tio hoje"], "meu pai não gosta do meu namorado"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/10.gif'> </br>  Assinale a frase correta.",
            ["gosto mais de acordar cedo", "quero ir ver minha avó em outubro", "minha mãe faleceu e meu pai se casou de novo com a Joana", "o nome dela é Maria ou Bruna?"], "minha mãe faleceu e meu pai se casou de novo com a Joana"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/11.gif'> </br>  Assinale a frase correta.",
            ["amo dias chuvosos", "odeio acordar cedo", "nunca me lembro do nome dele", "quero ir ver minha avó em outubro"], "quero ir ver minha avó em outubro"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/12.gif'> </br>  Assinale a frase correta.",
            ["não sei se quero ir comer hoje", "acho dias chuvosos tristes", "odeio acordar cedo", "não gosto de noites quentes, pois são difíceis de dormir "], "odeio acordar cedo"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/13.gif'> </br>  Assinale a frase correta.",
            ["a mãe dela se chama Andreia ou Eduarda?", "não poderei sair para dançar amanhã, pois tenho que acordar cedo na segunda-feira", "em 1999 eu conheci meu namorado", "o nome dela é Maria ou Bruna?"], "o nome dela é Maria ou Bruna?"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/14.gif'> </br>  Assinale a frase correta.",
            ["hoje ", "agora irei dormir, boa noite.", "não poderei sair para dançar amanhã, pois tenho que acordar cedo na segunda-feira", "você quer ir hoje ou amanhã?"], "não poderei sair para dançar amanhã, pois tenho que acordar cedo na segunda-feira"
        ),
    new Question(
            document.getElementById("imgQuiz").innerHTML = "<img src='images/avançado/15.gif'> </br>  Assinale a frase correta.",
            ["acho dias chuvosos tristes", "2020 foi um ano difícil", "não gosto do meu trabalho", "gostaria de me casa no futuro"], "acho dias chuvosos tristes"
        ),

];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();




