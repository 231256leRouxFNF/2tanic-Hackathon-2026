
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

const chanceCards = [

    //slums
    {
        id: "chance-001",

        title: "A BLIND EYE",

        description: "A foreman looks the other way. Advance 1 space.",

        area:"slums",

        type: "chance",

        effect: {
            action: "moveForward",
            amount: 1
        }
    },

        {
        id: "chance-002",

        title: "FINDERS KEEPERS",

        description: "You find a dropped wrench and sell it. Collect $10.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "gainMoney",
            amount: 10
        }
    },
    
        {
        id: "chance-003",

        title: "A DAY OFF",

        description: "A fellow worker covers your shift. Skip your next Danger effect.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "skipNextDanger",
            amount: 1
        }
    },
    
        {
        id: "chance-004",

        title: "A BLOW IN THE RIGHT DIRECTION",

        description: "Steam vent blows your cap off. Chase it forward 2 spaces.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "moveForward",
            amount: 2
        }
    },

        {
        id: "chance-005",

        title: "SHUT THAT PIPE HOLE",

        description: "You patch leaking pipe just in time. Gain $20 bonus wage.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "gainMoney",
            amount: 20
        }
    },    

            {
        id: "chance-006",

        title: "SCURRYING AROUND",

        description: "A rat leads you through a shortcut in the walls. Move forward 2 spaces.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "moveForward",
            amount: 2
        }
    },

            {
        id: "chance-007",

        title: "SAVED BY THE BELL",

        description: "The factory bell rings early. Skip your next Risk.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "skipNextRisk",
            amount: 1
        }
    },

            {
        id: "chance-008",

        title: "TRADERS LUCK",

        description: "You trade scrap for a lucky bolt. Roll again.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "RollAgain",
            amount: 1
        }
    },

            {
        id: "chance-009",

        title: "C'MON JUST ONE DRINK",

        description: "An old friend spots you and buys you a drink. Gain $10.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "gainMoney",
            amount: 10
        }
    },

            {
        id: "chance-010",

        title: "OHH LUCKY PENNY",

        description: "You find a coin wedged in the floorboards. Gain $20.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "gainMoney",
            amount: 20
        }
    },

            {
        id: "chance-010",

        title: "PRETTY FACE",

        description: "A supervisor mistakes you for someone else and lets you through a locked door. Move forward 1 space.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "moveForward",
            amount: 1
        }
    },

            {
        id: "chance-011",

        title: "EARNING MY KEEP",

        description: "You help fix a jammed gear, earn the crew's respect. Skip your next Danger draw.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "skipNextDanger",
            amount: 1
        }
    },

            {
        id: "chance-012",

        title: "KEEP ON ROLLING",

        description: "A cart of coal rolls your way, hop on. Move forward 3 spaces.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "moveForward",
            amount: 3
        }
    },

            {
        id: "chance-013",

        title: "SHORTCUT",

        description: "Someone left the gate unlocked. Move forward 1 space.",

        area:"slums",

        type: "chance",
        
        effect: {
            action: "moveForward",
            amount: 1
        }
    },

    //The Exchange
    
// The Exchange

{
    id: "chance-014",

    title: "LUCKY ME",

    description: "A ledger clerk misfiles paperwork in your favor. Advance 2 spaces.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "moveForward",
        amount: 2
    }
},

{
    id: "chance-015",

    title: "EAGLE EYES",

    description: "You spot a good deal before anyone else. Draw an extra Money card.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "drawCard",
        deck: "money",
        amount: 1
    }
},

{
    id: "chance-016",

    title: "CALLING IN A FAVOR",

    description: "A broker owes you a favor. Skip your next Risk card.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "skipCard",
        deck: "risk",
        amount: 1
    }
},

{
    id: "chance-017",

    title: "MONEY MY DEAR FRIEND",

    description: "An investment tip pays off unexpectedly. Gain $50.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "gainMoney",
        amount: 50
    }
},

{
    id: "chance-018",

    title: "HUH, NATURALLY",

    description: "You're mistaken for a junior partner at a fine restaurant. Gain $20.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "gainMoney",
        amount: 20
    }
},

{
    id: "chance-019",

    title: "MOVING ON UP",

    description: "The Exchange floor buzzes with good news. Move forward 3 spaces.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "moveForward",
        amount: 3
    }
},

{
    id: "chance-020",

    title: "I KNOW SOME PEOPLE",

    description: "An old contact resurfaces with a helpful connection. Move forward 2 spaces.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "moveForward",
        amount: 2
    }
},

{
    id: "chance-021",

    title: "CONNECTIONS",

    description: "You're handed a business card by mistake. Draw again.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "drawAgain"
    }
},

{
    id: "chance-022",

    title: "MONEY FOR ME",

    description: "A clerk's error works in your favor on a filing fee. Gain $30.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "gainMoney",
        amount: 30
    }
},

{
    id: "chance-023",

    title: "ONCE UPON A TIME",

    description: "A well-dressed stranger buys you a drink to hear your story. Gain $20.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "gainMoney",
        amount: 20
    }
},

{
    id: "chance-024",

    title: "ALAHAMORA",

    description: "You find a forgotten ledger with a name that opens doors. Move forward 2 spaces.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "moveForward",
        amount: 2
    }
},

{
    id: "chance-025",

    title: "DING GOES THE CLOCK",

    description: "The Exchange bell rings favorably today. Roll again immediately.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "rollAgain"
    }
},

{
    id: "chance-026",

    title: "TELL TALES",

    description: "A rival's scheme backfires publicly, elevating your reputation instead. Draw a Money card.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "drawCard",
        deck: "money",
        amount: 1
    }
},

{
    id: "chance-027",

    title: "SHORTCUTS FOR THE WIN",

    description: "A courier shortcut gets you across the district fast. Move forward 3 spaces.",

    area: "exchange",

    type: "chance",

    effect: {
        action: "moveForward",
        amount: 3
    }
},

    //The Aurum Quater

    // The Aurum Quarter

{
    id: "chance-028",

    title: "LUCKY TICKET",

    description: "You're invited to an exclusive soirée by mistake. Advance 3 spaces.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "moveForward",
        amount: 3
    }
},

{
    id: "chance-029",

    title: "THE ANONYMOUS BENEFACTOR",

    description: "An anonymous gift arrives at your door. Gain $80.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "gainMoney",
        amount: 80
    }
},

{
    id: "chance-030",

    title: "WHEELS COME OFF",

    description: "A rival's scandal elevates your standing instead. Move forward 3 spaces.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "moveForward",
        amount: 3
    }
},

{
    id: "chance-031",

    title: "AN OLD FRIEND REMEMBERS",

    description: "An old family friend leaves you a small fortune. Gain $100.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "gainMoney",
        amount: 100
    }
},

{
    id: "chance-032",

    title: "GOOD PRESS",

    description: "A society columnist writes favorably about you. Skip your next Danger card.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "skipCard",
        deck: "danger",
        amount: 1
    }
},

{
    id: "chance-033",

    title: "CASE OF MISTAKEN HONOR",

    description: "You're mistaken for the guest of honor. Move forward 2 spaces.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "moveForward",
        amount: 2
    }
},

{
    id: "chance-034",

    title: "A WORD FROM THE BUTLER",

    description: "A butler slips you insider information. See the mansion's asking price before anyone else.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "peekProperty"
    }
},

{
    id: "chance-035",

    title: "ON THE LIST",

    description: "Your name is added to an exclusive guest list. Move to your next Money card.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "moveToNextCard",
        target: "money"
    }
},

{
    id: "chance-036",

    title: "TAKEN UNDER WING",

    description: "A wealthy patron takes a liking to you. Gain $60.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "gainMoney",
        amount: 60
    }
},

{
    id: "chance-037",

    title: "FRIEND AT THE GAVEL",

    description: "You win the favor of the auction house director. Skip your next Risk card.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "skipCard",
        deck: "risk",
        amount: 1
    }
},

{
    id: "chance-038",

    title: "THE COLLECTOR'S FAVOR",

    description: "A collector gifts you a rare trinket, easily sold. Gain $70.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "gainMoney",
        amount: 70
    }
},

{
    id: "chance-039",

    title: "HEAD OF THE TABLE",

    description: "You're seated at the head table by accident, and no one corrects it. Move forward 2 spaces.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "moveForward",
        amount: 2
    }
},

{
    id: "chance-040",

    title: "WRONG NAME ON THE INVITATION",

    description: "You're invited to an exclusive soirée by mistake. Advance 3 spaces.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "moveForward",
        amount: 3
    }
},

{
    id: "chance-041",

    title: "WRONG TICKET, RIGHT PRIZE",

    description: "You're handed a winning raffle ticket by mistake. Gain $50.",

    area: "aurumQuarter",

    type: "chance",

    effect: {
        action: "gainMoney",
        amount: 50
    }
},
  
];

export default chanceCards;