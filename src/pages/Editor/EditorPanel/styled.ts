import { COLOR_PALETTE } from "constants/colors";
import styled from "styled-components";

export const CellEditOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CellEditOptionsRowStyled = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 4px;
`;

export const EditorPanelWrapperStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  text-align: center;
  background: ${COLOR_PALETTE.PanelBackground};
`;

export const PStyled = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
`;
