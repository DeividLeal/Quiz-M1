let username = ''; // Variável para armazenar o nome do usuário
let time = 0; // Variável para o cronômetro
let timerInterval; // Intervalo do cronômetro
let score = 0; // Variável para armazenar o contador de pontos
let currentQuestionIndex = 0;

// / Array de perguntas e respostas
const allQuestions = [
    {
        question: "Qual princesa foi inspirada em uma figura histórica real, uma nativa americana?",
        options: [
            { text: 'Pocahontas', image: './assets/img/Pocahontas-face.jpeg' },
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' },
            { text: 'Mulan', image: './assets/img/Mulan-face.jpeg' },
            { text: 'Tiana', image: './assets/img/Tiana-face.jpg' }
        ],
        correct: 0
    },
    {
        question: 'Qual princesa é filha do chefe de uma tribo e sonha em navegar pelo oceano?',
        options: [
            { text: 'Tiana', image: './assets/img/Tiana-face.jpg' },
            { text: 'Cinderela', image: './assets/img/Cinderela-face.png' },
            { text: 'Moana', image: './assets/img/Moana-face.jpg' },
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' }
        ],
        correct: 2
    },
    {
        question: 'Qual princesa foi criada por sua madrasta e é famosa por seu sapatinho de cristal?',
        options: [
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' },
            { text: 'Mulan', image: './assets/img/Mulan-face.jpeg' },
            { text: 'Cinderela', image: './assets/img/Cinderela-face.png' },
            { text: 'Tiana', image: './assets/img/Tiana-face.jpg' }
        ],
        correct: 2
    },
    {
        question: 'Qual princesa se disfarça de guerreiro para salvar seu país da invasão dos Hunos?',
        options: [
            { text: 'Moana', image: './assets/img/Moana-face.jpg' },
            { text: 'Mulan', image: './assets/img/Mulan-face.jpeg' },
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' },
            { text: 'Tiana', image: './assets/img/Tiana-face.jpg' }
        ],
        correct: 1
    },
    {
        question: 'Qual princesa vive em Agrabah e tem um tapete mágico?',
        options: [
            { text: 'Cinderela', image: './assets/img/Cinderela-face.png' },
            { text: 'Pocahontas', image: './assets/img//Pocahontas-face.jpeg' },
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' },
            { text: 'Mulan', image: './assets/img/Mulan-face.jpeg' }
        ],
        correct: 2
    },
    {
        question: 'Qual princesa sonha em abrir seu próprio restaurante em Nova Orleans?',
        options: [
            { text: 'Tiana', image: './assets/img/Tiana-face.jpg' },
            { text: 'Pocahontas', image: './assets/img//Pocahontas-face.jpeg' },
            { text: 'Moana', image: './assets/img/Moana-face.jpg' },
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' }
        ],
        correct: 0
    },

];

let username = ''; // Variável para armazenar o nome do usuário
let currentQuestionIndex = 0; // Índice da pergunta atual
let totalQuestions = allQuestions.length; // Quantidade total de perguntas
let points = 0; // Variável para armazenar os pontos, começa em 1

// Função para iniciar o jogo e fechar a modal
function startGame() {
    const usernameInput = document.getElementById('username').value;
    if (usernameInput.trim() === '') {
        alert('Por favor, insira seu nome para começar o jogo!');
    } else {
        username = usernameInput;
        alert(`Bem-vindo, ${username}! Boa sorte no quiz!`);
        document.getElementById('start-modal').style.display = 'none'; // Esconde a modal
        document.getElementById('quiz-container').style.display = 'block'; // Exibe o quiz
    
        resetTimer(); // Inicia o cronômetro quando o jogo começar
        loadQuestion(); // Carrega a primeira pergunta
    }
}

// Função para verificar a resposta
/*function checkAnswer( answer, ) {
    const question = questions[currentQuestionIndex];
    const correctAnswer = question.correct;

    if(answer === correctAnswer) {
        alert('Muito bem, resposta correta!!');
        score++;
        currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        alert('Fim do jogo!');
      }
    } else {
      alert('Que pena, resposta incorreta.');
      currentQuestionIndex = 0;
      loadQuestion();
    }
   
}*/

function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    const correctAnswer = question.correct;

    const responseElement = document.getElementById('response');

    if(answer === correctAnswer) {
        responseElement.innerHTML = 'Muito bem, resposta correta!!';
        score++;
        currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        responseElement.innerHTML = 'Fim do jogo!';
      }
    } else {
      responseElement.innerHTML = 'Que pena, resposta incorreta.';
      currentQuestionIndex = 0;
      loadQuestion();
    }
}

// Função para carregar a pergunta
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const options = question.options;
  
    document.getElementById('question-text').innerHTML = question.textPerson;
    document.getElementById('options').innerHTML = '';
  
    options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.innerHTML = option;
      optionElement.onclick = () => {
        checkAnswer(index);
      };
      document.getElementById('options').appendChild(optionElement);
    });
  }


