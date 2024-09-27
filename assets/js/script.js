let username = ''; // Variável para armazenar o nome do usuário
let time = 0; // Variável para o cronômetro
let timerInterval; // Intervalo do cronômetro
let score = 0; // Variável para armazenar o contador de pontos
let currentQuestionIndex = 0;

// Array de perguntas e respostas
const questions = [
    {
        textPerson: "Qual princesa foi inspirada em uma figura histórica real, uma nativa americana?", // Audio Personagem
        options: ['Pocahontas', 'Cinderela', 'Moana', 'Mulan'],
        correct: 0
    },
    
    {
        textPerson: 'Qual princesa é filha do chefe de uma tribo e sonha em navegar pelo oceano?', // Audio Personagem
        options: ['Tiana', 'Cinderela', 'Moana', 'Jasmine'],
        correct: 2
    },
    {
        textPerson: 'Qual princesa foi criada por sua madrasta e é famosa por seu sapatinho de cristal?', // Audio Personagem
        options: ['Jasmine', ' Mulan', 'Cinderela', 'Tiana'],
        correct: 2
    },  
    {
        textPerson: 'Qual princesa se disfarça de guerreiro para salvar seu país da invasão dos Hunos?', // Audio Personagem
        options: ['Moana', 'Mulan', 'Jasmine', 'Tiana'],
        correct: 1
    },
    
    {
        textPerson: 'Qual princesa vive em Agrabah e tem um tapete mágico?', // Audio Personagem
        options: ['Cinderela', 'Pocahontas', 'Jasmine', ' Mulan'],
        correct: 2
    },
    {
        textPerson: 'Qual princesa sonha em abrir seu próprio restaurante em Nova Orleans?', // Audio Personagem
        options: ['Tiana ', 'Pocahontas', 'Moana', ' Jasmine'],
        correct: 0
    }, 
];

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


