/**
 * Displays an entire card deck.
 *
 * Responsible for:
 * - Showing deck artwork
 * - Triggering card draws
 * - Displaying the current top card
 *
 * Does not contain the card data itself.
 */
// CardDeck.jsx
import React from 'react';
import CardBack from './CardBack';
import Card from './Card';
import './Card.css'; // Shared styles

//  Props:
// activeCard:  currently drawn card object
//  onDraw:  triggered when clicking the deck to draw a card
//  onDismiss: triggered to clear the current active card

export default function CardDeck({ activeCard, onDraw, onDismiss }) {
  return (
    <div className="deck-container">
      {activeCard ? (

        <Card 
          type={activeCard.type}
          title={activeCard.title}
          description={activeCard.description}
          onDismiss={onDismiss}
        />
      ) : (

        <div className="deck-stack">
          {/* Visual fluff aka cards stacked underneath*/}
          <div className="deck-shadow shadow-3"></div>
          <div className="deck-shadow shadow-2"></div>
          
          <CardBack onDraw={onDraw} />
        </div>
      )}
    </div>
  );
}
