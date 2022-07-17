import { memo, useCallback } from "react";
import { EditorModeEnum } from "pages/Editor/types";
import usePanelClickButton from "hooks/usePanelClickButton";
import ControlPanelButton from "./ControlPanelButton";
import { ControlButtonProps } from "./ControlPanelButton/types";
import { ControlPanelStyled } from "./styled";

interface ControlPanelProps {
  buttons: ControlButtonProps[];
  selected: string;
  onChange: (name: EditorModeEnum) => void;
}

const ControlPanel = ({ buttons, selected, onChange }: ControlPanelProps) => {
  const handleOnChange = useCallback(
    (button: HTMLButtonElement) => {
      onChange(button.name as EditorModeEnum);
    },
    [onChange]
  );
  const handleClick = usePanelClickButton(handleOnChange);

  return (
    <ControlPanelStyled onClick={handleClick}>
      {buttons.map((button) => (
        <ControlPanelButton
          key={button.name}
          isSelected={button.name === selected}
          name={button.name}
          text={button.text}
        />
      ))}
    </ControlPanelStyled>
  );
};

export default memo(ControlPanel);
