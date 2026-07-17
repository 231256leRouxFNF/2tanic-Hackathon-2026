import db from "../config/firebase.js";
import { buildDeck } from "../services/deck.service.js";

export async function createGame(req, res) {
    try {

        // Fetch every card from Firestore
        const snapshot = await db.collection("cards").get();

        const cards = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // Build a shuffled deck (2 copies of each card)
        const deck = buildDeck(cards, 2);

        // Game object
        const game = {
            status: "waiting",
            deck,
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

        const { id } = req.params;

        const gameRef = db.collection("games").doc(id);

        const gameDoc = await gameRef.get();

        if (!gameDoc.exists) {

            return res.status(404).json({
                success: false,
                message: "Game not found."
            });

        }

        const game = gameDoc.data();

        if (game.deck.length === 0) {

            return res.status(400).json({
                success: false,
                message: "Deck is empty."
            });

        }

        // Remove the first card
        const cardId = game.deck.shift();

        // Add it to the discard pile
        game.discardPile.push(cardId);

        // Save updated deck
        await gameRef.update({
            deck: game.deck,
            discardPile: game.discardPile
        });

        // Fetch full card
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
