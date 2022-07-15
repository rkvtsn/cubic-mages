import MapTile from "components/MapTile";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { TileModel } from "types/TileModel";
import { WorldMapRowStyled, WorldMapStyled, WorldMapWrapper } from "./styles";

interface WorldMapProps {
  onClick?: (cellId: number) => void;
  worldMap: TileModel[][];
}

const WorldMap = ({ onClick, worldMap }: WorldMapProps) => {
  const [tiles, setTiles] = useState<TileModel[][]>([]);
  const [currentCellId, setCurrentCellId] = useState<number | null>(null);

  useEffect(() => {
    setTiles(worldMap);
  }, [setTiles, worldMap]);

  const handleClickOnCell = useCallback(
    (tileId: number, cellId: number) => {
      setCurrentCellId(cellId);
      onClick && onClick(cellId);
    },
    [setCurrentCellId, onClick]
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
