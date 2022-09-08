import { ColorPlayer } from "constants/colors";
import { SkillModel } from "./SkillModel";
import { CubicModel } from "./CubicModel";
import CellModel from "./CellModel";
import { CharacterType } from "./CharacterModel";

export interface PlayerModel {
  id: string;
  name: string;
  color: ColorPlayer;
  characterType: CharacterType;
  bag?: CubicModel[];
  skills?: SkillModel[];
  cell?: CellModel;
}
