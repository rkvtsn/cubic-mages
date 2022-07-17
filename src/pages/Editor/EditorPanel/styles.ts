import styled from "styled-components";
import { COLOR_PALETTE } from "constants/colors";

export const ClearButtonStyled = styled.button`
  margin: 10px 0px;
  font-size: 10px;
  text-align: left;
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

export const TitleStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const EditorPanelTop = styled.div`
  width: 100%;
`;
