import { CellNameType } from "./CellModel";

export interface CharacterModel {
  startLocation: CellNameType;
}

export enum CharacterType {
  Paladin = "Paladin",
  Witcher = "Witcher",
  Sorcerer = "Sorcerer",
  Witch = "Witch",
  Druid = "Druid",
}

export default CharacterModel;
