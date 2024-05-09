let techs = [
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
];

let cards = []

function startGame() {
    cards = game.createCardsFromTechs(techs);
    game.renderCards(game.shuffleCards(cards));
    game.addCardClickListeners();
}


