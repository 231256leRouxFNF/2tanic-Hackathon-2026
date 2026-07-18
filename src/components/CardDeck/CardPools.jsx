/**
 * ============================================================================
 * CARD POOLS
 * ----------------------------------------------------------------------------
 * Stores all available cards grouped by their deck type.
 *
 * Each card contains:
 * - title: Short name displayed on the card.
 * - description: Effect or event shown to the player.
 *
 * Note:
 * - Card styling (icon, colours, borders, etc.) is determined by the card type,
 *   not by the individual card.
 * - Draw logic and shuffling are handled separately in utility functions.
 * ============================================================================
 */

// please please fill this i can't i-

export const CARD_POOLS = {
    chance: [
      {
            id: "chance-001",

            title: "A BLIND EYE",

            description: "A foreman looks the other way. Advance 1 space.",

            type: "chance",

            effect: {
                action: "gainMoney",
                amount: 30
            }
        },
        {
            title: "Scurrying Around",
            description: "A rat leads you through a shortcut in the walls. Move forward 2 spaces."
        },
        {
            title: "Windfall",
            description: "You find a pouch of lost coins on the street. Gain $10."
        }
    ],

    risk: [
        {
            title: "An Investment",
            description: "Invest in a speculative nail venture. Pay $40. Roll 4+ to double it. Fail and lose it all."
        },
        {
            title: "Double or Nothing",
            description: "Bet on a street-side shell game. Pay $20 for a 50/50 chance to win $50."
        },
        {
            title: "The Shortcut",
            description: "Take a dark alleyway. Roll a die: 1–2 you get mugged, 3–6 you skip a turn."
        }
    ],

    money: [
        {
            title: "Quick Cash",
            description: "A dividend from a modest investment comes through. Gain $50."
        },
        {
            title: "Inheritance",
            description: "A distant relative leaves you a small sum. Gain $100."
        },
        {
            title: "Tax Refund",
            description: "The local magistrate overcharged you last season. Receive $30."
        }
    ],

    danger: [
        {
            title: "Whispers on the Floor",
            description: "A rival spreads a damaging rumor about you. Lose $30."
        },
        {
            title: "Caught Red-Handed",
            description: "Guards catch you out past curfew. Pay a $50 fine or lose a turn."
        },
        {
            title: "Sewer Plague",
            description: "You step in something nasty. Spend $20 on medicine."
        }
    ]
};