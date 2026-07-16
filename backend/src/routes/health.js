/**
 * Simple health endpoint.
 *
 * GET /health
 *
 * Returns:
 * {
 *   status: "OK"
 * }
 */

import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
    res.json({ status: "OK" });
});

export default router;