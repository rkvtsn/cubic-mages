import CellModel from "./CellModel";

export enum EffectType {
  Rumor = "rumor",
  Goal = "goal",
  Encounter = "encounter",
  Move = "top",
}

export interface IEffectPayload {
  text: string;
}

export interface EffectModel {
  type: EffectType;
  cell?: CellModel;
  payload: IEffectPayload;
}

export interface EffectData {
  background?: string;
  symbol: string;
}

export default EffectModel;
