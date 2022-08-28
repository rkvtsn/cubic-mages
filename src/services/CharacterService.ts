import CellModel, { CellNameType } from "types/CellModel";
import { PlayerModel } from "types/PlayerModel";

export interface ICharacterService {
  setActive(isActive: boolean): void;
  getStartLocation(): CellNameType;
  getPlayer(): PlayerModel;
  canMove(cell: CellModel): boolean;
  getAvailableSpawnCells(worldCells: CellModel[]): CellModel[];
  updatePlayer(player: PlayerModel): PlayerModel;
  spawnPlayer(worldCells: CellModel[]): PlayerModel;
}

export abstract class CharacterServiceBase implements ICharacterService {
  player: PlayerModel;
  abstract getStartLocation(): CellNameType;

  constructor(player: PlayerModel) {
    this.player = { ...player };
  }

  setActive(isActive: boolean) {
    this.player = { ...this.player, isActive };
  }

  updatePlayer(player: PlayerModel) {
    this.player = { ...player };
    return this.player;
  }

  getAvailableSpawnCells(worldCells: CellModel[]): CellModel[] {
    return worldCells.filter(
      (cell) => cell.base.name === this.getStartLocation()
    );
  }

  spawnPlayer(worldCells: CellModel[]): PlayerModel {
    const availableCells = this.getAvailableSpawnCells(worldCells);
    this.player = { ...this.player, cell: availableCells[0] };
    return this.player;
  }

  getPlayer(): PlayerModel {
    return this.player;
  }

  canMove(cell: CellModel): boolean {
    throw new Error("Method not implemented.");
  }
}
