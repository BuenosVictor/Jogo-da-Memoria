const front = "cardFront"
const back = "cardBack"
const card = "card"
const icon = "icon"

// let techs = [
//     'bootstrap',
//     'css',
//     'eletron',
//     'firebase',
//     'html',
//     'javascript',
//     'jquery',
//     'mongo',
//     'node',
//     'react'
// ];


startGame()

function startGame() {

    game.createdCards = game.createCardsFromTechs(game.techs)
    schuffleCards(game.cards)
    inicializeCards(game.cards)
    
}

function inicializeCards(boardCards){
    const gameBoard = document.querySelector(".gameBoard")
    
    boardCards.forEach( (newCard) => {
        let cardElement = document.createElement('div')
        cardElement.id = newCard.id
        cardElement.classList.add(card)
        cardElement.dataset.icon = newCard.icon

        createCardContent(newCard, cardElement)
        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement)
    });


}

function createCardContent(cardContainer,cardAttribute){
    createCardFace(front, cardContainer,cardAttribute)
    createCardFace(back, cardContainer,cardAttribute)


}

function createCardFace(face, cardImg, element){
    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face)
    if(face === front){
        let iconElement = document.createElement('img')
        iconElement.classList.add(icon)
        iconElement.src = "./images/" + cardImg.icon + ".png"
        cardElementFace.appendChild(iconElement)
    }else{
        cardElementFace.innerHTML = "&lt/&gt"
    }

    element.appendChild(cardElementFace)
}

function flipCard(){
    this.classList.add("flip")
}


function schuffleCards(shuffledCards) {

    let currentIndex = game.cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;


        [shuffledCards[randomIndex], shuffledCards[currentIndex]] = [shuffledCards[currentIndex], shuffledCards[randomIndex]]
    }

}

// sera q eu n deveria mudar o nome do parametro "techs"??

// function createCardsFromTechs(techs) {

//     const createdCards = []

//     for (let tech of techs)
//     createdCards.push(createPairFromTech(tech))

//     return(createdCards.flatMap(pair => pair));
// }

// function createPairFromTech(tech) {
//     return [{
//         class: createClassWithTech(tech),
//         icon: tech,
//         flipped: false
//     },
//     {
//         class: createClassWithTech(tech),
//         icon: tech,
//         flipped: false
//     }
//     ]
// }

// function createClassWithTech(tech) {
//     return tech + parseInt(Math.random() * 100)
// }