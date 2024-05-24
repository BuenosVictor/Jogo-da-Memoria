startGame()

function startGame() {
    
    game.resetGameBoard()
    createdCards = game.createCardsFromTechs(game.techs)
    game.shuffleCards(createdCards)
    game.inicializeCards(createdCards)
    
}
