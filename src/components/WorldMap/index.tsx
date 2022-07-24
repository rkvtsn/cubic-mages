import { memo, useCallback, useMemo } from "react";
import MapTile from "components/MapTile";
import unflatWorld from "./unflatWorld";
import { WorldMapRowStyled, WorldMapStyled, WorldMapWrapper } from "./styles";
import { WorldMapProps } from "./types";

const WorldMap = ({ onClick, worldMap, selectedCells }: WorldMapProps) => {
  const handleClickOnCell = useCallback(
    (tileId: number, cellId: number, e: React.MouseEvent<HTMLElement>) => {
      if (onClick) {
        onClick(tileId, cellId, e);
      }
    },
    [onClick]
  );

  const world = useMemo(() => {
    return unflatWorld(worldMap.world);
  }, [worldMap?.world]);

  return (
    <WorldMapWrapper>
      <WorldMapStyled>
        {world?.length ? (
          world.map((tileRows, rowIndex) => (
            <WorldMapRowStyled key={rowIndex}>
              {tileRows.map((tile) => (
                <MapTile
                  tile={tile}
                  key={`${tile.col}:${tile.row}`}
                  onClick={handleClickOnCell}
                  selectedCells={selectedCells}
                />
              ))}
            </WorldMapRowStyled>
          ))
        ) : (
          <div>Please, load world</div>
        )}
      </WorldMapStyled>
    </WorldMapWrapper>
  );
};

export default memo(WorldMap);
