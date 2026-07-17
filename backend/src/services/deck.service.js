/**
 * Creates a shuffled deck with a configurable number of copies
 * of each card.
 */

export function buildDecks(cards, copies = 1) {

    return {

        slums: shuffle(createDeck(
            cards.filter(card => card.area === "slums"),
            copies
        )),

        exchange: shuffle(createDeck(
            cards.filter(card => card.area === "exchange"),
            copies
        )),

        aurumQuarter: shuffle(createDeck(
            cards.filter(card => card.area === "aurumQuarter"),
            copies
        ))

    };

}

function createDeck(cards, copies) {

    const deck = [];

    for (const card of cards) {

        for (let i = 0; i < copies; i++) {

            deck.push(card.id);

        }

    }

    return deck;

}