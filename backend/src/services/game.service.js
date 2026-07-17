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

import { buildDecks } from "./deck.service.js";

export function createGame(cards) {

    const decks = buildDecks(cards, 2);

    return {

        status: "waiting",

        minPlayers: 2,

        maxPlayers: 3,

        currentPlayers: 1,

        currentTurn: 0,

        decks,

        discardPile: {

            slums: [],
            exchange: [],
            aurumQuarter: []

        }

    };

}