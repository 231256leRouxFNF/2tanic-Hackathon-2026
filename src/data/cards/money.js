
/**
 * Money deck.
 *
 * Contains ONLY card data.
 *
 * No React components or game logic should be placed here.
 */

const moneyCards = [

    //The Slums
    {
        id: "money-001",

        title: "Payday",

        description: "You collect your weekly wage. Gain $30.",

        type: "money",

        effect: {
            action: "gainMoney",
            amount: 30
        }
    },

        {
        id: "money-002",

        title: "WORK WORK WORK",

        description: "Overtime pay comes through. Gain $20.",

        type: "money",
        
        effect: {
            action: "gainMoney",
            amount: 20
        }
    }

    //The Exchange

    //The Aurum Quater
];

export default moneyCards;