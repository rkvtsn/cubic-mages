import { useCallback } from "react";
import MapTile from "components/MapTile";
import CellModel, { CellBaseModel } from "types/CellModel";
import { WorldMapRowStyled, WorldMapStyled, WorldMapWrapper } from "./styles";
import { TileModel } from "types/TileModel";
import { useMemo } from "react";

interface WorldMapProps {
  onClick?: (
    tileId: number,
    cellId: number,
    e: React.MouseEvent<HTMLElement>
  ) => void;
  worldMap: CellModel[];
  currentCellId: number | null;
}

const unflatWorld = (cells: CellModel[]): TileModel[][] => {
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

const WorldMap = ({ onClick, worldMap, currentCellId }: WorldMapProps) => {
  const handleClickOnCell = useCallback(
    (tileId: number, cell: CellBaseModel, e: React.MouseEvent<HTMLElement>) => {
      if (onClick) {
        onClick(tileId, (cell as CellModel)?.id, e);
      }
    },
    [onClick]
  );

  const world = useMemo(() => {
    return unflatWorld(worldMap);
  }, [worldMap]);

  return (
    <WorldMapWrapper>
      <WorldMapStyled>
        {world.map((tileRows, rowIndex) => (
          <WorldMapRowStyled key={rowIndex}>
            {tileRows.map((tile) => (
              <MapTile
                tile={tile}
                key={`${tile.col}:${tile.row}`}
                onClick={handleClickOnCell}
                currentCellId={currentCellId}
              />
            ))}
          </WorldMapRowStyled>
        ))}
      </WorldMapStyled>
    </WorldMapWrapper>
  );
};

export default WorldMap;
