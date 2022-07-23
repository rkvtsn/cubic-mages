import { ColorPlayer } from "constants/colors";

export enum PlayerType {
  Paladin,
  Witcher,
  Sorcerer,
  Witch,
  Druid,
}

export interface PlayerModel {
  id: string;
  name: string;
  color: ColorPlayer;
  type: PlayerType;
}
