import db from "../src/config/firebase.js";

async function clearCards() {
    const snapshot = await db.collection("cards").get();

    const batch = db.batch();

    snapshot.forEach(doc => {
        batch.delete(doc.ref);
    });

    await batch.commit();

    console.log(`Deleted ${snapshot.size} cards.`);
}

clearCards().catch(console.error);