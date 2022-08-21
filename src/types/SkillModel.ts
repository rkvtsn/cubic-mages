import { CubicModel } from "./CubicModel";

export interface SkillModel {
  id: string;
  name: string;
  description: string;
  requiredCubics: CubicModel[];
}
