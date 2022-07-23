import { CELL_TYPES } from "constants/cells";
import EffectModel from "./EffectModel";

export type CellType = typeof CELL_TYPES[number];

export interface CellBaseModel {
  name: string;
  type: CellType;
  background: string | string[];
  count?: number;
}

export interface CellModel {
  cell: CellBaseModel;
  id: number;
  row: number;
  col: number;
  tileId: number;
  tileRow: number;
  tileCol: number;
  effect?: EffectModel | null;
}

export default CellModel;
