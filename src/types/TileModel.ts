import CellModel from "./CellModel";

export interface TileModel {
  tileId: number;
  cells: CellModel[][];
}
