let username = ''; // Variável para armazenar o nome do usuário
let time = 0; // Variável para o cronômetro
let timerInterval; // Intervalo do cronômetro
let score = 0; // Variável para armazenar o contador de pontos
let currentQuestionIndex = 0;

// Array de perguntas e respostas
const questions = [
    {
        audioPerson: 'img/meme1-shadow.png', // Audio Personagem
        options: ['X', 'X', 'X', 'X'],
        correct: X
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
