// Array de perguntas e respostas
const allQuestions = [
    {
        question: "Qual princesa foi inspirada em uma figura histórica real, uma nativa americana?",
        options: [
            { text: 'Pocahontas', image: './assets/img/Pocahontas-face.webp' },
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' },
            { text: 'Mulan', image: './assets/img/Mulan-face.webp' },
            { text: 'Tiana', image: './assets/img/Tiana-face.webp' }
        ],
        correct: 0
    },
    {
        question: 'Qual princesa é filha do chefe de uma tribo e sonha em navegar pelo oceano?',
        options: [
            { text: 'Tiana', image: './assets/img/Tiana-face.webp' },
            { text: 'Kida', image: './assets/img/Kida-face.webp' },
            { text: 'Moana', image: './assets/img/Moana-face.webp' },
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' }
        ],
        correct: 2
    },
    {
        question: 'Qual princesa vive na cidade perdida de Atlantis e é uma guerreira atlante?',
        options: [
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' },
            { text: 'Mulan', image: './assets/img/Mulan-face.webp' },
            { text: 'Kida', image: './assets/img/Kida-face.webp' },
            { text: 'Tiana', image: './assets/img/Tiana-face.webp' }
        ],
        correct: 2
    },
    {
        question: 'Qual princesa se disfarça de guerreiro para salvar seu país da invasão dos Hunos?',
        options: [
            { text: 'Moana', image: './assets/img/Moana-face.webp' },
            { text: 'Mulan', image: './assets/img/Mulan-face.webp' },
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' },
            { text: 'Tiana', image: './assets/img/Tiana-face.webp' }
        ],
        correct: 1
    },
    {
        question: 'Qual princesa vive em Agrabah e tem um tapete mágico?',
        options: [
            { text: 'Kida', image: './assets/img/Kida-face.webp' },
            { text: 'Pocahontas', image: './assets/img//Pocahontas-face.webp' },
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' },
            { text: 'Mulan', image: './assets/img/Mulan-face.webp' }
        ],
        correct: 2
    },
    {
        question: 'Qual princesa sonha em abrir seu próprio restaurante em Nova Orleans?',
        options: [
            { text: 'Tiana', image: './assets/img/Tiana-face.webp' },
            { text: 'Pocahontas', image: './assets/img//Pocahontas-face.webp' },
            { text: 'Moana', image: './assets/img/Moana-face.webp' },
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
        
        // Toca o áudio de introdução
        const introAudio = document.getElementById('intro-audio');
        introAudio.play();

        loadQuestion(currentQuestionIndex);
    }
}

const audioContainer = document.getElementById('audio-container');
const introAudio = document.getElementById('intro-audio');

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
        audioContainer.classList.add('hidden');
    } else {
        audioContainer.classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop;
});

// Função para carregar uma pergunta e suas opções
function loadQuestion(index) {
    const questionElement = document.getElementById('question');
    const optionsListElement = document.getElementById('options-list');

    // Limpa a lista de opções
    optionsListElement.innerHTML = '';

    // Define a pergunta atual
    const currentQuestion = allQuestions[index];
    questionElement.textContent = currentQuestion && currentQuestion.question;

    // Adiciona as opções à lista
    currentQuestion.options.forEach((option, optionIndex) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.classList.add('options-list-button');
        
        // Adiciona o índice da opção ao botão
        button.dataset.optionIndex = optionIndex;

        const img = document.createElement('img');
        img.src = option.image;
        img.alt = `Imagem da princesa ${option.text}`;
        
        const p = document.createElement('p');
        p.classList.add('options-list-text');
        p.textContent = option.text;

        button.appendChild(img);
        button.appendChild(p);
        li.appendChild(button);
        optionsListElement.appendChild(li);
    });
}

// Função para lidar com a seleção do usuário
document.getElementById('options-list').addEventListener('click', function(event) {
    const clickedButton = event.target.closest('button');
    
    if (clickedButton) {
        const selectedOptionIndex = parseInt(clickedButton.dataset.optionIndex); // Obtém o índice da opção clicada
        const currentQuestion = allQuestions[currentQuestionIndex]; // Obtém a pergunta atual
        const isCorrect = selectedOptionIndex === currentQuestion.correct; // Verifica se a opção clicada está correta

        if (isCorrect) {
            clickedButton.style.backgroundColor = 'green'; // Muda o botão para verde se correto
            increasePoints(); // Aumenta a pontuação
            setTimeout(nextQuestion, 1000); // Espera um segundo antes de carregar a próxima pergunta
        } else {
            clickedButton.style.backgroundColor = 'red'; // Muda o botão para vermelho se incorreto
            setTimeout(() => {
                alert('Errado! O quiz será reiniciado.');
                resetPoints(); // Reseta a pontuação
                restartQuiz(); // Reinicia o quiz
            }, 500); // Espera meio segundo antes de mostrar o alerta e reiniciar o quiz
        }
    }
});

// Função para carregar a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++; // Avança para a próxima pergunta
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion(currentQuestionIndex); // Carrega a próxima pergunta
    } else {
        alert(`Parabéns, ${username}! Você venceu o jogo com ${points} pontos!`); // Mensagem quando todas as perguntas foram respondidas
        restartQuiz(); // Reinicia o quiz após o término
    }
}

// Função para aumentar a pontuação
function increasePoints() {
    points++; // Aumenta a pontuação
    document.querySelector('.points').textContent = points.toString().padStart(2, '0'); // Atualiza o display da pontuação
}

// Função para resetar a pontuação
function resetPoints() {
    points = 0; // Reseta a pontuação
    document.querySelector('.points').textContent = points.toString().padStart(2, '0'); // Atualiza o display da pontuação
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0; // Reseta o índice da pergunta
    loadQuestion(currentQuestionIndex); // Carrega a primeira pergunta novamente
    resetPoints(); // Reseta a pontuação no início do quiz
}

// Carrega a primeira pergunta ao iniciar a página
loadQuestion(currentQuestionIndex);
