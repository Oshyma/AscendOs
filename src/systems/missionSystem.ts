export interface Mission {
  id: string;
  description: string;
  xpReward: number;
  completed: boolean;
}

export const missions: Mission[] = [
  { id: 'first_save', description: 'Save your first file', xpReward: 50, completed: false },
  { id: 'five_saves', description: 'Save 5 files', xpReward: 100, completed: false }
];
