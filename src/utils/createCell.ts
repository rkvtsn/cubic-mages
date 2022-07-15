import { CELLS_MAP, DEFAULT_CELL_KEY } from "constants/cells";
import CellModel from "types/CellModel";
import generateId from "./generateId";

interface CreateCellProps {
  row: number;
  col: number;
  tileId: number;
  name?: string;
}

export const createCell = ({
  row,
  col,
  tileId,
  name = DEFAULT_CELL_KEY,
}: CreateCellProps): CellModel => {
  return {
    id: generateId(),
    row,
    col,
    tileId,
    ...CELLS_MAP[name],
  };
};
