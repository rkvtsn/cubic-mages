import { CellNameType } from "./CellModel";

export interface CharacterModel {
  name: CharacterType;
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
