import { CELL_TYPES } from "constants/cells";
import EffectModel from "./EffectModel";
import { PlayerModel, PlayerType } from "./PlayerModel";

export type CellType = typeof CELL_TYPES[number];

export interface CellBaseModel {
  name: string;
  type: CellType;
  background: string | string[];
  count?: number;
  playerTypeStartLocation?: PlayerType;
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
  player?: PlayerModel | null;
}

export default CellModel;
