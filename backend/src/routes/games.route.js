import express from "express";
import { createGame, drawCard } from "../controllers/games.controller.js";

const router = express.Router();

router.post("/", createGame);
router.post("/:id/draw", drawCard);

export default router;