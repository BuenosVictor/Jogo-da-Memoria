let createdCards = []

startGame()
function startGame() {

    createdCards = game.createCardsFromTechs(game.techs)
    game.shuffleCards(createdCards)
    game.inicializeCards(createdCards)
    game.setMoves(0)
}


function checkGameOver() {

    return createdCards.filter(card => !card.flipped).length == 0


}

function restart() {
    game.clearCards()
    startGame()
    game.gameOverLayer.style.display = "none"
}
