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


let cards = null

startGame()

function startGame() {

    cards = createCardsFromTechs(techs)
    // schuffleCards(cards)
    console.log(cards);

}

//não entendi o direito daqui


function schuffleCards(cards) {

    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //até aqui

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }

}


function createCardsFromTechs(techs) {

    let cards = []

    for (let tech of techs)
        cards.push(createPairFromTech(tech))

    console.log(cards.flatMap(pair => pair));
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