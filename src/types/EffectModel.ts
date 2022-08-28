import { CellPosition } from "./CellModel";

export enum EffectType {
  Rumor = "rumor",
  Goal = "goal",
  Encounter = "encounter",
}

export interface EffectModel {
  name: string;
  description: string;
  type: EffectType;
  position: CellPosition;
}

export interface EffectData {
  background?: string;
  symbol: string;
}

export default EffectModel;
