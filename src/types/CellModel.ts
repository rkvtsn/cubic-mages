import { CELL_TYPES } from "constants/cells";

export type CellType = typeof CELL_TYPES[number];

export interface CellBaseModel {
  name: string;
  type: CellType;
  background: string;
}

export interface CellModel extends CellBaseModel {
  id: number;
  row: number;
  col: number;
  tileId: number;
  tileRow: number;
  tileCol: number;
}

export default CellModel;
