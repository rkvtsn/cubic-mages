import styled from "styled-components";
import { UseCellStyle } from "./useCellStyle";

const TILE_CELL_SIZE = 50;
const CELL_OVERLAY_SIZE = 20;

export const TileCellStyled = styled.div<UseCellStyle>`
  display: flex;
  position: relative;
  align-items: center;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  margin: 1px;
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

export const CellOverlayStyled = styled.div`
  position: absolute;
  display: block;
  width: ${CELL_OVERLAY_SIZE}px;
  height: ${CELL_OVERLAY_SIZE}px;
`;
