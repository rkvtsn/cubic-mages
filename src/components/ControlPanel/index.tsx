import { EditorModeEnum } from "pages/Editor/types";
import React, { memo } from "react";
import ControlPanelButton from "./ControlPanelButton";
import { ControlButtonProps } from "./ControlPanelButton/types";
import { ControlPanelStyled } from "./styled";

interface ControlPanelProps {
  buttons: ControlButtonProps[];
  selected: string;
  onChange: (name: EditorModeEnum) => void;
}

const ControlPanel = ({ buttons, selected, onChange }: ControlPanelProps) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const button = e.target as HTMLButtonElement;
    if (button) {
      onChange(button.name as EditorModeEnum);
    }
  };

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
