import { ButtonStyled } from "./styled";
import { ControlPanelButtonProps } from "./types";

const ControlPanelButton = ({
  name,
  text,
  isSelected,
}: ControlPanelButtonProps) => {
  return (
    <ButtonStyled isSelected={isSelected} name={name}>
      {text}
    </ButtonStyled>
  );
};

export default ControlPanelButton;
