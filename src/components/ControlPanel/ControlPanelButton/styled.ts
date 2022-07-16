import { COLOR_PALETTE } from "constants/colors";
import styled from "styled-components";

interface ButtonStyledProps {
  isSelected?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: block;
  background: ${COLOR_PALETTE.WhitePlatinum};
  border-radius: 20px;
  border: ${(props) =>
    props.isSelected ? "1px solid #000" : "1px solid #ccc"};
`;
