import MapTile from "./MapTile";
import { WorldMapStyled, WorldMapWrapper } from "./styles";

const WorldMap = () => {
  return (
    <WorldMapWrapper>
      <WorldMapStyled>
        <MapTile />
      </WorldMapStyled>
    </WorldMapWrapper>
  );
};

export default WorldMap;
