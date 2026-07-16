
/**
 * Danger deck.
 *
 * Contains ONLY card data.
 *
 * No React components or game logic should be placed here.
 */

const riskCards = [

    //The Slums
    {
        id: "risk-001",

        title: "WELL THAT WAS REALLY SCARY",

        description: "A boiler hisses dangerously close. Move back 1 space.",

        type: "risk",

        effect: {
            action: "gainMoney",
            amount: 30
        }
    },

        {
        id: "risk-002",

        title: "WAS JUST A SMALL BREAK",

        description: "The foreman catches you slacking. Move back 1 space.",

        type: "risk",
        
        effect: {
            action: "gainMoney",
            amount: 20
        }
    }
];

export default riskCards;