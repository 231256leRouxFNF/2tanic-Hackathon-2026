import db from "../config/firebase.js";
import { buildDeck } from "../services/deck.service.js";

export async function createGame(req, res) {

    try {

        const snapshot =
            await db.collection("cards").get();

        const cards =
            snapshot.docs.map(doc => doc.data());

        const deck =
            buildDeck(cards, 2);

        const game = {

            status: "waiting",

            minPlayers: 2,

            maxPlayers: 3,

            currentPlayers: 1,

            currentTurn: 0,

            deck,

            discardPile: []

        };

        const ref =
            await db.collection("games").add(game);

        res.json({

            gameId: ref.id,

            ...game

        });

    }

    catch(err){

        console.log(err);

        res.status(500).json(err);

    }

}