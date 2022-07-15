import MapTile from "components/MapTile";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import CellModel, { CellBaseModel } from "types/CellModel";
import { TileModel } from "types/TileModel";
import { WorldMapRowStyled, WorldMapStyled, WorldMapWrapper } from "./styles";

interface WorldMapProps {
  onClick?: (tileId: number, cellId: number) => void;
  worldMap: TileModel[][];
  currentCellId: number | null;
}

const WorldMap = ({ onClick, worldMap, currentCellId }: WorldMapProps) => {
  const [tiles, setTiles] = useState<TileModel[][]>([]);

  useEffect(() => {
    setTiles(worldMap);
  }, [setTiles, worldMap]);

  const handleClickOnCell = useCallback(
    (tileId: number, cell: CellBaseModel) => {
      if (onClick) {
        onClick(tileId, (cell as CellModel)?.id);
      }
    },
    [onClick]
  );

  return (
    <WorldMapWrapper>
      <WorldMapStyled>
        {tiles.map((tileRows, rowIndex) => (
          <WorldMapRowStyled key={rowIndex}>
            {tileRows.map((tile) => (
              <MapTile
                tile={tile}
                key={tile.tileId}
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
