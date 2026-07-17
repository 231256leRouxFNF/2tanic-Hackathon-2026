import express from "express";

import { createGame }
from "../controllers/games.controller.js";

const router = express.Router();

router.post("/", createGame);

export default router;