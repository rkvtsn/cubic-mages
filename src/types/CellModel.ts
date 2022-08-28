import { CELL_NAMES, CELL_TYPES } from "constants/cells";

export type CellType = typeof CELL_TYPES[number];
export type CellNameType = typeof CELL_NAMES[number];

export interface CellBaseModel {
  name: CellNameType;
  type: CellType;
  background: string | string[];
  count?: number;
}

export interface CellPosition {
  row: number;
  col: number;
}

export interface TileModel extends CellPosition {
  id: number;
}

export interface CellModel extends TileModel {
  tile: TileModel;
  base: CellBaseModel;
}

export default CellModel;
