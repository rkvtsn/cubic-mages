import { EffectData, EffectType } from "types/EffectModel";

export const EFFECTS: Record<EffectType, EffectData> = {
  [EffectType.Encounter]: {
    symbol: "E",
  },
  [EffectType.Goal]: {
    symbol: "G",
  },
  [EffectType.Rumor]: {
    symbol: "R",
  },
  [EffectType.Move]: {
    symbol: "X",
  },
};

export default EFFECTS;
