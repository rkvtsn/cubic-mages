import { ColorPalette } from "constants/colors";
import styled from "styled-components";

export const ModalWrapperStyled = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  margin: auto;
  z-index: 10000;
  width: 100%;
  height: 100%;
`;

export const ModalWindowStyled = styled.div`
  margin: auto;
  width: fit-content;
  min-width: 500px;
  max-height: 90%;
  max-width: 90%;
  background: #fff;
`;

export const ModalWindowTitleStyled = styled.div`
  display: flex;
  height: 20px;
  flex: 1;
  background: ${ColorPalette.WhitePlatinum};
`;

export const ModalWindowTitleTextStyled = styled.div`
  width: auto;
`;

export const ModalButtonStyled = styled.button`
  margin-left: auto;
  margin-right: 0;
  width: 20px;
  height: 20px;
`;

export const ModalWindowContentStyled = styled.div`
  height: auto;
  min-height: 200px;
`;
