
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
    },

        {
        id: "risk-003",

        title: "MONEY>FOOD",

        description: "Trade your lunch for a mystery tool. Roll even: it's valuable and gain $20. Roll odd: it's worthless and lose $5.",

        type: "risk",
        
        effect: {
            action: "gainMoney",
            amount: 20,
            action: "loseMoney",
            amount: 5
        }
    },

            {
        id: "risk-004",

        title: "SHADY DEALINGS",

        description: "Sell scrap to a shady dealer. Roll 3+: gain $25. Fail: gain nothing, lose $5 for the trouble.",

        type: "risk",
        
        effect: {
            action: "gainMoney",
            amount: 25,
            action: "loseMoney",
            amount: 5
        }
    },
    
            {
        id: "risk-005",

        title: "TIP TOE",

        description: "Sneak past the foreman's office. Rool 4+: move forward 2 spaces. Fail: move back 2 spaces.",

        type: "risk",

        effect: {
            action: "moveForward",
            amount: 2,
            action: "moveBack",
            amount: 2
        }
        },

            {
        id: "risk-006",

        title: "YOU CAN COUNT ON ME",

        description: "Volunteer for a machine repair for extra pay. Roll 4+: gain $30. Fail: pay $10 for the injury.",

        type: "risk",
        
        effect: {
            action: "gainMoney",
            amount: 30,
            action: "loseMoney",
            amount: 10
        }
    },

    //The Exchange

    {
        id: "risk-011",

        title: "AN INVESTMENT",

        description: "Invest in a speculative railventure. Pay $40. Roll 4+ to double it. Fail and lose it all.",

        type: "risk",
        
        effect: {
            action: "gainMoney",
            amount: 80,
            action: "loseMoney",
            amount: 40
        }
    },

        {
        id: "risk-012",

        title: "A TINY LITTLE WAGER",

        description: "Challenge a roval broker to a public wager. Win (roll 4+): gain $50. Lose: lose $30.",

        type: "risk",
        
        effect: {
            action: "gainMoney",
            amount: 50,
            action: "loseMoney",
            amount: 30
        }
    },

    {
        id: "risk-013",

        title: "BORN TALE TWISTER",

        description: "Attempt insider tradiing on a rumor. Roll 4+: gain $60. Fail: pay $30 fine.",

        type: "risk",
        
        effect: {
            action: "gainMoney",
            amount: 60,
            action: "loseMoney",
            amount: 30 
        }
    },

    {
        id: "risk-014",

        title: "JUMPING AHEAD",

        description: "Attempt to jump the queue for the bridge auction. Roll 5+: move to the next bridge. Fail: move back 2 spaces.",

        type: "risk",
        
        effect: {
            action: "nextBridge",
            amount: 1,
            action: "moveBack",
            amount: 2
        }
    },

    {
        id: "risk-015",

        title: "JUST A QUCK PEEK",

        description: "Sneak into a private ledger room for information. Roll 4+: peek at a players' bank balance. Fail: pay $20 fine.",

        type: "risk",
        
        effect: {
            action: "peekBalance",
            action: "loseMoney",
            amount: 20
        }
    },

    {
        id: "risk-016",

        title: "CUTING THROUGH",

        description: "Take a risky shortcut through the counting house. Roll 4+: move forward 6 spaces. Fail: move back 3 spaces.",

        type: "risk",
        
        effect: {
            action: "moveForward",
            amount: 6,
            action: "moveBack",
            amount: 3
        }
    },
    
    //The Aurum Quater

            {
        id: "change-020",

        title: "FROGED PROVENANCE",

        description: "Smuggle a forged provennance. Roll 4+: gain $70. Fail: pay $60 fine and lose next turn.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 70,
            action: "loseMoney",
            amount: 60,
            action: "loseNextTurn",
            amount: 1
        }
    },

            {
        id: "change-021",

        title: "CHARM THE FINANCIER",

        description: "Attempt to seduce a rival's financier. Roll 4+: gain $80. Fail: your own backer withdraws, pay $50.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 80,
            action: "loseMoney",
            amount: 50
        }
    },

        {
        id: "change-022",

        title: "CARRIEAGE RACE WAGER",

        description: "Wager your carriage and horses on a private race. Win (roll 3+): move forward 4 spaces. Fail: lose $50 and fall back 2.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 70,
            action: "loseMoney",
            amount: 60,
            action: "loseNextTurn",
            amount: 1
        }
    },

                {
        id: "change-023",

        title: "BUYING SILENCE",

        description: "Attempt to buy silence about a past scandal. Pay $40 Roll 3+ succeeds (draw a Money card).Fail and it becomes public (draw a Danger card).",

        type: "change",
        
        effect: {
            action: "drawMoneyCard",
            amount: 1,
            action: "drawDangerCard",
            amount: 1
        }
    },

                {
        id: "change-024",

        title: "ONE CARD, EVERYTHING",

        description: "Gamble your winnings at the club. Win (roll 3+): gain $120. Lose: lose $80.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 120,
            action: "loseMoney",
            amount: 80
        }
    },

                {
        id: "change-025",

        title: "VOUCHING FOR A STRANGER",

        description: "Risk your reputation vouching for a stranger's credit. Roll 4+: gain $50 favor. Fail: pay $50 for their default.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 50,
            action: "loseMoney",
            amount: 50            
        }
    },
];

export default riskCards;