// const API = "http://localhost:3001/api";
const API = import.meta.env.VITE_API_URL;

export async function createGame() {

    const response = await fetch(`${API}/games`, {

        method: "POST"

    });

    return response.json();

}

export async function drawCard(gameId, area, type) {

    const response = await fetch(

        `${API}/games/${gameId}/draw/${area}/${type}`,

        {

            method: "POST"

        }

    );

    return response.json();

}