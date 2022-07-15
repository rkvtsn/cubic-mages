import CELLS_LIBRARY_BASE_ALL, { DEFAULT_CELL_KEY } from "constants/cells";
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
  const type = CELLS_LIBRARY_BASE_ALL.find((cell) => name === cell.name)?.type;
  return {
    id: generateId(),
    row,
    col,
    name,
    tileId,
    type: type ? type : "Common",
  };
};
