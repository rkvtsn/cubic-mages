import { COLORS_TILES } from "constants/colors";
import {
  MapTileRowStyled,
  MapTileWrapperStyled,
  TileCellStyled,
} from "./styles";

interface MapTileProps {}

const mockData = {};

const MapTile = (props: MapTileProps) => {
  return (
    <MapTileWrapperStyled>
      <MapTileRowStyled>
        <TileCellStyled color={COLORS_TILES.forest} />
        <TileCellStyled color={COLORS_TILES.road} />
        <TileCellStyled color={COLORS_TILES.rock} />
      </MapTileRowStyled>
      <MapTileRowStyled>
        <TileCellStyled color={COLORS_TILES.water} />
        <TileCellStyled color={COLORS_TILES.road} />
        <TileCellStyled color={COLORS_TILES.rock} />
      </MapTileRowStyled>
      <MapTileRowStyled>
        <TileCellStyled color={COLORS_TILES.water} />
        <TileCellStyled color={COLORS_TILES.rock} />
        <TileCellStyled color={COLORS_TILES.rock} />
      </MapTileRowStyled>
    </MapTileWrapperStyled>
  );
};

export default MapTile;
