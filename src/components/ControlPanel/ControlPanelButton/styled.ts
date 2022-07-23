import { ColorPalette } from "constants/colors";
import styled from "styled-components";

interface ButtonStyledProps {
  isSelected?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: block;
  background: ${ColorPalette.WhitePlatinum};
  border-radius: 20px;
  border: ${(props) =>
    props.isSelected ? "1px solid #000" : "1px solid #ccc"};
`;
