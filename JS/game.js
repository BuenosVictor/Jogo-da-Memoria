let game = {

    techs: [
        'bootstra1p',
        'css',
        'eletron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],

    cards: [],

    createCardsFromTechs: function () {

        const createdCards = []

        this.techs.forEach( (tech) =>{
            createdCards.push(createPairFromTech(tech))
        })
            
        return (createdCards.flatMap(pair => pair));
    },

    createPairFromTech: function (forEachPair) {
        return [{
            class: createIdWithTech(forEachPair),
            icon: forEachPair,
            flipped: false
        },
        {
            class: createIdWithTech(forEachPair),
            icon: forEachPair,
            flipped: false
        }
        ]
    },

    createIdWithTech: function createIdWithTech(language) {
        return language + parseInt(Math.random() * 100)
    }





}