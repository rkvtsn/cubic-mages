import TileCell, { TileCellProps } from "components/TileCell";
import styled from "styled-components";

export const EditorCellStyled = styled.div`
  font-size: 10px;
`;

export const TileCellStyled = styled(TileCell)<TileCellProps>`
  border: none;
  border-radius: 5px;
  border-bottom: ${(props) =>
    props.isSelected ? "4px solid #333" : "4px solid #ccc"};
`;
