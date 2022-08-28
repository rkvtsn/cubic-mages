import { memo, useCallback, useMemo } from "react";
import MapTile from "components/MapTile";
import unflatWorld from "./unflatWorld";
import { WorldMapProps } from "./types";
import { WorldMapRowStyled, WorldMapStyled, WorldMapWrapper } from "./styles";

const WorldMap = ({
  onClick,
  worldMap,
  selectedCells,
  players,
  effects,
}: WorldMapProps) => {
  const handleClickOnCell = useCallback(
    (tileId: number, cellId: number, e: React.MouseEvent<HTMLElement>) => {
      if (onClick) {
        onClick(tileId, cellId, e);
      }
    },
    [onClick]
  );

  const world = useMemo(() => {
    return unflatWorld(worldMap.cells);
  }, [worldMap?.cells]);

  return (
    <WorldMapWrapper>
      <WorldMapStyled>
        {world?.length ? (
          world.map((tileRows, rowIndex) => (
            <WorldMapRowStyled key={rowIndex}>
              {tileRows.map((tile) => (
                <MapTile
                  tile={tile}
                  effects={effects}
                  players={players}
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
