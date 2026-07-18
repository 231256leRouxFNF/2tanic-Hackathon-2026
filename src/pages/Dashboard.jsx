/**
 * Main application screen.
 *
 * Combines all UI components into a single dashboard.
 *
 * This component should mainly arrange layout rather than
 * contain business logic.
 */

import React, { useState } from 'react';
import Card from '../components/Card/Card';
import DiceRoller from '../components/Sidebar/DiceRoller';
import './Dashboard.css';


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

const ZONES = ["THE SLUMS", "THE EXCHANGE", "THE AURUM QUARTER"];
const CARD_TYPES = ['CHANCE', 'RISK', 'MONEY', 'DANGER'];

export default function Dashboard() {
    const [rolledNumber, setRolledNumber] = useState(1);

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
                        <div className="card-zone" key={zone}>
                            <div className="zone-header">
                                <SunIcon />
                                <h2 className="zone-title">{zone}</h2>
                            </div>\
                            
                            {/* The 4 Cards in this Zone - I DON'T KNOW HOW TO HOOK THIS TO THE DADATBASE T-T*/}
                            <div className="zone-cards">
                                {CARD_TYPES.map(type => (
                                    <div className="card-scale-wrapper" key={`${zone}-${type}`}>
                                        <Card 
                                            type={type} 
                                            title={`${type} EVENT`}
                                            description={`You drew a ${type.toLowerCase()} card in ${zone}.`}
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