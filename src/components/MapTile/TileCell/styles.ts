import styled from "styled-components";

const TILE_CELL_SIZE = 30;

interface TileCellStyledProps {
  background: string;
}

export const TileCellStyled = styled.div<TileCellStyledProps>`
  display: block;
  width: ${TILE_CELL_SIZE}px;
  height: ${TILE_CELL_SIZE}px;
  background: ${(props) => props.background};
  border: 1px solid #cecece;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    border-color: #888;
  }
`;
