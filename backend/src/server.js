/**
 * ============================================
 * Backend Entry Point
 * --------------------------------------------
 * Responsibilities:
 * - Start the Express server
 * - Initialize Socket.IO
 * - Register routes
 * - Load environment variables
 *
 * This file should NOT contain business logic.
 * ============================================
 */


import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";

import gamesRoutes from "./routes/games.route.js";

dotenv.config();

const app = express();
app.use(gamesRoutes);

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

app.get("/health", (req ,res) => {
    res.json({
        status: "OK",
        messages: "2TANIC Backend Running"
    });
});

io.on("connection", (socket) => {
    console.log("Frontend connected.");

    socket.on("disconnect", () => {
        console.log("Frontend disconnected.");
    });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
