const front = "cardFront";
const back = "cardBack";

const game = {
    cards: [], // Inicializando a propriedade cards
    
    renderCards: function(cards) {
        const gameBoard = document.querySelector('.gameBoard');
        gameBoard.innerHTML = ''; // Limpar o conteúdo do tabuleiro antes de renderizar novas cartas
        
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
    
            const cardFront = document.createElement('div');
            cardFront.classList.add(front); // Usar a constante front para a classe
            cardFront.classList.toggle('hidden');
            cardElement.appendChild(cardFront);
    
            const img = document.createElement('img');
            img.src = "./images/" + card.icon + ".png";
            cardFront.appendChild(img);
    
            const cardBack = document.createElement('div');
            cardBack.classList.add(back); // Usar a constante back para a classe
            cardBack.textContent = '</>';
            cardElement.appendChild(cardBack);
    
            gameBoard.appendChild(cardElement);
        });
    },
    
    addCardClickListeners: function() {
        const cardsElements = document.querySelectorAll('.card');
        cardsElements.forEach(card => {
            card.addEventListener('click', () => {
                const cardFront = card.querySelector('.' + front); // Usar a constante front para a classe
                const cardBack = card.querySelector('.' + back); // Usar a constante back para a classe
                cardFront.classList.toggle('hidden');
                cardBack.classList.toggle('hidden');
            });
        });
    },
    
    shuffleCards: function(cards) {
        let shuffledCards = [...cards]; // Clonando o array para não modificar o original
        let currentIndex = shuffledCards.length;
        let randomIndex = 0;
    
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [shuffledCards[randomIndex], shuffledCards[currentIndex]] = [shuffledCards[currentIndex], shuffledCards[randomIndex]];
        }
        return shuffledCards;
    },
    
    createCardsFromTechs: function(techs) {
        const createdCards = [];
    
        for (let tech of techs) {
            createdCards.push(...this.createPairFromTech(tech)); // Usar spread operator para adicionar os pares de cartas
        }
    
        return createdCards;
    },
    
    createPairFromTech: function(tech) {
        return [{
                class: this.createClassWithTech(tech),
                icon: tech,
                flipped: false
            },
            {
                class: this.createClassWithTech(tech),
                icon: tech,
                flipped: false
            }
        ];
    },
    
    createClassWithTech: function(tech) {
        return tech + parseInt(Math.random() * 100);
    }
};

function startGame() {
    game.cards = game.createCardsFromTechs(techs);
    game.renderCards(game.shuffleCards(game.cards));
    game.addCardClickListeners();
}

document.addEventListener("DOMContentLoaded", function() {
    startGame();
});
