let username = ''; // Variável para armazenar o nome do usuário
let time = 0; // Variável para o cronômetro
let timerInterval; // Intervalo do cronômetro
let score = 0; // Variável para armazenar o contador de pontos
let currentQuestionIndex = 0;

// Array de perguntas e respostas
const allQuestions = [
    {
        question: "Qual princesa foi inspirada em uma figura histórica real, uma nativa americana?",
        options: [
            { text: 'Pocahontas', image: './assets/img/Pocahontas-face.jpeg' },
            { text: 'Jasmine', image: './assets/img/Jasmine-face.webp' },
            { text: 'Mulan', image: './assets/img/Mulan-face.jpeg' },
            { text: 'Aurora', image: './assets/img/Tiana-face.jpg' }
        ],
        correct: 0
    },
    {
        question: 'Qual princesa é filha do chefe de uma tribo e sonha em navegar pelo oceano?',
        options: [
            { text: 'Tina', image: 'assets/images/moana.jpg' },
            { text: 'Cinderela', image: 'assets/images/ariel.jpg' },
            { text: 'Moana', image: './img/Moana-face.jpg' },
            { text: 'Jasmine', image: 'assets/images/aurora.jpg' }
        ],
        correct: 2
    },
    {
        question: 'Qual princesa foi criada por sua madrasta e é famosa por seu sapatinho de cristal?',
        options: [
            { text: 'Jasmine', image: 'assets/images/bela.jpg' },
            { text: 'Mulan', image: 'assets/images/cinderela.jpg' },
            { text: 'Cinderela', image: './img/Cinderela-face.jpg' },
            { text: 'Tina', image: 'assets/images/aurora.jpg' }
        ],
        correct: 2
    },

];

  // Função para carregar uma pergunta e suas opções
  function loadQuestion(index) {
    const questionElement = document.getElementById('question');
    const optionsListElement = document.getElementById('options-list');
    
    // Limpa a lista de opções
    optionsListElement.innerHTML = '';

    // Define a pergunta atual
    const currentQuestion = allQuestions[index];
    questionElement.textContent = currentQuestion.question;

    // Adiciona as opções à lista
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        
        const button = document.createElement('button');
        button.classList.add('options-list-button');
        
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

// Carrega a primeira pergunta ao iniciar a página
loadQuestion(0);

// Função para testar o clique de uma opção (pode ser adaptada conforme necessário)
document.getElementById('options-list').addEventListener('click', function(event) {
    if (event.target.closest('button')) {
        const selectedOption = event.target.closest('button').querySelector('.options-list-text').textContent;
        alert('Você escolheu: ' + selectedOption);
    }
});
