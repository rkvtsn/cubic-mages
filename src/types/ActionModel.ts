import { CubicModel } from "./CubicModel";

export interface ActionModel {
  id: string;
  name: string;
  description: string;
  requiredCubics: CubicModel[];
}
