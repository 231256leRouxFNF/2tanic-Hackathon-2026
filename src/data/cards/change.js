
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

    //The Exchange
        {
        id: "change-011",

        title: "LUCKY ME",

        description: "A ledger clerk misfiles your favor. Advance 2 spaces.",

        type: "change",
        
        effect: {
            action: "moveForward",
            amount: 2
        }
    },

            {
        id: "change-012",

        title: "EAGLE EYES",

        description: "You spot a good deal before anyone else. Draw an extra money card.",

        type: "change",
        
        effect: {
            action: "drawCard",
            amount: 1
        }
    },

        {
        id: "change-013",

        title: "CALLING INA A FAVOR",

        description: "A broker awes you a favor. Skip your next Risk card.",

        type: "change",
        
        effect: {
            action: "skipNextRisk",
            amount: 1
        }
    },

        {
        id: "change-014",

        title: "MONEY MY DEAR FRIEND",

        description: "An investment tip pays off unexpectedly. Gain $50.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 50
        }
    },

        {
        id: "change-015",

        title: "HUH NATURALLY",

        description: "You're mistaken for a junior partner at a fine restaurant. Gain $20.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 20
        }
    },

        {
        id: "change-016",

        title: "MOVING ON UP",

        description: "The Exchange floor buzzes with good news. Move forward 3 spaces.",

        type: "change",
        
        effect: {
            action: "moveForward",
            amount: 3
        }
    },

    //The Aurum Quater

        {
        id: "change-020",

        title: "LUCKY TICKET",

        description: "You're invited to an exclusive soirée by mistake. Advance 3 spaces.",

        type: "change",
        
        effect: {
            action: "moveForward",
            amount: 3
        }
    },

        {
        id: "change-021",

        title: "THE ANONYMOUS BENEFACTOR",

        description: "An anonymous gift arrives at your door. Gain $80.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 80
        }
    },

        {
        id: "change-022",

        title: "WHEELS COME OFF",

        description: "A rival's scandal elevates your stading instead. Move forward 3 spaces.",

        type: "change",
        
        effect: {
            action: "moveForward",
            amount: 3
        }
    },

        {
        id: "change-023",

        title: "AN OLD FRIEND REMEMBERS",

        description: "An old Family friend leaves you a small fortune. Gain $100.",

        type: "change",
        
        effect: {
            action: "gainMoney",
            amount: 100
        }
    },

        {
        id: "change-024",

        title: "GOOD PRESS",

        description: "A society columnist writes favorrably about you. Skip your next Danger card.",

        type: "change",
        
        effect: {
            action: "skipNextDanger",
            amount: 1
        }
    },

        {
        id: "change-025",

        title: "CASE OF MISTAKEN HONOR",

        description: "You're mistaken for the guest of honor. Moves forward 2 spaces.",

        type: "change",
        
        effect: {
            action: "moveForward",
            amount: 2
        }
    },
];

export default changeCards;