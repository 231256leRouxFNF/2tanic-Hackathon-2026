
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
            action: "gainMoney",
            amount: 30
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
    }

    //The Exchange

    //The Aurum Quater

];

export default changeCards;