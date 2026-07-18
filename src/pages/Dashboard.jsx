/**
 * Main application screen.
 *
 * Combines all UI components into a single dashboard.
 *
 * This component should mainly arrange layout rather than
 * contain business logic.
 */

import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import DiceRoller from '../components/Sidebar/DiceRoller';
import './Dashboard.css';

/**Import for the api */
import { drawCard } from '../services/api';


const SunIcon = () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="zone-svg">
        <g clipPath="url(#clip0_68_7684)">
            <path d="M6.49135 8.11419C7.38762 8.11419 8.11419 7.38762 8.11419 6.49135C8.11419 5.59508 7.38762 4.86852 6.49135 4.86852C5.59508 4.86852 4.86852 5.59508 4.86852 6.49135C4.86852 7.38762 5.59508 8.11419 6.49135 8.11419Z" stroke="#B8862F" strokeWidth="1.08189" strokeLinecap="round"/>
            <path d="M6.49135 1.08189V2.70473M6.49135 10.278V11.9008M2.28279 2.28279L3.4296 3.4296M9.55311 9.55311L10.6999 10.6999M1.08189 6.49135H2.70473M10.278 6.49135H11.9008M2.28279 10.6999L3.4296 9.55311M9.55311 3.4296L10.6999 2.28279" stroke="#B8862F" strokeWidth="1.08189" strokeLinecap="round"/>
        </g>
        <defs>
            <clipPath id="clip0_68_7684">
                <rect width="12.9827" height="12.9827" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

const ZONES = [
    {
        label: "THE SLUMS",
        value: "slums"
    },
    {
        label: "THE EXCHANGE",
        value: "exchange"
    },
    {
        label: "THE AURUM QUARTER",
        value: "aurumQuarter"
    }
];

const CARD_TYPES = [
    {
        label: "CHANCE",
        value: "chance"
    },
    {
        label: "RISK",
        value: "risk"
    },
    {
        label: "MONEY",
        value: "money"
    },
    {
        label: "DANGER",
        value: "danger"
    }
];

export default function Dashboard() {
    const [rolledNumber, setRolledNumber] = useState(1);

    const [cards, setCards] = useState({});

    async function loadCards() {

        console.log("Loading cards from backend...");

        const loadedCards = {};

        for (const zone of ZONES) {

            loadedCards[zone.value] = {};

            for (const cardType of CARD_TYPES) {

                const result = await drawCard(

                    "xvLE6v4mumRXuH0NHC43",
                    zone.value,
                    cardType.value

                );

                loadedCards[zone.value][cardType.value] = result.card;

            }

        }

        console.log(loadedCards);

        setCards(loadedCards);

    }

    useEffect(() => {
        loadCards();
    }, []);

    const handleRollComplete = (num) => {
        setRolledNumber(num);
    };

    return (
        <div className="dashboard-layout">
            <header className="dashboard-header">
                <div className="header-title">GAVEL & GEARS</div>
                <div className="header-divider" />
                <div className="header-subtitle">
                    <span className="subtitle-top">2TANIC</span>
                    <span className="subtitle-bottom">WE WILL SINK YOU</span>
                </div>
            </header>

            <div className="dashboard-body">
                <div className="zones-panel">
                    {ZONES.map((zone) => (
                        <div className="card-zone" key={zone.value}>
                            <div className="zone-header">
                                <SunIcon />
                                <h2 className="zone-title">{zone.label}</h2>
                            </div>
                            
                            {/* The 4 Cards in this Zone - I DON'T KNOW HOW TO HOOK THIS TO THE DADATBASE T-T*/}
                            <div className="zone-cards">
                                {CARD_TYPES.map(cardType => (
                                    <div className="card-scale-wrapper" key={`${zone.value}-${cardType.value}`}>
                                            <Card
                                                type={cards[zone.value]?.[cardType.value]?.type}
                                                title={cards[zone.value]?.[cardType.value]?.title}
                                                description={cards[zone.value]?.[cardType.value]?.description}
                                            />
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </div>

                {/* Dice Roller Sidebar */}
                <aside className="sidebar-panel">
                    <div className="sidebar-inner-container">
                        <DiceRoller onRollComplete={handleRollComplete} />
                    </div>
                </aside>

            </div>
        </div>
    );
}