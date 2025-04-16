let restartButton = document.querySelector(".restart")
let allCards = document.querySelectorAll(".card")

startGame()
function startGame() {
    
    createdCards = game.createCardsFromTechs(game.techs)
    game.shuffleCards(createdCards)
    game.inicializeCards(createdCards)
}


 function checkGameOver() {

    return createdCards.filter(card => !card.flipped).length == 0
    

}

function restart(){
    game.clearCards()
    startGame()
    game.gameOverLayer.style.display = "none"
}