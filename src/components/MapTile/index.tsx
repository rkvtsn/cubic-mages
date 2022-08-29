import { useCallback } from "react";
import { TileModel } from "types/TileModel";
import { MapTileRowStyled, MapTileWrapperStyled } from "./styles";
import TileCell from "components/TileCell";
import { PlayerModel } from "types/PlayerModel";
import EffectModel from "types/EffectModel";

interface MapTileProps {
  onClick: (
    tileId: number,
    cellId: number,
    e: React.MouseEvent<HTMLElement>
  ) => void;
  players?: PlayerModel[];
  effects?: EffectModel[];
  selectedCells?: number[];
  tile: TileModel;
}

const MapTile = ({
  tile,
  players,
  onClick,
  selectedCells,
  effects,
}: MapTileProps) => {
  const handleOnCellClick = useCallback(
    (cellId: number) => (cellName: string, e: React.MouseEvent<HTMLElement>) => {
      onClick(tile.tileId, cellId, e);
    },
    [onClick, tile.tileId]
  );

  const getIsSelected = useCallback(
    (cellId: number) => {
      return selectedCells?.includes(cellId);
    },
    [selectedCells]
  );

  const filterPlayersByCell = useCallback(
    (cellId: number) => {
      return players?.filter((player) => {
        return player?.cell?.id === cellId;
      });
    },
    [players]
  );

  const filterEffectsByCell = useCallback(
    (cellId: number) => {
      return effects?.filter((effect) => {
        return effect?.cell?.id === cellId;
      });
    },
    [effects]
  );

  return (
    <MapTileWrapperStyled>
      {tile.cells.map((cellRow, i) => (
        <MapTileRowStyled key={i}>
          {cellRow.map((cell) => (
            <TileCell
              isSelected={getIsSelected(cell.id)}
              key={cell.id}
              cellBase={cell.base}
              onClick={handleOnCellClick(cell.id)}
              players={filterPlayersByCell(cell.id)}
              effects={filterEffectsByCell(cell.id)}
            />
          ))}
        </MapTileRowStyled>
      ))}
    </MapTileWrapperStyled>
  );
};

export default MapTile;
