/**
 * Handles game-related events.
 *
 * Examples:
 * - Dice rolls
 * - Card draws
 * - Player movement
 *
 * This service acts as the bridge between
 * hardware input and the frontend.
 */

import { buildDeck } from "./deck.service.js";

export function createGame(cards) {

    const deck = buildDeck(cards, 2);

    return {

        status: "waiting",

        minPlayers: 2,

        maxPlayers: 3,

        currentPlayers: 1,

        currentTurn: 0,

        deck,

        discardPile: []

    };

}