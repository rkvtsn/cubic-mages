import { ControlButtonProps } from "components/ControlPanel/ControlPanelButton/types";
import { COLS, ROWS } from "constants/cells";
import { DICT_WORLD } from "constants/dicts";
import WorldModel from "types/WorldModel";
import generateId from "utils/generateId";
import { generateName } from "utils/generateName";
import generateWorld from "utils/generateWorld";
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
  cell: null,
};

export const REAL_WORLD: WorldModel = {
  id: generateId().toString(),
  name: generateName(DICT_WORLD),
  world: generateWorld({ rows: ROWS, cols: COLS }),
};
