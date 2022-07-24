import { ColorPlayer } from "constants/colors";
import { CharacterType } from "./CharacterModel";

export interface PlayerModel {
  id: string;
  name: string;
  color: ColorPlayer;
  type: CharacterType;
}

export class PlayerImpl implements PlayerModel {
  id: string;
  name: string;
  color: ColorPlayer;
  type: CharacterType;

  constructor({ id, name, color, type }: PlayerModel) {
    this.id = id;
    this.color = color;
    this.type = type;
    this.name = name;
  }
}
