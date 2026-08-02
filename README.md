# Code Pairs 🎴 (Jogo da Memória)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

Jogo da memória com cartas de tecnologias. O jogador vira duas cartas por vez e precisa encontrar os pares de logos até limpar o tabuleiro. Sem build, sem dependências, sem backend — só HTML, CSS e JavaScript puro.

**[Jogar agora](https://jogo-da-memoria-victor.netlify.app/)**

Uma prévia em GIF do jogo rodando está disponível no meu [portfólio principal](https://github.com/BuenosVictor).

## Sobre

Lógica de programação era uma das minhas maiores fragilidades, e foi por isso que decidi criar este projeto: para treinar justamente o que eu era ruim. Escrevi toda a lógica do jogo eu mesmo — virar carta por carta, comparar os pares, controlar o que já tinha sido acertado sem virar bagunça.

Foi o projeto com mais acompanhamento do meu mentor, cobrando cada decisão de como eu estruturei esse controle de estado. Nada de framework pra esconder a lógica: só eu, o DOM e um objeto `game` guardando tudo que precisava ser lembrado entre um clique e outro.

## Destaques técnicos

- **Estado centralizado num único objeto `game`** — não é uma classe, é um objeto literal que cacheia as referências de DOM (`gameBoard`, `gameOverLayer`, `moveCounter`) e guarda `firstCard`, `secondCard`, `lockMode` e `moves` como propriedades mutáveis. Esse é o "controle de estado" que meu mentor mais cobrou.
- **Todo clique passa por `setCard()`**, que faz um duplo guard antes de aceitar a jogada: a carta já está `flipped`? o `lockMode` está ativo (uma comparação de par em andamento)? Só assim ele deixa o clique virar a carta — sem isso dava pra clicar três, quatro cartas ao mesmo tempo e bugar o jogo todo.
- **Corrida entre restart e timeout resolvida de propósito.** O desvirar automático (quando o par erra) é agendado com `setTimeout` e guardado em `this.unflipTimeout`. Se o jogador reinicia o jogo antes desse timeout disparar, `resetGameBoard()` cancela ele — evita um timeout órfão desvirando carta de uma partida que já acabou. Tem até um commit dedicado só pra esse fix.
- **IDs de carta não são determinísticos e não precisam ser.** Cada carta recebe um id tipo `react42` (tecnologia + número aleatório), então colisão entre ids é possível — mas inofensiva, porque a comparação de par usa o campo `icon`, não o `id`.
- **Flip 100% CSS, zero animação via JS.** `cardFront` e `cardBack` são duas faces posicionadas com `backface-visibility: hidden` dentro de um `.card` com `transform-style: preserve-3d`. A classe `.flip` só alterna `rotateY(180deg)` — o JavaScript decide *quando* virar, o CSS decide *como*.
- **Responsivo e com um mínimo de acessibilidade**: grid controlado por custom properties, um breakpoint em 700px (5 colunas viram 4), `prefers-reduced-motion` zerando as transições pra quem prefere assim, `aria-live` no contador de jogadas e `role="dialog" aria-modal` no overlay de vitória.

## Como rodar localmente

Não tem build, não tem `npm install`, não tem `package.json`. É só:

1. Clonar o repositório
2. Abrir o `index.html` direto no navegador (duplo clique funciona, ou uma extensão tipo Live Server se preferir)

```bash
git clone https://github.com/BuenosVictor/Jogo-da-Memoria.git
cd Jogo-da-Memoria
# abra index.html no navegador
```

Os scripts são carregados como tags simples (`game.js` antes de `index.js`), as imagens usam caminho relativo, e tudo funciona em `file://` sem problema de CORS. A única coisa que precisa de internet é a fonte "Righteous" do Google Fonts — sem conexão, o texto cai no fallback sans-serif e o jogo continua funcionando normalmente.

## Estrutura

```
Jogo-da-Memoria/
├── index.html          # HUD (contador de jogadas + botão reiniciar), tabuleiro e overlay de vitória
├── CSS/
│   └── style.css       # tema, grid do tabuleiro, flip 3D, responsivo
├── JS/
│   ├── game.js          # objeto `game`: estado + lógica (setCard, flipCard, checkMatch...)
│   └── index.js          # bootstrap: startGame(), checkGameOver(), restart()
├── images/              # logos das tecnologias usadas nas cartas
└── LICENSE
```

## Licença

MIT — veja o arquivo [LICENSE](https://github.com/BuenosVictor/Jogo-da-Memoria/blob/main/LICENSE) no repositório.

## Contato

Victor de Souza

- GitHub: [github.com/BuenosVictor](https://github.com/BuenosVictor)
- LinkedIn: [linkedin.com/in/victor-bueno-382054262](https://linkedin.com/in/victor-bueno-382054262)
- E-mail: buenos.victor2004@gmail.com
