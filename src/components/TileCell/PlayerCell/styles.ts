import styled from "styled-components";
import { PlayerCellProps } from ".";
import { CellOverlayStyled } from "../styles";

export const PlayerCellStyled = styled(CellOverlayStyled)<PlayerCellProps>`
  background: ${(props) => props.player.color};
  margin: auto;
  border-radius: 100%;
  border: 3px solid #333;
`;
