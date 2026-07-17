
/**
 * Danger deck.
 *
 * Contains ONLY card data.
 *
 * No React components or game logic should be placed here.
 */

const riskCards = [

    //The Slums
   // The Slums

{
    id: "danger-001",

    title: "WELL THAT WAS REALLY SCARY",

    description: "A boiler hisses dangerously close. Move back 1 space.",

    area: "slums",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 1
    }
},

{
    id: "danger-002",

    title: "WAS JUST A SMALL BREAK",

    description: "The foreman catches you slacking. Move back 1 space.",

    area: "slums",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 1
    }
},

{
    id: "danger-003",

    title: "THIEF",

    description: "Pickpocketed near the gates. Lose $10.",

    area: "slums",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 10
    }
},

{
    id: "danger-004",

    title: "GROSS WATER",

    description: "A steam leak floods your walkway. Only move 1 space forward with your next dice roll.",

    area: "slums",

    type: "danger",

    effect: {
        action: "limitNextRoll",
        amount: 1
    }
},

{
    id: "danger-005",

    title: "BUT THAT WASN'T ME",

    description: "Mistaken for a troublemaker. Move back 2 spaces.",

    area: "slums",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 2
    }
},

{
    id: "danger-006",

    title: "THAT WAS CLOSE",

    description: "A stack of crates nearly collapses on you. Move back 1 space to recover.",

    area: "slums",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 1
    }
},

{
    id: "danger-007",

    title: "THAT BASTARD",

    description: "A rival worker sabotages your tools. Skip your next Chance draw.",

    area: "slums",

    type: "danger",

    effect: {
        action: "skipCard",
        deck: "change",
        amount: 1
    }
},

{
    id: "danger-008",

    title: "STUCK IN THE YUCK",

    description: "Coal smoke chokes the walkway, you're delayed. Lose a turn.",

    area: "slums",

    type: "danger",

    effect: {
        action: "loseTurn",
        amount: 1
    }
},

{
    id: "danger-009",

    title: "HOW WAS THAT MY FAULT?",

    description: "You're blamed for a jammed gear. Move back 1 space.",

    area: "slums",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 1
    }
},

{
    id: "danger-010",

    title: "GUESS I'M WALKING HERE NOW",

    description: "You're shoved aside in a crowded corridor. Move back 1 space.",

    area: "slums",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 1
    }
},

{
    id: "danger-011",

    title: "BLAME THE PIPE",

    description: "You trip over loose piping. Move back 2 spaces.",

    area: "slums",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 2
    }
},

{
    id: "danger-012",

    title: "BLAME THE HEAT",

    description: "An overheated machine forces an evacuation. Move back 3 spaces.",

    area: "slums",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 3
    }
},

{
    id: "danger-013",

    title: "INSPECTION GONE WRONG",

    description: "A supervisor confiscates your tools 'for inspection.' Lose $10.",

    area: "slums",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 10
    }
},

{
    id: "danger-014",

    title: "MR. RUST",

    description: "Caught in a sudden downpour, your gear rusts. Pay $10 for repairs.",

    area: "slums",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 10
    }
},

    //The Exchange

// The Exchange

{
    id: "danger-015",

    title: "WHISPERS ON THE FLOOR",

    description: "A rival spreads a damaging rumor about you. Lose $30.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 30
    }
},

{
    id: "danger-016",

    title: "PRYING EYES",

    description: "You're caught reviewing confidential ledgers. Move back 2 spaces.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 2
    }
},

{
    id: "danger-017",

    title: "OUTPLAYED",

    description: "You're outmaneuvered in a public negotiation. Move back 1 space.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 1
    }
},

{
    id: "danger-018",

    title: "THE BOTTOM DROPS OUT",

    description: "The market takes a sudden downturn. Lose $20.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 20
    }
},

{
    id: "danger-019",

    title: "THE AUDITER CALLS",

    description: "Your office is audited unexpectedly. Pay $30.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 30
    }
},

{
    id: "danger-020",

    title: "FLOOR SHOW FIASCO",

    description: "You're publicly embarrassed at an exchange floor event. Move back 2 spaces.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 2
    }
},

{
    id: "danger-021",

    title: "CALLED IN",

    description: "A creditor demands early repayment. Pay $40.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 40
    }
},

{
    id: "danger-022",

    title: "EAR TO THE DOOR",

    description: "Caught eavesdropping on a private deal. Pay a $20 fine.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 20
    }
},

{
    id: "danger-023",

    title: "UNDERCUT",

    description: "A rival broker undercuts your deal at the last second. Lose $30.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 30
    }
},

{
    id: "danger-024",

    title: "LIGHT FINGERS",

    description: "You're pickpocketed in a crowded meeting hall. Lose $20.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 20
    }
},

{
    id: "danger-025",

    title: "DEAL GONE COLD",

    description: "A contract falls through at the last moment. Lose $30.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 30
    }
},

{
    id: "danger-026",

    title: "HUSH MONEY",

    description: "Blackmail threat over a minor indiscretion. Pay $40 to make it go away.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 40
    }
},

{
    id: "danger-027",

    title: "TIED UP IN LITIGATION",

    description: "A rival's lawsuit ties up your funds. Lose 1/4 of your current money.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "losePercentageMoney",
        percentage: 25
    }
},

{
    id: "danger-028",

    title: "GUILTY BY ASSOCIATION",

    description: "Your name is wrongly linked to a scandal. Skip your next Money space bonus.",

    area: "exchange",

    type: "danger",

    effect: {
        action: "skipNextBonus",
        target: "money"
    }
},

    //The Aurum Quater

// The Aurum Quarter

{
    id: "danger-029",

    title: "UNDER INVESTIGATION",

    description: "Your name is linked to a fraud investigation. Skip your next Money card.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "skipCard",
        deck: "money",
        amount: 1
    }
},

{
    id: "danger-030",

    title: "OUTBID AT THE GAVEL'S FALL",

    description: "A rival outbids you at the last second. Lose $60.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 60
    }
},

{
    id: "danger-031",

    title: "CAUGHT IN THE ACT",

    description: "Caught in a compromising position at a gala. Pay $70 to keep it quiet.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 70
    }
},

{
    id: "danger-032",

    title: "THE DEBT COMES DUE",

    description: "A creditor demands payment of an old loan. Pay $80.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 80
    }
},

{
    id: "danger-033",

    title: "THE TALK OF THE QUARTER",

    description: "You're the subject of vicious gossip. Move back 2 spaces.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 2
    }
},

{
    id: "danger-034",

    title: "LOST IN TRANSIT",

    description: "A courier loses the deed to a property you were courting. Move back 1 space and lose $40.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "moveBackAndLoseMoney",
        spaces: 1,
        amount: 40
    }
},

{
    id: "danger-035",

    title: "SUSPICIOUS OFFICIALS",

    description: "Your estate is audited by suspicious officials. Pay $60.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 60
    }
},

{
    id: "danger-036",

    title: "OVERNIGHT COLLAPSE",

    description: "The market crashes overnight. Lose $70.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 70
    }
},

{
    id: "danger-037",

    title: "AUCTION HUMILIATION",

    description: "You're outbid and humiliated at a public auction. Move back 3 spaces.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 3
    }
},

{
    id: "danger-038",

    title: "THE FORGED INVITATION",

    description: "A forged invitation is discovered, scandal ensues. Pay $50.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 50
    }
},

{
    id: "danger-039",

    title: "ESCORTED OUT",

    description: "Security removes you from a private auction. Skip your next Money card.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "skipCard",
        deck: "money",
        amount: 1
    }
},

{
    id: "danger-040",

    title: "SPECTACULAR COLLAPSE",

    description: "A bad investment collapses spectacularly. Lose $80.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 80
    }
},

{
    id: "danger-041",

    title: "THE PUBLIC SNUB",

    description: "You're publicly snubbed at a high-society event. Move back 2 spaces.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "moveBackward",
        amount: 2
    }
},

{
    id: "danger-042",

    title: "AN OLD SECRET SURFACES",

    description: "A rival exposes an old secret. Lose $60.",

    area: "aurumQuarter",

    type: "danger",

    effect: {
        action: "loseMoney",
        amount: 60
    }
},

];

export default riskCards;