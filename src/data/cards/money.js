
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
    },

            {
        id: "money-003",

        title: "TRASH TO TREASURE",

        description: "You sell scrap brass at the market. Gain $10.",

        type: "money",
        
        effect: {
            action: "gainMoney",
            amount: 10
        }
    },

            {
        id: "money-004",

        title: "STINKY BOOTS",

        description: "Boot repair costs after a long shift. Pay $10.",

        type: "money",
        
        effect: {
            action: "loseMoney",
            amount: 10
        }
    },

            {
        id: "money-005",

        title: "DEBTS REPAID",

        description: "A coworker repays a small debt. Gain $10.",

        type: "money",
        
        effect: {
            action: "gainMoney",
            amount: 10
        }
    },

            {
        id: "money-006",

        title: "PAYING MY DUES",

        description: "Union dues and due. Pay $10.",

        type: "money",
        
        effect: {
            action: "loseMoney",
            amount: 10
        }
    },

    //The Exchange

{
    id: "money-011",

    title: "QUICK CASH",

    description: "A dividend from a modest investment comes through. Gain $50.",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 50
    }
},

{
    id: "money-012",

    title: "DEALINGS",

    description: "You close a small but profitable deal. Gain $60.",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 60
    }
},

{
    id: "money-013",

    title: "IT'S FOR CHARITY",

    description: "A charitable society requests a donation. Pay $10.",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 10
    }
},

{
    id: "money-014",

    title: "RENT",

    description: "Office rent and maintenance fees are due. Pay $30.",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 30
    }
},

{
    id: "money-015",

    title: "PAY FOR MISTAKES",

    description: "A clerk realizes they overcharged you and refunds the difference. Gain $20.",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 20
    }
},

{
    id: "money-016",

    title: "MONEY GAINED",

    description: "An old debt is finally repaid to you. Gain $40.",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 40
    }
},


    //The Aurum Quater

{
    id: "money-020",

    title: "THE TRUST FUND MATURES",

    description: "A trust fund matures. Gain $100.",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 100
    }
},

{
    id: "money-021",

    title: "ESTATE TAXES",

    description: "Estate taxes are due. Pay $60.",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 60
    }
},

{
    id: "money-022",

    title: "THE RARE ARTIFACT",

    description: "You broker the sale of a rare artifact. Gain $90.",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 90
    }
},

{
    id: "money-023",

    title: "PARTY PROBLEMS",

    description: "A lavish party costs more than expected. Pay $50.",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 50
    }
},

{
    id: "money-024",

    title: "PATIENCE PAYS",

    description: "An old investment finally pays off handsomely. Gain $120.",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 120
    }
},

{
    id: "money-025",

    title: "IMPROPER ETIQUETTE",

    description: "You're fined for a breach of etiquette at a prestigious gala. Pay $30.",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 30
    }
},

];

export default moneyCards;