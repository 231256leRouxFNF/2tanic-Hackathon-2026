// const API = "http://localhost:3001/api";
const API = import.meta.env.VITE_API_URL;

console.log("Using API:", API);

export async function createGame() {

    const response = await fetch(`${API}/games`, {
        method: "POST"
    });

    const data = await response.json();

    console.log("createGame:", data);

    return data;
}

export async function drawCard(gameId, area, type) {

    const response = await fetch(
        `${API}/games/${gameId}/draw/${area}/${type}`,
        {
            method: "POST"
        }
    );

    const data = await response.json();

    console.log(`${area} ${type}`, data);

    return data;
}