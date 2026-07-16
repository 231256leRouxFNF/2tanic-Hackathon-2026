/**
 * Sends events to connected clients.
 *
 * Example:
 * socket.emit("diceRoll", payload);
 */

export function emitEvent(io, event, payload) {
    io.emit(event, payload);
}