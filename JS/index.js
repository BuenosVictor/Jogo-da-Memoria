const front = "cardFront"
const back = "cardBack"

let techs = [
    'bootstrap',
    'css',
    'eletron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];


let cards = []

startGame()

function startGame() {

    cards = createCardsFromTechs(techs)
    schuffleCards(cards)
    console.log(cards);

}

//não entendi o direito daqui


function schuffleCards(shuffledCards) {

    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //até aqui

        [shuffledCards[randomIndex], shuffledCards[currentIndex]] = [shuffledCards[currentIndex], shuffledCards[randomIndex]]
    }

}


function createCardsFromTechs(techs) {

    let createdCards = []

    for (let tech of techs)
    createdCards.push(createPairFromTech(tech))

    return(createdCards.flatMap(pair => pair));
}

function createPairFromTech(tech) {
    return [{
        class: createClassWithTech(tech),
        icon: tech,
        flipped: false
    },
    {
        class: createClassWithTech(tech),
        icon: tech,
        flipped: false
    }
    ]
}

function createClassWithTech(tech) {
    return tech + parseInt(Math.random() * 100)
}