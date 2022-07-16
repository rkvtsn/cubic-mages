import { COLS, ROWS, TILE_COLS, TILE_ROWS } from "constants/cells";
import CellModel from "types/CellModel";
import { createCell } from "./createCell";
import generateId from "./generateId";

interface GenerateWorldProps {
  rows?: number;
  cols?: number;
  tileRows?: number;
  tileCols?: number;
}

const genTileCell = (
  rows: number,
  cols: number,
  tileRow: number,
  tileCol: number
): CellModel[] => {
  const cells: CellModel[] = [];
  const tileId = generateId();
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      const cell = createCell(rowIndex, colIndex, tileRow, tileCol, tileId);
      cells.push(cell);
    }
  }
  return cells;
};

export const generateWorld = ({
  rows = ROWS,
  cols = COLS,
  tileRows = TILE_ROWS,
  tileCols = TILE_COLS,
}: GenerateWorldProps): CellModel[] => {
  let cells: CellModel[] = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      cells = [...cells, ...genTileCell(tileRows, tileCols, i, j)];
    }
  }
  return cells;
};

export default generateWorld;
