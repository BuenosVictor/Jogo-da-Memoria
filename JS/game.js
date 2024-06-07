let game = {

    front: "cardFront",
    back: "cardBack",
    card: "card",
    icon: "icon",
    lockMode: false,
    firstCard: null,
    secondCard: null,
    gameBoard: document.querySelector(".gameBoard"),

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

    setCard: function (img) {
        let equalCards = this.createdCards.filter(Image => Image.id === img)[0]

        if (equalCards.flipped || this.lockMode) {
            return false
        }

        if (!this.firstCard) {
            this.firstCard = equalCards
            return true
        } else {
            this.secondCard = equalCards
            this.lockMode = true
            return true
        }

    },

    flipCard: function () {
        if (this.setCard(this.createdCards)) {


            this.classList.add("flip")

            if (this.checkMatch()) {
                this.clearCards
            } else {
                setTimeout(() => {
                    let firstCardView = document.getElementById(this.firstCard.id);
                    let secondCardView = document.getElementById(this.secondCard.id);

                    firstCardView.classList.remove('flip');
                    secondCardView.classList.remove('flip');
                    this.clearCards()
                }, 1000);
            }
        }
    },

    resetGameBoard: function () {
        gameBoard = document.querySelector('.gameBoard');
        gameBoard.innerHTML = '';
    },

    checkMatch: function () {
        return this.firstCard.icon === this.secondCard.icon
    },

    clearCards: function () {
        this.firstCard = null
        this.secondCard = null
        this.lockMode = null
    },

    inicializeCards: function (boardCards) {
        const gameBoard = document.querySelector(".gameBoard")

        boardCards.forEach((newCard) => {
            let cardElement = document.createElement('div')
            cardElement.classList.add(this.card)
            cardElement.id = newCard.id
            cardElement.dataset.icon = newCard.icon
            cardElement.addEventListener('click', this.flipCard)

            this.createCardContent(newCard, cardElement)

            gameBoard.appendChild(cardElement)
        });


    },

    createCardContent: function (cardContainer, cardAttribute) {
        this.createCardFace(this.front, cardContainer, cardAttribute)
        this.createCardFace(this.back, cardContainer, cardAttribute)


    },

    createCardFace: function (face, cardImg, element) {
        let cardElementFace = document.createElement('div')
        cardElementFace.classList.add(face)
        if (face === this.front) {
            let iconElement = document.createElement('img')
            iconElement.classList.add(this.icon)
            iconElement.src = "./images/" + cardImg.icon + ".png"
            cardElementFace.appendChild(iconElement)
        } else {
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



}

