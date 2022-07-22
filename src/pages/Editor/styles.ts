import { COLOR_PALETTE } from "constants/colors";
import styled from "styled-components";

export const EditorWrapperStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const HeaderStyled = styled.header`
  display: flex;
  background: ${COLOR_PALETTE.PanelBackground};
`;

export const MainStyled = styled.div`
  display: flex;
  height: 100%;
`;
