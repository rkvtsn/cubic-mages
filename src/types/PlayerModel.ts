import { ColorPlayer } from "constants/colors";
import { CharacterType } from "./CharacterModel";

export interface PlayerModel {
  id: string;
  name: string;
  color: ColorPlayer;
  type: CharacterType;
}
