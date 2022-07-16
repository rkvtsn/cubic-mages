export interface ControlButtonProps {
  name: string;
  text?: string;
}

export interface ControlPanelButtonProps extends ControlButtonProps {
  isSelected?: boolean;
}
