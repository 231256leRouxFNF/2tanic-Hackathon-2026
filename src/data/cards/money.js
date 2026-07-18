
/**
 * Money deck.
 *
 * Contains ONLY card data.
 *
 * No React components or game logic should be placed here.
 */

const moneyCards = [

    //slums

{
    id: "money-001",

    title: "PAYDAY",

    description: "You collect your weekly wage. Gain $30.",

    area: "slums",

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

    area: "slums",

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

    area: "slums",

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

    area: "slums",

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

    area: "slums",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 10
    }
},

{
    id: "money-006",

    title: "PAYING MY DUES",

    description: "Union dues are due. Pay $10.",

    area: "slums",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 10
    }
},

{
    id: "money-007",

    title: "POCKET MONEY",

    description: "You find loose chance near the loading dock. Gain $10.",

    area: "slums",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 10
    }
},

{
    id: "money-008",

    title: "RENT MONEY",

    description: "Rent is due at your lodging house. Pay $20.",

    area: "slums",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 20
    }
},

{
    id: "money-009",

    title: "CALL ME A BLACKSMITH",

    description: "You mend and sell an old tool. Gain $20.",

    area: "slums",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 20
    }
},

{
    id: "money-010",

    title: "MEETING THE STANDARDS",

    description: "A small bonus for meeting your quota. Gain $20.",

    area: "slums",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 20
    }
},

{
    id: "money-011",

    title: "THE WORK'S NEVER DONE",

    description: "You collect payment for covering a double shift. Gain $30.",

    area: "slums",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 30
    }
},

{
    id: "money-012",

    title: "SOOT EVERYWHERE",

    description: "Coal dust ruins your only coat. Replace it. Pay $10.",

    area: "slums",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 10
    }
},

{
    id: "money-013",

    title: "DON'T NEED EXTRAS",

    description: "You pawn a spare gear component. Gain $20.",

    area: "slums",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 20
    }
},

{
    id: "money-014",

    title: "BROKEN TOOLS",

    description: "Tool replacement fee after breaking one. Pay $10.",

    area: "slums",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 10
    }
},

    //The Exchange

// The Exchange

{
    id: "money-015",

    title: "DEALINGS",

    description: "You close a small but profitable deal. Gain $60.",

    area: "exchange",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 60
    }
},

{
    id: "money-016",

    title: "IT'S FOR CHARITY",

    description: "A charitable society requests a donation. Pay $10.",

    area: "exchange",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 10
    }
},

{
    id: "money-017",

    title: "RENT",

    description: "Office rent and fees are due. Pay $30.",

    area: "exchange",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 30
    }
},

{
    id: "money-018",

    title: "PAY FOR MISTAKES",

    description: "A clerk overcharged you by mistake. Gain $20.",

    area: "exchange",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 20
    }
},

{
    id: "money-019",

    title: "MONEY GAINED",

    description: "An old debt is finally repaid to you. Gain $40.",

    area: "exchange",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 40
    }
},

{
    id: "money-020",

    title: "A NICE TIP",

    description: "A generous tip from a satisfied client. Gain $30.",

    area: "exchange",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 30
    }
},

{
    id: "money-021",

    title: "INFORMANT",

    description: "You sell information to a competitor. Gain $30.",

    area: "exchange",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 30
    }
},

{
    id: "money-022",

    title: "FORGOTTEN MERCH",

    description: "A stock you forgot about matures nicely. Gain $60.",

    area: "exchange",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 60
    }
},

{
    id: "money-023",

    title: "YOU OWE ME",

    description: "You cover a colleague's shortfall as a favor. Pay $20.",

    area: "exchange",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 20
    }
},

{
    id: "money-024",

    title: "A SURE BET",

    description: "You win a modest bet among peers. Gain $30.",

    area: "exchange",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 30
    }
},

{
    id: "money-025",

    title: "SILENT PROFIT",

    description: "A silent partner sends unexpected profits. Gain $50.",

    area: "exchange",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 50
    }
},

{
    id: "money-026",

    title: "LOOSE LIPS",

    description: "You sell information to a competitor. Gain $30.",

    area: "exchange",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 30
    }
},

{
    id: "money-027",

    title: "OVERDUE NOTICE",

    description: "You're charged for a late payment. Pay $20.",

    area: "exchange",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 20
    }
},
    //The Aurum Quater

// The Aurum Quarter

{
    id: "money-028",

    title: "THE TRUST FUND MATURES",

    description: "A trust fund matures. Gain $100.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 100
    }
},

{
    id: "money-029",

    title: "ESTATE TAXES",

    description: "Estate taxes are due. Pay $60.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 60
    }
},

{
    id: "money-030",

    title: "THE RARE ARTIFACT",

    description: "You broker the sale of a rare artifact. Gain $90.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 90
    }
},

{
    id: "money-031",

    title: "PARTY PROBLEMS",

    description: "A lavish party costs more than expected. Pay $50.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 50
    }
},

{
    id: "money-032",

    title: "PATIENCE PAYS",

    description: "An old investment finally pays off handsomely. Gain $120.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 120
    }
},

{
    id: "money-033",

    title: "UNPROPER",

    description: "You're fined for a breach of etiquette at a gala. Pay $30.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 30
    }
},

{
    id: "money-034",

    title: "DISCRETION REWARDED",

    description: "A grateful patron rewards your discretion. Gain $70.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 70
    }
},

{
    id: "money-035",

    title: "A MODEST WIN",

    description: "You win a modest wager among the elite. Gain $60.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 60
    }
},

{
    id: "money-036",

    title: "AN ADMIRER'S GIFT",

    description: "A wealthy admirer sends a generous gift. Gain $90.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 90
    }
},

{
    id: "money-037",

    title: "FOR SALE",

    description: "You sell a family heirloom for a strong price. Gain $90.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 90
    }
},

{
    id: "money-038",

    title: "LONG TIME COMING",

    description: "Your investments in the Exchange finally mature. Gain $110.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 110
    }
},

{
    id: "money-039",

    title: "THE SILENT PARTNER",

    description: "A silent business partner shares unexpected profits. Gain $100.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 100
    }
},

{
    id: "money-040",

    title: "PROPERTY PROBLEMS",

    description: "Legal fees from a property dispute. Pay $60.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "loseMoney",
        amount: 60
    }
},

{
    id: "money-041",

    title: "THE HOUSE LOSES TONIGHT",

    description: "You win big at the private card tables. Gain $130.",

    area: "aurumQuarter",

    type: "money",

    effect: {
        action: "gainMoney",
        amount: 130
    }
},

];

export default moneyCards;