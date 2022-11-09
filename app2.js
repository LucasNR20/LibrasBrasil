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
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/1.gif'> </br>  Considerando o vídeo acima, qual o nome foi soletrado?",
        ["Maria", "Miriam ", "Marcela", "Mirela"], "Miram"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/2.gif'> </br>  O sinal acima significa o que?",
        ["um verbo", "um adjetivo", "uma fruta", "um animal (cachorro)"], "um animal (cachorro)"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/3.gif'> </br>  O que estou bebendo?",
        ["suco de limão", "coca-cola", "água", "suco de laranja"], "suco de laranja"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/4.gif'> </br>  Qual animal foi sinalizado?",
        ["cachorro", "leão", "rato", "gato"], "leão"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/5.gif'> </br>  Considerando o vídeo acima, qual o nome foi soletrado?",
        ["Brunela", "Bianca", "Benício", "Bruno"], "Brunela"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/6.gif'> </br>  Qual minha rede social preferida?",
        ["whatsapp", "instagram", "youtube", "facebook"], "youtube"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/7.gif'> </br>  Por qual meio de transporte eu vou para a escola?",
        ["carro", "ônibus", "taxi", "bicicleta"], "ônibus"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/8.gif'> </br>  Qual minha idade?",
        ["50 anos", "30 anos", "19 anos", "20 anos"], "50 anos"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/9.gif'> </br>  Que familiar eu estou me referindo? ",
        ["meu irmão", "minha mãe", "minha avó", "meu tio"], "meu tio"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/10.gif'> </br>  Que dia da semana eu não gosto?",
        ["domingo", "quarta-feira", "quinta-feira", "segunda-feira"], "domingo"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/11.gif'> </br>  Que cumprimento é esse?",
        ["olá", "bom dia", "boa tarde", "boa noite"], "olá"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/12.gif'> </br>  Qual meu familiar preferido?",
        ["meu avô", "minha tia", "minha irmã", "meu irmão"], "meu irmão"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/13.gif'> </br>  O que meu irmão é?",
        ["magro", "alto", "inteligente", "forte"], "inteligente"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/14.gif'> </br>  Do que eu não gosto?",
        ["da minha mãe", "de suco de limão", "da minha avó", "de cachorro"], "da minha avó"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/15.gif'> </br>  Como eu estou hoje?",
        ["feliz", "com calor", "com medo", "séria"], "com medo"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/16.gif'> </br>  O que o João é meu?",
        ["pai", "primo", "amigo", "namorado"], "namorado"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/17.gif'> </br>  Qual verbo estou sinalizando?",
        ["andar", "pedalar", "saber", "desenhar"], "saber"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/18.gif'> </br>  Eu tenho um canal em que rede social?",
        ["whatsapp", "instagram", "youtube", "facebook"], "facebook"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/19.gif'> </br>  O que eu comprei ontem?",
        ["uma bicicleta", "um gato", "um cachorro", "um carro"], "um gato"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/20.gif'> </br>  Quantos animais eu tenho dentro de casa?",
        ["15", "25", "9", "6"], "9"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/21.gif'> </br>  Meu dia preferido?",
        ["dias quentes", "terça-feira", "dias frios", "sexta-feita"], "dias frios"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/22.gif'> </br>  A cor preferida da minha mãe é?",
        ["preto", "roxo", "vermelho", "amarelo"], "preto"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/23.gif'> </br>  Qual minha cor preferida?",
        ["azul", "verde", "rosa", "amarelo"], "amarelo"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/24.gif'> </br>  Quando não estou com minha mãe eu fico com meu (minha)?",
        ["avó", "tia", "primo", "pai"], "primo"
    ),
new Question(
        document.getElementById("imgQuiz").innerHTML = "<img src='images/iniciante/25.gif'> </br>  Quantos irmãs eu tenho?",
        ["1", "5", "0", "2"], "2"
    ),
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}

startCountdown();
