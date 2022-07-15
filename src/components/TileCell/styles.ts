import styled from "styled-components";
import { UseCellStyle } from "./useCellStyle";

const TILE_CELL_SIZE = 30;

export const TileCellStyled = styled.div<UseCellStyle>`
  display: block;
  width: ${TILE_CELL_SIZE}px;
  height: ${TILE_CELL_SIZE}px;
  background: ${(props) => props.background};
  border: ${(props) =>
    props.selected ? "1px solid #000" : "1px solid #cecece"};
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    border-color: #888;
  }
`;
