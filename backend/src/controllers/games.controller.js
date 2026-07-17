import db from "../config/firebase.js";
import { buildDecks } from "../services/deck.service.js";

export async function createGame(req, res) {
    try {

        // Fetch every card from Firestore
        const snapshot = await db.collection("cards").get();

        const cards = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // Build a shuffled deck (2 copies of each card)
        const decks = buildDecks(cards, 1);

        const game = {

            status: "waiting",

            decks,

            discardPile: [],

            createdAt: new Date()

        };

        // Save game
        const gameRef = await db.collection("games").add(game);

        res.status(201).json({
            success: true,
            gameId: gameRef.id
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}


    export async function drawCard(req, res) {

    try {

        const { id, area, type } = req.params;

        const gameRef = db.collection("games").doc(id);

        const gameDoc = await gameRef.get();

        if (!gameDoc.exists) {

            return res.status(404).json({
                success: false,
                message: "Game not found."
            });

        }

        const game = gameDoc.data();

        // Get the requested deck
        const deck = game.decks?.[area]?.[type];

        if (!deck) {

            return res.status(400).json({
                success: false,
                message: "Invalid area or card type."
            });

        }

        if (deck.length === 0) {

            return res.status(400).json({
                success: false,
                message: "Deck is empty."
            });

        }

        // Draw the first card
        const cardId = deck.shift();

        // Add to discard pile
        game.discardPile.push(cardId);

        // Save the updated deck
        game.decks[area][type] = deck;

        await gameRef.update({

            decks: game.decks,

            discardPile: game.discardPile

        });

        // Fetch the card
        const cardDoc =
            await db.collection("cards").doc(cardId).get();

        res.json({

            success: true,

            card: {

                id: cardDoc.id,

                ...cardDoc.data()

            }

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

}