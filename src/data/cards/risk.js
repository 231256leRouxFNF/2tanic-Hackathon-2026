
/**
 * Risk deck.
 *
 * Contains ONLY card data.
 *
 * No React components or game logic should be placed here.
 */

const riskCards = [

    //The Slums
    {
        id: "risk-001",

        title: "RUMBLING TUMMY",

        description: "Sneak an extra ration from the pantry. Roll a 4+ to gain $15 or lose $5 getting caught.",

        type: "risk",

        effect: {
            action: "loseMoney",
            amount: 10
        }
    },

        {
        id: "risk-002",

        title: "READY. SET. GO",

        description: "Race a rival worker to the punch clock. To win roll 4+ and move forward 2 or lose a turn.",

        type: "risk",
        
        effect: {
            action: "gainMoney",
            amount: 20
        }
    }

    //The Exchange

    //The Aurum Quater
];

export default riskCards;