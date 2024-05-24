let game = {

    front : "cardFront",
    back : "cardBack",
    card : "card",
    icon : "icon",
    gameBoard : document.querySelector(".gameBoard"),

    cards: [],

    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],

    inicializeCards:function (boardCards){
        const gameBoard = document.querySelector(".gameBoard")
        
        boardCards.forEach( (newCard) => {
            let cardElement = document.createElement('div')
            cardElement.classList.add(this.card)
            cardElement.id = newCard.id
            cardElement.dataset.icon = newCard.icon
            cardElement.addEventListener('click', this.flipCard)
    
            this.createCardContent(newCard, cardElement)
    
            gameBoard.appendChild(cardElement)
        });
    
    
    },
    
    createCardContent:function (cardContainer,cardAttribute){
        this.createCardFace(this.front, cardContainer,cardAttribute)
        this.createCardFace(this.back, cardContainer,cardAttribute)
    
    
    },
    
    createCardFace: function (face, cardImg, element){
        let cardElementFace = document.createElement('div')
        cardElementFace.classList.add(face)
        if(face === this.front){
            let iconElement = document.createElement('img')
            iconElement.classList.add(this.icon)
            iconElement.src = "./images/" + cardImg.icon + ".png"
            cardElementFace.appendChild(iconElement)
        }else{
            cardElementFace.innerHTML = "&lt/&gt"
        }
    
        element.appendChild(cardElementFace)
    
    },


    shuffleCards: function (shuffledCards) {

        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;


            [shuffledCards[randomIndex], shuffledCards[currentIndex]] = [shuffledCards[currentIndex], shuffledCards[randomIndex]]
        }

    },

    createCardsFromTechs: function () {

        this.techs.forEach((tech) => {
            this.cards.push(...this.createPairFromTech(tech))
        })

        return (this.cards.flatMap(pair => pair));
    },

    createPairFromTech: function (forEachPair) {
        return [{
            id: this.createidWithTech(forEachPair),
            icon: forEachPair,
            flipped: false,
        },
        {
            id: this.createidWithTech(forEachPair),
            icon: forEachPair,
            flipped: false,
        }
        ]
    },

    createidWithTech: function (language) {
        return language + parseInt(Math.random() * 100) 
    },

    flipCard:function (){
        this.classList.add("flip")
    },

    resetGameBoard: function () {
        gameBoard = document.querySelector('.gameBoard');
        gameBoard.innerHTML = '';
    },


}

