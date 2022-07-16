import { CellBaseModel } from "types/CellModel";

export interface EditorPanelState {
  mode: EditorModeEnum;
  cell: CellBaseModel | null;
}

export enum EditorModeEnum {
  Brush = "brush",
  Tile = "tile",
  Select = "select",
}
