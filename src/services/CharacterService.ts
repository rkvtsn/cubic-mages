import CellModel, { CellNameType } from "types/CellModel";
import { PlayerModel } from "types/PlayerModel";

export interface ICharacterService {
  getStartLocation(): CellNameType;
  getPlayer(): PlayerModel;
  filterAvailableCells(cell: CellModel): boolean;
  updatePlayer(player: PlayerModel): PlayerModel;
  spawnPlayer(worldCells: CellModel[], player: PlayerModel): PlayerModel;
}

export abstract class CharacterServiceBase implements ICharacterService {
  player: PlayerModel;
  abstract getStartLocation(): CellNameType;

  constructor(player: PlayerModel, worldCells: CellModel[]) {
    this.player = this.spawnPlayer(worldCells, player);
  }

  updatePlayer(player: Partial<PlayerModel>) {
    this.player = { ...this.getPlayer(), ...player };
    return this.player;
  }

  filterAvailableCells(cell: CellModel): boolean {
    return cell?.base?.name === this.getStartLocation();
  }

  spawnPlayer(worldCells: CellModel[], player?: PlayerModel): PlayerModel {
    const availableCells = worldCells.filter((cell) =>
      this.filterAvailableCells(cell)
    );
    return { ...(player || this.getPlayer()), cell: availableCells[0] };
  }

  getPlayer(): PlayerModel {
    return this.player;
  }
}
