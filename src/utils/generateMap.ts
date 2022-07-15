import { TileModel } from "types/TileModel";
import { generateTile } from "utils/generateTile";

const generateMap = (
  rows: number,
  cols: number,
  tileRows?: number,
  tileCols?: number
) => {
  const tiles = [];
  for (let i = 0; i < rows; i++) {
    const tileCells: TileModel[] = [];
    for (let j = 0; j < cols; j++) {
      tileCells.push(generateTile(i, j, tileRows, tileCols));
    }
    tiles.push(tileCells);
  }
  return tiles;
};

export default generateMap;
