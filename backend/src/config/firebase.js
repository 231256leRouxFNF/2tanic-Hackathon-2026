import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let credential;

if (process.env.FIREBASE_PRIVATE_KEY) {
  credential = cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });
} else {
  const serviceAccount = await import("../../hackathon-2026-db-firebase-adminsdk-fbsvc-5afe8fcdbe.json", {
    with: { type: "json" },
  });

  credential = cert(serviceAccount.default);
}

initializeApp({ credential });

export default getFirestore();