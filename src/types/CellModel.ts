import { CELL_NAMES, CELL_TYPES } from "constants/cells";
import EffectModel from "./EffectModel";
import { PlayerModel } from "./PlayerModel";

export type CellType = typeof CELL_TYPES[number];
export type CellNameType = typeof CELL_NAMES[number];

export interface CellBaseModel {
  name: CellNameType;
  type: CellType;
  background: string | string[];
  count?: number;
}

export interface CellModel {
  cellName: string;
  id: number;
  row: number;
  col: number;
  tileId: number;
  tileRow: number;
  tileCol: number;
  effect?: EffectModel | null;
  player?: PlayerModel | null;
}

export default CellModel;
