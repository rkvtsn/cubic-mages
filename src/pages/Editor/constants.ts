import { ControlButtonProps } from "components/ControlPanel/ControlPanelButton/types";
import { COLS, ROWS } from "constants/cells";
import { DICT_WORLD } from "constants/dicts";
import WorldModel from "types/WorldModel";
import { generateName } from "utils/generateName";
import generateWorldCells from "utils/generateWorldCells";
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
  mode: EditorModeEnum.Brush,
  brush: null,
};

export const REAL_WORLD: WorldModel = {
  id: null,
  name: generateName(DICT_WORLD),
  cells: generateWorldCells({ rows: ROWS, cols: COLS }),
};
