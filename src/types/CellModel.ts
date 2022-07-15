import { CELL_TYPES } from "constants/cells";

export type CellType = typeof CELL_TYPES[number];

export interface CellBaseModel {
  name: string;
  type: CellType;
  background: string;
}

export interface CellModel extends CellBaseModel {
  id: number;
  tileId: number;
  row: number;
  col: number;
}

export default CellModel;
