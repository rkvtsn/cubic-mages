import CellModel, { CellNameType } from "types/CellModel";
import { PlayerModel } from "types/PlayerModel";
import { CharacterServiceBase } from "./CharacterService";

export default class CharacterDruid extends CharacterServiceBase {
  getStartLocation(): CellNameType {
    return "forest";
  }

  // constructor(player: PlayerModel, worldCells: CellModel[]) {
  //   super(player, worldCells);
  // }
}
