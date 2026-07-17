
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

    description: "Sneak an extra ration from the pantry. Roll 4+ to gain $15 or lose $5 getting caught.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 4,
        successAmount: 15,
        failAmount: -5
    }
},

{
    id: "risk-002",

    title: "READY. SET. GO",

    description: "Race a rival worker to the punch clock. Roll 4+ to move forward 2 spaces or lose a turn.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForMoveOrLoseTurn",
        successRoll: 4,
        successSpaces: 2
    }
},

{
    id: "risk-003",

    title: "MONEY > FOOD",

    description: "Trade your lunch for a mystery tool. Roll even: gain $20. Roll odd: lose $5.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollEvenOddMoney",
        evenAmount: 20,
        oddAmount: -5
    }
},

{
    id: "risk-004",

    title: "SHADY DEALINGS",

    description: "Sell scrap to a shady dealer. Roll 3+: gain $25. Fail: lose $5.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 3,
        successAmount: 25,
        failAmount: -5
    }
},

{
    id: "risk-005",

    title: "TIP TOE",

    description: "Sneak past the foreman's office. Roll 4+: move forward 2 spaces. Fail: move back 2 spaces.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForMovement",
        successRoll: 4,
        successSpaces: 2,
        failSpaces: -2
    }
},

{
    id: "risk-006",

    title: "YOU CAN COUNT ON ME",

    description: "Volunteer for a machine repair for extra pay. Roll 4+: gain $30. Fail: pay $10.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 4,
        successAmount: 30,
        failAmount: -10
    }
},

{
    id: "risk-007",

    title: "CUTTING CORNERS",

    description: "Take a shortcut across the rooftops. Roll 4+: move forward 3 spaces. Fail: move back 1 space.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForMovement",
        successRoll: 4,
        successSpaces: 3,
        failSpaces: -1
    }
},

{
    id: "risk-008",

    title: "SNEAKY DEALINGS",

    description: "Trade favors with a suspicious foreman. Roll even: skip your next Danger card. Roll odd: draw an extra Danger card.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollEvenOddCardEffect",
        evenAction: "skipCard",
        evenDeck: "danger",
        oddAction: "drawCard",
        oddDeck: "danger"
    }
},

{
    id: "risk-009",

    title: "BOB THE BUILDER",

    description: "You try to fix a machine instead of waiting for repairs. Roll 5+: gain $15. Fail: pay $10.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 5,
        successAmount: 15,
        failAmount: -10
    }
},

{
    id: "risk-010",

    title: "POCKET IT",

    description: "Hide extra coal in your coat to sell later. Roll 4+: gain $20. Fail: lose $10 in fines.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 4,
        successAmount: 20,
        failAmount: -10
    }
},

{
    id: "risk-011",

    title: "ZZZ",

    description: "Sneak a nap during your shift. Roll 5+: skip your next Risk card. Fail: lose $10 in docked pay.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForSkipOrLoseMoney",
        successRoll: 5,
        skipDeck: "risk",
        failAmount: 10
    }
},

{
    id: "risk-012",

    title: "NO MORE TICK TOCK",

    description: "Attempt to jam the time clock in your favor. Roll 4+: move forward 2 spaces. Fail: pay $10.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForMoveOrLoseMoney",
        successRoll: 4,
        successSpaces: 2,
        failAmount: 10
    }
},

{
    id: "risk-013",

    title: "I GOT IT BOSS",

    description: "Offer to test an unstable machine part for bonus pay. Roll 5+: gain $25. Fail: move back 1 space.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForMoneyOrMovement",
        successRoll: 5,
        successAmount: 25,
        failSpaces: -1
    }
},

{
    id: "risk-014",

    title: "POKER FACE",

    description: "Wager your break time on a card game. Win: draw a Change card. Lose: move back 1 space.",

    area: "slums",

    type: "risk",

    effect: {
        action: "rollForCardOrMovement",
        successRoll: 4,
        successDeck: "change",
        failSpaces: -1
    }
},

// The Exchange

{
    id: "risk-015",

    title: "AN INVESTMENT",

    description: "Invest in a speculative rail venture. Pay $40. Roll 4+ to double it. Fail and lose it all.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForInvestment",
        cost: 40,
        successRoll: 4,
        successAmount: 80,
        failAmount: 0
    }
},

{
    id: "risk-016",

    title: "A TINY LITTLE WAGER",

    description: "Challenge a rival broker to a public wager. Roll 4+: gain $50. Fail: lose $30.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 4,
        successAmount: 50,
        failAmount: -30
    }
},

{
    id: "risk-017",

    title: "BORN TALE TWISTER",

    description: "Attempt insider trading on a rumor. Roll 4+: gain $60. Fail: pay a $30 fine.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 4,
        successAmount: 60,
        failAmount: -30
    }
},

{
    id: "risk-018",

    title: "JUMPING AHEAD",

    description: "Attempt to jump the queue for the bridge auction. Roll 5+: move to the next bridge. Fail: move back 2 spaces.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForNextBridge",
        successRoll: 5,
        failSpaces: -2
    }
},

{
    id: "risk-019",

    title: "JUST A QUICK PEEK",

    description: "Sneak into a private ledger room for information. Roll 4+: peek at another player's bank balance. Fail: pay a $20 fine.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForPeekMoney",
        successRoll: 4,
        failAmount: -20
    }
},

{
    id: "risk-020",

    title: "CUTTING THROUGH",

    description: "Take a risky shortcut through the counting house. Roll 4+: move forward 6 spaces. Fail: move back 3 spaces.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForMovement",
        successRoll: 4,
        successSpaces: 6,
        failSpaces: -3
    }
},

{
    id: "risk-021",

    title: "I WAGER...",

    description: "Challenge the house at a private card table. Wager $40. Roll even: double it. Roll odd: lose it.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollEvenOddInvestment",
        cost: 40,
        successAmount: 80
    }
},

{
    id: "risk-022",

    title: "MONEY \"GUARANTEED\"",

    description: "Trust a broker's 'guaranteed' return. Pay $50. Roll 5+ to double it. Fail and lose it all.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForInvestment",
        cost: 50,
        successRoll: 5,
        successAmount: 100,
        failAmount: 0
    }
},

{
    id: "risk-023",

    title: "FINANCES",

    description: "Fence a questionable financial document. Roll 3+: gain $40. Fail: pay a $30 penalty.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 3,
        successAmount: 40,
        failAmount: -30
    }
},

{
    id: "risk-024",

    title: "FORGED SIGNATURE",

    description: "Attempt to forge a small advantage in the ledgers. Roll 5+: gain $40. Fail: lose $20 and move back 1 space.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForMoneyOrMovement",
        successRoll: 5,
        successAmount: 40,
        failAmount: -20,
        failSpaces: -1
    }
},

{
    id: "risk-025",

    title: "LEAP FROG",

    description: "Wager your position in line for a chance to leap ahead. Roll 4+: move forward 5 spaces. Fail: move back 2 spaces.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForMovement",
        successRoll: 4,
        successSpaces: 5,
        failSpaces: -2
    }
},

{
    id: "risk-026",

    title: "HAHAHA AGAIN",

    description: "Draw again.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "drawAgain"
    }
},

{
    id: "risk-027",

    title: "THE BETTING GAME",

    description: "Bet another player you'll win the next bridge crossing. If you're right, they pay you $40.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "playerBet",
        amount: 40
    }
},

{
    id: "risk-028",

    title: "SETTING THE STAKES HIGHER",

    description: "Wager on tomorrow's market close. Bet $30. Roll 3+: triple it. Fail: lose it all.",

    area: "exchange",

    type: "risk",

    effect: {
        action: "rollForInvestment",
        cost: 30,
        successRoll: 3,
        successAmount: 90,
        failAmount: 0
    }
},
    
// The Aurum Quarter

{
    id: "risk-029",

    title: "FORGED PROVENANCE",

    description: "Smuggle a forged provenance. Roll 4+: gain $70 on the sale. Fail: pay a $60 fine and lose your next turn.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForMoneyAndLoseTurn",
        successRoll: 4,
        successAmount: 70,
        failAmount: -60
    }
},

{
    id: "risk-030",

    title: "CHARM THE FINANCIER",

    description: "Attempt to seduce a rival's financier. Roll 4+: gain $80. Fail: your own backer withdraws, pay $50.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 4,
        successAmount: 80,
        failAmount: -50
    }
},

{
    id: "risk-031",

    title: "CARRIAGE RACE WAGER",

    description: "Wager your carriage and horses on a private race. Roll 3+: move forward 4 spaces. Fail: lose $50 and move back 2 spaces.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForMoneyOrMovement",
        successRoll: 3,
        successSpaces: 4,
        failAmount: -50,
        failSpaces: -2
    }
},

{
    id: "risk-032",

    title: "BUYING SILENCE",

    description: "Attempt to buy silence about a past scandal. Pay $40. Roll 3+: draw a Money card. Fail: draw a Danger card.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForCards",
        successRoll: 3,
        cost: 40,
        successDeck: "money",
        failDeck: "danger"
    }
},

{
    id: "risk-033",

    title: "ONE CARD, EVERYTHING",

    description: "Gamble your winnings at the club. Roll 3+: gain $120. Fail: lose $80.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 3,
        successAmount: 120,
        failAmount: -80
    }
},

{
    id: "risk-034",

    title: "VOUCHING FOR A STRANGER",

    description: "Risk your reputation vouching for a stranger's credit. Roll 4+: gain $50. Fail: pay $50.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 4,
        successAmount: 50,
        failAmount: -50
    }
},

{
    id: "risk-035",

    title: "QUIET SABOTAGE",

    description: "Attempt to sabotage a rival's standing subtly. Roll 4+: a rival loses $40. Fail: you pay $50.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForPlayerMoney",
        successRoll: 4,
        successAmount: -40,
        failAmount: -50
    }
},

{
    id: "risk-036",

    title: "THE SURE THING",

    description: "Trust a 'sure thing' investment from the elite. Pay $70. Roll 5+ to triple it. Fail: lose it all.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForInvestment",
        cost: 70,
        successRoll: 5,
        successAmount: 210,
        failAmount: 0
    }
},

{
    id: "risk-037",

    title: "SHADY DEALINGS",

    description: "Attempt to secure a loan from a shady financier. Roll 4+: gain $80. Fail: owe $50 the next time you land on a Money space.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForFutureDebt",
        successRoll: 4,
        successAmount: 80,
        futureDebt: 50
    }
},

{
    id: "risk-038",

    title: "RACE TO THE GATES",

    description: "Race a rival's carriage to the mansion gates. Roll 4+: move forward 4 spaces. Fail: move back 2 spaces.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForMovement",
        successRoll: 4,
        successSpaces: 4,
        failSpaces: -2
    }
},

{
    id: "risk-039",

    title: "A WORD WITH THE AUCTIONEER",

    description: "Bribe an auctioneer to favor your bid. Pay $50. Roll 4+: double it. Fail: lose the money and draw suspicion.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForInvestmentAndDanger",
        cost: 50,
        successRoll: 4,
        successAmount: 100,
        failDeck: "danger"
    }
},

{
    id: "risk-040",

    title: "UNTESTED VENTURE",

    description: "Invest in an untested steam venture. Pay $100. Roll 5+ to double it. Fail: lose it all.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForInvestment",
        cost: 100,
        successRoll: 5,
        successAmount: 200,
        failAmount: 0
    }
},

{
    id: "risk-041",

    title: "HIGH STAKES AT THE CLUB",

    description: "Challenge a socialite to a high-stakes card game. Roll 5+: gain $100. Fail: lose $70.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForMoney",
        successRoll: 5,
        successAmount: 100,
        failAmount: -70
    }
},

{
    id: "risk-042",

    title: "THE ART OF THE BID",

    description: "Bid aggressively at a private art auction. Pay $80. Roll 5+ to triple your investment. Fail: lose it all.",

    area: "aurumQuarter",

    type: "risk",

    effect: {
        action: "rollForInvestment",
        cost: 80,
        successRoll: 5,
        successAmount: 240,
        failAmount: 0
    }
},

];

export default riskCards;