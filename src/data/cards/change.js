
/**
 * Chance deck.
 *
 * Contains ONLY card data.
 *
 * No React components or game logic should be placed here.
 */

/**
 * ============================================================================
 * Card: Chance
 * ----------------------------------------------------------------------------
 * Represents a single Chance card.
 *
 * Only stores data.
 * Does NOT contain any React code or game logic.
 * ============================================================================
 */

const changeCards = [

    //The Slums
    {
        id: "change-001",

        title: "A BLIND EYE",

        description: "A foreman looks the other way. Advance 1 space.",

        type: "change",

        effect: {
            action: "moveForward",
            amount: 1
        }
    },

        {
        id: "change-002",

        title: "FINDERS KEEPERS",

        description: "You find a dropped wrench and sell it. Collect $10.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 10
        }
    },
    
        {
        id: "change-003",

        title: "A DAY OFF",

        description: "A fellow worker covers your shift. Skip your next Danger effect.",

        type: "change",
        
        effect: {
            action: "skipNextDanger",
            amount: 1
        }
    },
    
        {
        id: "change-004",

        title: "A BLOW IN THE RIGHT DIRECTION",

        description: "Steam vent blows your cap off. Chase it forward 2 spaces.",

        type: "change",
        
        effect: {
            action: "moveForward",
            amount: 2
        }
    },

        {
        id: "change-005",

        title: "SHUT THAT PIPE HOLE",

        description: "You patch leaking pipe just in time. Gain $20 bonus wage.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 20
        }
    },    

            {
        id: "change-006",

        title: "SCURRYING AROUND",

        description: "A rat leads you through a shortcut in the walls. Move forward 2 spaces.",

        type: "change",
        
        effect: {
            action: "moveForward",
            amount: 2
        }
    },

            {
        id: "change-007",

        title: "SAVED BY THE BELL",

        description: "The factory bell rings early. Skip your next Risk.",

        type: "change",
        
        effect: {
            action: "skipNextRisk",
            amount: 1
        }
    },

            {
        id: "change-008",

        title: "TRADERS LUCK",

        description: "You trade scrap for a lucky bolt. Roll again.",

        type: "change",
        
        effect: {
            action: "RollAgain",
            amount: 1
        }
    },

            {
        id: "change-009",

        title: "C'MON JUST ONE DRINK",

        description: "An old friend spots you and buys you a drink. Gain $10.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 10
        }
    },

            {
        id: "change-010",

        title: "OHH LUCKY PENNY",

        description: "You find a coin wedged in the floorboards. Gain $20.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 20
        }
    },

            {
        id: "change-010",

        title: "PRETTY FACE",

        description: "A supervisor mistakes you for someone else and lets you through a locked door. Move forward 1 space.",

        type: "change",
        
        effect: {
            action: "moveForward",
            amount: 1
        }
    },

            {
        id: "change-011",

        title: "EARNING MY KEEP",

        description: "You help fix a jammed gear, earn the crew's respect. Skip your next Danger draw.",

        type: "change",
        
        effect: {
            action: "skipNextDanger",
            amount: 1
        }
    },

            {
        id: "change-012",

        title: "KEEP ON ROLLING",

        description: "A cart of coal rolls your way, hop on. Move forward 3 spaces.",

        type: "change",
        
        effect: {
            action: "moveForward",
            amount: 3
        }
    },

            {
        id: "change-013",

        title: "SHORTCUT",

        description: "Someone left the gate unlocked. Move forward 1 space.",

        type: "change",
        
        effect: {
            action: "moveForward",
            amount: 1
        }
    },

    //The Exchange
    
// The Exchange

{
    id: "change-014",

    title: "LUCKY ME",

    description: "A ledger clerk misfiles paperwork in your favor. Advance 2 spaces.",

    area: "exchange",

    type: "change",

    effect: {
        action: "moveForward",
        amount: 2
    }
},

{
    id: "change-015",

    title: "EAGLE EYES",

    description: "You spot a good deal before anyone else. Draw an extra Money card.",

    area: "exchange",

    type: "change",

    effect: {
        action: "drawCard",
        deck: "money",
        amount: 1
    }
},

{
    id: "change-016",

    title: "CALLING IN A FAVOR",

    description: "A broker owes you a favor. Skip your next Risk card.",

    area: "exchange",

    type: "change",

    effect: {
        action: "skipCard",
        deck: "risk",
        amount: 1
    }
},

{
    id: "change-017",

    title: "MONEY MY DEAR FRIEND",

    description: "An investment tip pays off unexpectedly. Gain $50.",

    area: "exchange",

    type: "change",

    effect: {
        action: "gainMoney",
        amount: 50
    }
},

{
    id: "change-018",

    title: "HUH, NATURALLY",

    description: "You're mistaken for a junior partner at a fine restaurant. Gain $20.",

    area: "exchange",

    type: "change",

    effect: {
        action: "gainMoney",
        amount: 20
    }
},

{
    id: "change-019",

    title: "MOVING ON UP",

    description: "The Exchange floor buzzes with good news. Move forward 3 spaces.",

    area: "exchange",

    type: "change",

    effect: {
        action: "moveForward",
        amount: 3
    }
},

{
    id: "change-020",

    title: "I KNOW SOME PEOPLE",

    description: "An old contact resurfaces with a helpful connection. Move forward 2 spaces.",

    area: "exchange",

    type: "change",

    effect: {
        action: "moveForward",
        amount: 2
    }
},

{
    id: "change-021",

    title: "CONNECTIONS",

    description: "You're handed a business card by mistake. Draw again.",

    area: "exchange",

    type: "change",

    effect: {
        action: "drawAgain"
    }
},

{
    id: "change-022",

    title: "MONEY FOR ME",

    description: "A clerk's error works in your favor on a filing fee. Gain $30.",

    area: "exchange",

    type: "change",

    effect: {
        action: "gainMoney",
        amount: 30
    }
},

{
    id: "change-023",

    title: "ONCE UPON A TIME",

    description: "A well-dressed stranger buys you a drink to hear your story. Gain $20.",

    area: "exchange",

    type: "change",

    effect: {
        action: "gainMoney",
        amount: 20
    }
},

{
    id: "change-024",

    title: "ALAHAMORA",

    description: "You find a forgotten ledger with a name that opens doors. Move forward 2 spaces.",

    area: "exchange",

    type: "change",

    effect: {
        action: "moveForward",
        amount: 2
    }
},

{
    id: "change-025",

    title: "DING GOES THE CLOCK",

    description: "The Exchange bell rings favorably today. Roll again immediately.",

    area: "exchange",

    type: "change",

    effect: {
        action: "rollAgain"
    }
},

{
    id: "change-026",

    title: "TELL TALES",

    description: "A rival's scheme backfires publicly, elevating your reputation instead. Draw a Money card.",

    area: "exchange",

    type: "change",

    effect: {
        action: "drawCard",
        deck: "money",
        amount: 1
    }
},

{
    id: "change-027",

    title: "SHORTCUTS FOR THE WIN",

    description: "A courier shortcut gets you across the district fast. Move forward 3 spaces.",

    area: "exchange",

    type: "change",

    effect: {
        action: "moveForward",
        amount: 3
    }
},

    //The Aurum Quater

    // The Aurum Quarter

{
    id: "change-028",

    title: "LUCKY TICKET",

    description: "You're invited to an exclusive soirée by mistake. Advance 3 spaces.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "moveForward",
        amount: 3
    }
},

{
    id: "change-029",

    title: "THE ANONYMOUS BENEFACTOR",

    description: "An anonymous gift arrives at your door. Gain $80.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "gainMoney",
        amount: 80
    }
},

{
    id: "change-030",

    title: "WHEELS COME OFF",

    description: "A rival's scandal elevates your standing instead. Move forward 3 spaces.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "moveForward",
        amount: 3
    }
},

{
    id: "change-031",

    title: "AN OLD FRIEND REMEMBERS",

    description: "An old family friend leaves you a small fortune. Gain $100.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "gainMoney",
        amount: 100
    }
},

{
    id: "change-032",

    title: "GOOD PRESS",

    description: "A society columnist writes favorably about you. Skip your next Danger card.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "skipCard",
        deck: "danger",
        amount: 1
    }
},

{
    id: "change-033",

    title: "CASE OF MISTAKEN HONOR",

    description: "You're mistaken for the guest of honor. Move forward 2 spaces.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "moveForward",
        amount: 2
    }
},

{
    id: "change-034",

    title: "A WORD FROM THE BUTLER",

    description: "A butler slips you insider information. See the mansion's asking price before anyone else.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "peekProperty"
    }
},

{
    id: "change-035",

    title: "ON THE LIST",

    description: "Your name is added to an exclusive guest list. Move to your next Money card.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "moveToNextCard",
        target: "money"
    }
},

{
    id: "change-036",

    title: "TAKEN UNDER WING",

    description: "A wealthy patron takes a liking to you. Gain $60.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "gainMoney",
        amount: 60
    }
},

{
    id: "change-037",

    title: "FRIEND AT THE GAVEL",

    description: "You win the favor of the auction house director. Skip your next Risk card.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "skipCard",
        deck: "risk",
        amount: 1
    }
},

{
    id: "change-038",

    title: "THE COLLECTOR'S FAVOR",

    description: "A collector gifts you a rare trinket, easily sold. Gain $70.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "gainMoney",
        amount: 70
    }
},

{
    id: "change-039",

    title: "HEAD OF THE TABLE",

    description: "You're seated at the head table by accident, and no one corrects it. Move forward 2 spaces.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "moveForward",
        amount: 2
    }
},

{
    id: "change-040",

    title: "WRONG NAME ON THE INVITATION",

    description: "You're invited to an exclusive soirée by mistake. Advance 3 spaces.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "moveForward",
        amount: 3
    }
},

{
    id: "change-041",

    title: "WRONG TICKET, RIGHT PRIZE",

    description: "You're handed a winning raffle ticket by mistake. Gain $50.",

    area: "aurumQuarter",

    type: "change",

    effect: {
        action: "gainMoney",
        amount: 50
    }
},
  
];

export default changeCards;