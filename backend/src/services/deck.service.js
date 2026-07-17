/**
 * Creates three separate shuffled decks:
 * - Slums
 * - Exchange
 * - Aurum Quarter
 */

export function buildDecks(cards, copies = 1) {

    const areas = [
        "slums",
        "exchange",
        "aurumQuarter"
    ];

    const types = [
        "change",
        "danger",
        "money",
        "risk"
    ];

    const decks = {};

    for (const area of areas) {

        decks[area] = {};

        for (const type of types) {

            const filtered = cards.filter(card =>

                card.area === area &&
                card.type === type

            );

            decks[area][type] =
                shuffle(createDeck(filtered, copies));

        }

    }

    return decks;

}

/**
 * Creates one deck containing the specified number of copies
 * of each card.
 */
function createDeck(cards, copies) {

    const deck = [];

    for (const card of cards) {

        for (let i = 0; i < copies; i++) {

            deck.push(card.id);

        }

    }

    return deck;

}

/**
 * Fisher-Yates Shuffle
 */
function shuffle(deck) {

    for (let i = deck.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [deck[i], deck[j]] = [deck[j], deck[i]];

    }

    return deck;

}