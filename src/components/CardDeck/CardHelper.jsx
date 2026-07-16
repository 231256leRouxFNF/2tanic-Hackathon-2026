import { CARD_POOLS } from './cardPools';

/**
 * random card object from specific pool
 * @param {string} type - 'chance', 'risk', 'money', or 'danger'
 */
export function drawRandomCard(type) {
  const pool = CARD_POOLS[type.toLowerCase()];
  
  if (!pool || pool.length === 0) {
    console.error(`No card pool found for type: ${type}`);
    return null;
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  return {
    ...pool[randomIndex],
    type: type.toLowerCase() 
  };
}