import CellModel from "types/CellModel";
import { TileModel } from "types/TileModel";

export const unflatWorld = (cells: CellModel[]): TileModel[][] => {
  const tiles: TileModel[][] = [];
  cells.forEach((cell) => {
    if (!tiles[cell.tile.row]) {
      tiles[cell.tile.row] = [];
    }

    tiles[cell.tile.row][cell.tile.col] = {
      tileId: cell.tile.id,
      row: cell.tile.row,
      col: cell.tile.col,
      cells: [] as CellModel[][],
    };
  });
  cells.forEach((cell) => {
    const tileCells = tiles[cell.tile.row][cell.tile.col].cells;
    if (!tileCells[cell.row]) {
      tileCells[cell.row] = [];
    }
    tileCells[cell.row][cell.col] = cell;
  });
  return tiles;
};

export default unflatWorld;
