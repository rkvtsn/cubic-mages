import { TILE_COLS, TILE_ROWS } from "constants/cells";
import CellModel from "types/CellModel";
import { TileModel } from "types/TileModel";
import { createCell } from "./createCell";
import generateId from "./generateId";

export const generateTile = (
  row: number,
  col: number,
  rows: number = TILE_ROWS,
  cols: number = TILE_COLS
): TileModel => {
  const tileId = generateId();

  const tielCells: CellModel[][] = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const cellRow: CellModel[] = [];
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      const cell = createCell(rowIndex, colIndex, row, col, tileId);
      cellRow.push(cell);
    }
    tielCells.push(cellRow);
  }

  return {
    row,
    col,
    tileId,
    cells: tielCells,
  };
};

export default generateTile;
