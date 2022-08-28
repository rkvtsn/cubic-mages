import { CellNameType } from "types/CellModel";
import { CharacterServiceBase } from "./CharacterService";

export default class CharacterDruid extends CharacterServiceBase {
  getStartLocation(): CellNameType {
    return "forest";
  }
}
