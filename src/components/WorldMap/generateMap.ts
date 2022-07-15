import { TileModel } from "types/TileModel";
import { generateTileEmpty } from "utils/generateTile";

const generateMap = (rows: number, cols: number) => {
  const tileRows = [];
  for (let i = 0; i < rows; i++) {
    const tileCells: TileModel[] = [];
    for (let j = 0; j < cols; j++) {
      tileCells.push(generateTileEmpty());
    }
    tileRows.push(tileCells);
  }
  return tileRows;
};

export default generateMap;
