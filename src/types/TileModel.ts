import CellModel from "./CellModel";

export interface TileModel {
  tileId: number;
  row: number;
  col: number;
  cells: CellModel[][];
}
