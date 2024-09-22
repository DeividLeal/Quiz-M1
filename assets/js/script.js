// Dados das princesas com nomes, imagens e o áudio correspondente
const princesses = [
    { name: "Ariel", img: "./img/inesBrasil.webp", audio: "audio/ariel.mp3" },
    { name: "Cinderela", img: "./img/cinderela-face", audio: "audio/cinderela.mp3" },
    { name: "Tiana", img: "./img/tiana-face.webp", audio: "audio/tiana.mp3" },
    { name: "Elsa", img: "./img/elsa-face.jpg", audio: "audio/elsa.mp3" },
    { name: "Sininho", img: "./img/sininho-face.webp", audio: "audio/sininho.mp3" },
    { name: "Kida", img: "./img/kida-face.webp", audio: "audio/kida.mp3" }
  ];
  
  let currentAnswer = ""; // Princesa correta para a pergunta atual

  // Função para iniciar o jogo e fechar a modal
let username; // Declare the username variable

function startGame() {
    const usernameInput = document.getElementById('username').value;
    if (usernameInput.trim() === '') {
        alert('Por favor, insira seu nome para começar o jogo!');
    } else {
        username = usernameInput;
        alert(`Bem-vindo, ${username}! Boa sorte no quiz!`);
        document.getElementById('start-modal').style.display = 'none'; // Esconde a modal
        document.getElementById('quiz-container').style.display = 'block'; // Exibe o quiz
        startQuiz(); // Call startQuiz to initiate the quiz
    }
}

// Função para iniciar o quiz com a primeira pergunta
function startQuiz() {
    loadQuestion();
}
  
  // Função para carregar uma nova pergunta
  function loadQuestion() {
    // Limpar feedback anterior
    document.getElementById('feedback').innerHTML = "";
    document.getElementById('nextButton').disabled = true;
  
    // Escolher uma princesa aleatória
    const randomPrincess = princesses[Math.floor(Math.random() * princesses.length)];
    currentAnswer = randomPrincess.name;
  
    // Atualizar o áudio
    const audioElement = document.getElementById('princessAudio');
    document.getElementById('audioSource').src = randomPrincess.audio;
    audioElement.load();
  
    // Exibir as opções
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ""; // Limpar as opções anteriores
  
    // Misturar as opções (embaralhar as princesas)
    const shuffledOptions = shuffleArray([...princesses]);
  
    // Gerar os cards de opções
    shuffledOptions.forEach((princess) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerHTML = `
        <img src="${princess.img}" alt="${princess.name}">
        <p>${princess.name}</p>
      `;
  
      // Adicionar o evento de clique para verificar a resposta
      optionElement.addEventListener('click', () => {
        checkAnswer(optionElement, princess.name);
      });
  
      optionsContainer.appendChild(optionElement);
    });
  }
  
  // Função para verificar a resposta
  function checkAnswer(selectedOption, selectedAnswer) {
    const allOptions = document.querySelectorAll('.option');
  
    // Desabilitar todos os cliques nas opções após a escolha
    allOptions.forEach(option => option.style.pointerEvents = 'none');
  
    // Verificar se a resposta está correta
    if (selectedAnswer === currentAnswer) {
      selectedOption.classList.add('correct');
  
      // Habilitar o botão "Próxima" apenas se acertar
      document.getElementById('nextButton').disabled = false;
    } else {
      selectedOption.classList.add('wrong');
  
      // Reiniciar o jogo ao errar
      setTimeout(restartQuiz, 1000); // Reinicia após 1 segundo para dar feedback visual
    }
  }
  
  // Função para reiniciar o jogo
  function restartQuiz() {
    alert("Resposta errada! O jogo será reiniciado.");
    startQuiz();
  }
  
  // Função para embaralhar as opções
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Evento para o botão "Próxima"
  document.getElementById('nextButton').addEventListener('click', () => {
    loadQuestion();
  });
  
  // Iniciar o quiz ao carregar a página
  startQuiz();
  