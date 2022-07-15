import { CELLS_MAP, DEFAULT_CELL_KEY } from "constants/cells";
import CellModel from "types/CellModel";
import generateId from "./generateId";

export const createCell = (
  row: number,
  col: number,
  tileRow: number,
  tileCol: number,
  tileId: number,
  name: string = DEFAULT_CELL_KEY
): CellModel => {
  return {
    id: generateId(),
    row,
    col,
    tileRow,
    tileCol,
    tileId,
    ...CELLS_MAP[name],
  };
};
