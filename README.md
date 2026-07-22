# 2TANIC: Gavel & Gears

A digital companion application built for the **2TANIC Hackathon 2026**.

Gavel & Gears is a React-based card management system that connects to a backend API to dynamically draw, display, and replace gameplay cards across multiple districts. Players can reveal cards, dismiss them, and receive new cards generated from the game server.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![License](https://img.shields.io/badge/License-Hackathon-blue)

---

## Preview

<img src="/readme-files/cavelgears-preview.png" alt="Hero Banner" width="800">

```
/docs/dashboard.png
/docs/card-flip.gif
```

---

## Features

- Dynamic card drawing from a backend API
- Card replacement after dismissal
- Interactive dice roller
- Multiple gameplay zones
  - The Slums
  - The Exchange
  - The Aurum Quarter
- Four unique card types
  - Chance
  - Risk
  - Money
  - Danger
- Animated card flip interactions
- Responsive dashboard layout
- Built with React + Vite

---

## 🛠 Tech Stack

### Frontend

- React 19
- Vite
- CSS3
- JavaScript (ES6+)

### Backend

- REST API
- Fetch API

---

## Project Structure

```
src/
│
├── components/
│   ├── Card/
│   └── Sidebar/
│
├── pages/
│   └── Dashboard.jsx
│
├── services/
│   └── api.js
│
├── assets/
│
└── App.jsx
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/2tanic-Hackathon-2026.git
```

Navigate into the project

```bash
cd 2tanic-Hackathon-2026
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the project root

```env
VITE_API_URL=https://your-api-url.com
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_URL=https://your-backend-url.com
```

Vite only exposes environment variables prefixed with `VITE_`.

---

## Gameplay Flow

1. Create a new game session.
2. Load all available cards.
3. Display cards by district.
4. Tap a card to reveal it.
5. Dismiss the card.
6. Request a new card from the backend.

---

## API Endpoints

### Create Game

```
POST /games
```

Returns

```json
{
  "gameId": "..."
}
```

---

### Draw Card

```
POST /games/:gameId/draw/:area/:type
```

Returns

```json
{
  "success": true,
  "card": {
    "type": "CHANCE",
    "title": "...",
    "description": "..."
  }
}
```

---

## Design

The UI is inspired by vintage industrial board games featuring:

- Brass and bronze accents
- Victorian typography
- Animated card flips
- Dynamic colour themes
- Ornamental card frames

---

## Team

Built during the **2TANIC Hackathon 2026**.

Contributors:

- Francois le Roux DV300 
- Tyla Oberholzer UX300
- Kobus Jordaan CC300
- Richard Morris ID300 & CC300
- Mmasape Manthata UX200 & ID200
- Meinke le Roux UX200 & ID200
- Rachél Laubscher UX200
- Remazani Ngalwana DV200
- Oabile Boikanyo CC200
- Lennon Mupfukudzwa ID200
- Zander Louw UX200

---

## License

This project was created for the **OWI Hackathon 2026** and is intended for educational and demonstration purposes.

---

## Acknowledgements

- React
- Vite
- OWI Hackathon
- The 2Tanic team
