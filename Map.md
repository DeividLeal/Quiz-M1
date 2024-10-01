# Cenários do Quiz

## Cenário 1: Usuário Acertou

**Descrição**: O usuário escolhe a resposta correta para a pergunta atual.

- **Ação**: O sistema exibe uma cor verde de confirmação no card.
- **Resultado**: O usuário é levado à próxima pergunta.
- **Pontos**: O usuário ganha pontos por acertar a resposta.

## Cenário 2: Usuário Errou

**Descrição**: O usuário escolhe uma resposta incorreta.

- **Ação**: O sistema exibe uma mensagem de erro (ex:"Errado! O quiz será reiniciado.").
- **Resultado**: O quiz é resetado e o usuário volta ao início do quiz.
- **Pontos**: O usuário não ganha pontos.

## Cenário 3: Usuário Pula a Pergunta

**Descrição**: O usuário decide pular a pergunta atual.

- **Ação**: nenhuma.
- **Resultado**: O usuário é levado à próxima pergunta.
- **Pontos**: O usuário não ganha pontos por pular a pergunta.

## Cenário 4: Quiz Completo

**Descrição**: O usuário completa todas as perguntas do quiz.

- **Ação**: O sistema exibe uma mensagem final (ex:"Parabéns, "X" ! Você venceu o jogo com "X" pontos!"").
- **Resultado**: O usuário pode ver a pontuação total e a opção de reiniciar o quiz.
- **Pontos**: O total de pontos acumulados é exibido.
