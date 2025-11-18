export interface Item {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'potion';
  rarity: 'common' | 'rare' | 'epic';
}

export const items: Item[] = [
  { id: 'sword_1', name: 'Iron Sword', type: 'weapon', rarity: 'common' },
  { id: 'armor_1', name: 'Leather Armor', type: 'armor', rarity: 'common' }
];

export function getRandomLoot(): Item {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}
