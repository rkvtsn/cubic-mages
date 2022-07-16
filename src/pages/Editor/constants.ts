import { ControlButtonProps } from "components/ControlPanel/ControlPanelButton/types";
import { EditorModeEnum, EditorPanelState } from "./types";

export const CONTROL_BUTTONS: ControlButtonProps[] = [
  {
    name: "select",
    text: "Select",
  },
  {
    name: "brush",
    text: "Brush",
  },
  {
    name: "tile",
    text: "Tile",
  },
];

export const DEFAULT_EDITOR_PANEL_STATE: EditorPanelState = {
  mode: EditorModeEnum.Select,
  cell: null,
};
