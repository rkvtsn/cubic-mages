import { ColorPalette } from "constants/colors";
import styled from "styled-components";

export const MainLayoutWrapperStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const HeaderStyled = styled.div`
  display: flex;
  background: ${ColorPalette.PanelBackground};
  flex: 1;
  align-items: center;
  gap: 4px;
  padding: 2px;
`;

export const MainWrapperStyled = styled.div`
  display: flex;
  height: 100%;
`;

export const MainStyled = styled.div`
  height: 100%;
`;

export const RightbarStyled = styled.div`
  height: 100%;
`;
