import db from "../src/config/firebase.js";

// import your cards
import chanceCards from "../../src/data/cards/change.js";
import riskCards from "../../src/data/cards/risk.js";
import moneyCards from "../../src/data/cards/money.js";
import dangerCards from "../../src/data/cards/danger.js";

const cards = [
    ...chanceCards,
    ...riskCards,
    ...moneyCards,
    ...dangerCards
];

async function seedDatabase() {

    console.log("Uploading cards...");

 for (const card of cards) {
    
    await db.collection("cards").doc(card.id).set(card);

        console.log(`Uploaded ${card.id}`);

    }

    console.log("Finished!");

}

seedDatabase();