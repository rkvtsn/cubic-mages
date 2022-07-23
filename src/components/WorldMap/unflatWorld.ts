import CellModel from "types/CellModel";
import { TileModel } from "types/TileModel";

export const unflatWorld = (cells: CellModel[]): TileModel[][] => {
  const tiles: TileModel[][] = [];
  cells.forEach((cell) => {
    if (!tiles[cell.tileRow]) {
      tiles[cell.tileRow] = [];
    }

    tiles[cell.tileRow][cell.tileCol] = {
      tileId: cell.tileId,
      row: cell.tileRow,
      col: cell.tileCol,
      cells: [] as CellModel[][],
    };
  });
  cells.forEach((cell) => {
    const tileCells = tiles[cell.tileRow][cell.tileCol].cells;
    if (!tileCells[cell.row]) {
      tileCells[cell.row] = [];
    }
    tileCells[cell.row][cell.col] = cell;
  });
  return tiles;
};

export default unflatWorld;
