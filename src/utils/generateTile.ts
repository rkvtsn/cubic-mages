import CellModel from "types/CellModel";
import { TileModel } from "types/TileModel";
import { createCell } from "./createCell";
import generateId from "./generateId";

export const generateTileEmpty = (
  cols: number = 3,
  rows: number = 3
): TileModel => {
  const tileId = generateId();

  const cells: CellModel[][] = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row: CellModel[] = [];
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      const cell = createCell({
        tileId,
        row: rowIndex,
        col: colIndex,
      });
      row.push(cell);
    }
    cells.push(row);
  }

  return {
    tileId,
    cells,
  };
};
