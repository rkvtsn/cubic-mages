import styled from "styled-components";
import { PlayerCellProps } from ".";

const MARKER_SIZE = "20px";

export const PlayerCellStyled = styled.div<PlayerCellProps>`
  position: absolute;
  background: ${(props) => props.player.color};
  display: block;
  width: ${MARKER_SIZE};
  height: ${MARKER_SIZE};
  margin: auto;
  border-radius: 100%;
  border: 3px solid #333;
`;
