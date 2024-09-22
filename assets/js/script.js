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