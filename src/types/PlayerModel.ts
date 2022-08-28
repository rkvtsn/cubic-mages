import { ColorPlayer } from "constants/colors";
import { SkillModel } from "./SkillModel";
import { CharacterType } from "./CharacterModel";
import { CubicModel } from "./CubicModel";
import { CellPosition } from "./CellModel";

export interface PlayerModel {
  id: string;
  name: string;
  color: ColorPlayer;
  isActive?: boolean;
  position?: CellPosition;
  type: CharacterType;
  bag: CubicModel[];
  skills: SkillModel[];
}
