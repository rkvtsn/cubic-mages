import { DEFAULT_CELL_KEY, CELLS_MAP } from "constants/cells";
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
    tile: {
      row: tileRow,
      col: tileCol,
      id: tileId,
    },
    base: CELLS_MAP[name],
  };
};
