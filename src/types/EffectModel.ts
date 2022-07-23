export enum EffectType {
  Rumor = "rumor",
  Goal = "goal",
  Encounter = "encounter",
}

export interface EffectModel {
  name: string;
  description: string;
  type: EffectType;
}

export interface EffectData {
  background?: string;
  symbol: string;
}

export default EffectModel;
