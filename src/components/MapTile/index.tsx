import { useCallback } from "react";
import { TileModel } from "types/TileModel";
import { MapTileRowStyled, MapTileWrapperStyled } from "./styles";
import TileCell from "components/TileCell";
import { CellBaseModel } from "types/CellModel";

interface MapTileProps {
  onClick: (
    tileId: number,
    cellId: number,
    e: React.MouseEvent<HTMLElement>
  ) => void;
  selectedCells?: number[];
  tile: TileModel;
}

const MapTile = ({ tile, onClick, selectedCells }: MapTileProps) => {
  const handleOnCellClick = useCallback(
    (cellId: number) =>
      (cell: CellBaseModel, e: React.MouseEvent<HTMLElement>) => {
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

  return (
    <MapTileWrapperStyled>
      {tile.cells.map((cellRow, i) => (
        <MapTileRowStyled key={i}>
          {cellRow.map((cell) => (
            <TileCell
              isSelected={getIsSelected(cell.id)}
              key={cell.id}
              cell={cell.cell}
              onClick={handleOnCellClick(cell.id)}
            />
          ))}
        </MapTileRowStyled>
      ))}
    </MapTileWrapperStyled>
  );
};

export default MapTile;
