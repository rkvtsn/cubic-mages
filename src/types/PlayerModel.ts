import { ColorPlayer } from "constants/colors";
import { SkillModel } from "./SkillModel";
import { CharacterType } from "./CharacterModel";
import { CubicModel } from "./CubicModel";

export interface PlayerModel {
  id: string;
  name: string;
  color: ColorPlayer;
  type: CharacterType;
  bag: CubicModel[];
  skills: SkillModel[];
}
