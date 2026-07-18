/**
 * Right-side control panel.
 *
 * Displays:
 * - Dice
 * - Player controls
 * - Additional actions
 */

import React, { useState, useEffect } from 'react';
import './DiceRoller.css';

export default function DiceRoller({ onRollComplete }) {
    const [isRolling, setIsRolling] = useState(false);
    const [isPulled, setIsPulled] = useState(false);
    const [result, setResult] = useState(1);
    

    const reelNumbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

    const handleRoll = () => {
        if (isRolling) return;

        setIsPulled(true);
        setIsRolling(true);
        setTimeout(() => {
            setIsPulled(false);
        }, 300);

        setTimeout(() => {
            const finalNumber = Math.floor(Math.random() * 6) + 1;
            setResult(finalNumber);
            setIsRolling(false);
            
            if (onRollComplete) {
                onRollComplete(finalNumber);
            }
        }, 1500);
    };

    return (
        <div className="dice-roller-panel">

            <div className="rivet top-left" />
            <div className="rivet top-right" />
            <div className="rivet bottom-left" />
            <div className="rivet bottom-right" />

            <button 
                className={`roll-btn ${isPulled ? 'pressed' : ''}`} 
                onClick={handleRoll}
                disabled={isRolling}
            >
                <span className="roll-text">Roll</span>
            </button>

            <div className="display-window-container">
                <div className="display-window">
                    <div className="glass-glare" />
                    <div className="display-inner-shadow" />
                    
                    <div className={`numbers-reel ${isRolling ? 'spinning' : ''}`}>
                        {isRolling ? (
                            // render the looping numbers during the spin
                            reelNumbers.map((num, i) => (
                                <div key={i} className="reel-number">{num}</div>
                            ))
                        ) : (
                            // render just the final result when stopped
                            <div className="reel-number static">{result}</div>
                        )}
                    </div>
                </div>
            </div>


            <div className="lever-section">
                <div className="lever-track">
                    <div 
                        className={`lever-assembly ${isPulled ? 'pulled' : ''}`}
                        onClick={handleRoll}
                    >
                        
                        <div className="lever-stick" />
                        
                        <div className="lever-base" />
                        
                        <div className="lever-knob">
                            <div className="knob-glare" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}