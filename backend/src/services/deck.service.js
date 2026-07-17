/**
 * Creates a shuffled deck with a configurable number of copies
 * of each card.
 */

export function buildDeck(cards, copies = 2) {
    const deck = [];

    for (const card of cards) {
        for (let i = 0; i < copies; i++) {
            deck.push(card.id);
        }
    }

    return shuffle(deck);
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
}