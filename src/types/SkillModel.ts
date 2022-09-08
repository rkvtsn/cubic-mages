import ActionModel from "./ActionModel";
import ConditionModel from "./ConditionModel";
import { CubicModel } from "./CubicModel";

export interface SkillModel {
  name: string;
  description: string;
  requiredCubics: CubicModel[];
  conditions: ConditionModel[];
  action: ActionModel;
}
