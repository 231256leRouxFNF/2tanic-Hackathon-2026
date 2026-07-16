import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "../../hackathon-2026-db-firebase-adminsdk-fbsvc-5afe8fcdbe.json" with { type: "json" };

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

export default db;