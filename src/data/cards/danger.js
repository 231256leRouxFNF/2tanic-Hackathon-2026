
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
    },

{
    id: "danger-004",

    title: "THIEF",

    description: "Pickpocketed near the gates. Lose $10.",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 10
    }
},

{
    id: "danger-005",

    title: "GROSS WATER",

    description: "A steam leak floods your walkway. Your next dice roll can only move you 1 space.",

    type: "danger",

    effect: {
        action: "limitNextRoll",
        amount: 1
    }
},

{
    id: "danger-006",

    title: "BUT THAT WASN'T ME",

    description: "Mistaken for a troublemaker. Move back 2 spaces.",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 2
    }
},

    //The Exchange

{
    id: "danger-011",

    title: "WHISPERS ON THE FLOOR",

    description: "A rival spreads a damaging rumor about you. Lose $30.",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 30
    }
},

{
    id: "danger-012",

    title: "PRYING EYES",

    description: "You're caught reviewing confidential ledgers. Move back 2 spaces.",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 2
    }
},

{
    id: "danger-013",

    title: "OUTPLAYED",

    description: "You're outmaneuvered in a public negotiation. Move back 1 space.",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 1
    }
},

{
    id: "danger-014",

    title: "THE BOTTOM DROPS OUT",

    description: "The market takes a sudden downturn. Lose $20.",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 20
    }
},

{
    id: "danger-015",

    title: "THE AUDITOR CALLS",

    description: "Your office is audited unexpectedly. Pay $30.",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 30
    }
},

{
    id: "danger-016",

    title: "FLOOR SHOW FIASCO",

    description: "You're publicly embarrassed at an exchange floor event. Move back 2 spaces.",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 2
    }
},

    //The Aurum Quater

    {
    id: "danger-020",

    title: "UNDER INVESTIGATION",

    description: "Your name is linked to a fraud investigation. Skip your next Money card.",

    type: "danger",

    effect: {
        action: "skipNextMoneyCard",
        amount: 1
    }
},

{
    id: "danger-021",

    title: "OUTBID AT THE GAVEL'S FALL",

    description: "A rival outbids you at the last second. Lose $60.",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 60
    }
},

{
    id: "danger-022",

    title: "CAUGHT IN THE ACT",

    description: "Caught in a compromising position at a gala. Pay $70 to keep it quiet.",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 70
    }
},

{
    id: "danger-023",

    title: "THE DEBT COMES DUE",

    description: "A creditor demands payment of an old loan. Pay $80.",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 80
    }
},

{
    id: "danger-024",

    title: "THE TALK OF THE QUARTER",

    description: "You're the subject of vicious gossip. Move back 2 spaces.",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 2
    }
},

{
    id: "danger-025",

    title: "LOST IN TRANSIT",

    description: "A courier loses the deed to a property you were pursuing. Move back 1 space and lose $40.",

    type: "danger",

    effect: {
        action: "moveBackwardLoseMoney",
        amount: {
            spaces: 1,
            money: 40
        }
    }
},


];

export default riskCards;