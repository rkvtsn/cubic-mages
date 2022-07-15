import MapTile from "components/MapTile";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { TileModel } from "types/TileModel";
import generateMap from "./generateMap";
import { WorldMapRowStyled, WorldMapStyled, WorldMapWrapper } from "./styles";

interface WorldMapProps {
  editorMode?: boolean;
  rows?: number;
  cols?: number;
}

const WorldMap = ({
  editorMode = false,
  rows = 4,
  cols = 6,
}: WorldMapProps) => {
  const [tiles, setTiles] = useState<TileModel[][]>([]);
  const [currentCellId, setCurrentCellId] = useState<number | null>(null);

  useEffect(() => {
    setTiles(generateMap(rows, cols));
  }, [cols, rows]);

  const handleClickOnCell = useCallback(
    (tileId: number, cellId: number) => {
      setCurrentCellId(cellId);
    },
    [setCurrentCellId]
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
