import type { Rarity } from "./Rarity";

export interface Car {
  id: string;
  model: string;
  type: string;
  rarity: Rarity;
  edition: string;
  cover: string;
  speed: number;
  weight: number;
  acceleration: number;
  sounds: string[];
}
