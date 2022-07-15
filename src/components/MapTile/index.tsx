import { useCallback } from "react";
import { TileModel } from "types/TileModel";
import { MapTileRowStyled, MapTileWrapperStyled } from "./styles";
import TileCell from "./TileCell";

interface MapTileProps {
  onClick: (tileId: number, cellId: number) => void;
  currentCellId: number | null;
  tile: TileModel;
}

const MapTile = ({ tile, onClick, currentCellId }: MapTileProps) => {
  const handleOnCellClick = useCallback(
    (cellId: number) => {
      onClick(tile.tileId, cellId);
    },
    [onClick, tile.tileId]
  );

  return (
    <MapTileWrapperStyled>
      {tile.cells.map((cellRow, i) => (
        <MapTileRowStyled key={i}>
          {cellRow.map((cell) => (
            <TileCell
              isSelected={currentCellId === cell.id}
              key={cell.id}
              cell={cell}
              onClick={handleOnCellClick}
            />
          ))}
        </MapTileRowStyled>
      ))}
    </MapTileWrapperStyled>
  );
};

export default MapTile;
