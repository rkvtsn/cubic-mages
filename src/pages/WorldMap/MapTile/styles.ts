import styled from "styled-components";

const TILE_CELL_SIZE = 30;

export const TileCellStyled = styled.div`
  display: block;
  width: ${TILE_CELL_SIZE}px;
  height: ${TILE_CELL_SIZE}px;
  background-color: ${(props) => props.color || "yellow"};
`;

export const MapTileWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MapTileRowStyled = styled.div`
  display: flex;
`;
