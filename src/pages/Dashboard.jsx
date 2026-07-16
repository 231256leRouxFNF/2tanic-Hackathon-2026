/**
 * Main application screen.
 *
 * Combines all UI components into a single dashboard.
 *
 * This component should mainly arrange layout rather than
 * contain business logic.
 */

// Dashboard.jsx
import React, { useState } from 'react';
import CardDeck from './CardDeck';
import { drawRandomCard } from './cardHelper';

export default function Dashboard() {
    const [activeCard, setActiveCard] = useState(null);

    const handleDraw = () => {

        const categories = ['chance', 'risk', 'money', 'danger'];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];

        const card = drawRandomCard(randomCategory);
        setActiveCard(card);
    };

    const handleDismiss = () => {
        setActiveCard(null);
    };

    return (
        <div className="dashboard-layout" style={{ background: '#1c1c1c', minHeight: '100vh', padding: '50px' }}>
            <h1 style={{ color: '#fff', fontFamily: 'sans-serif', marginBottom: '40px' }}>Game Table</h1>


            <CardDeck
                activeCard={activeCard}
                onDraw={handleDraw}
                onDismiss={handleDismiss}
            />
        </div>
    );
}