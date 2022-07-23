export interface EditorPanelState {
  mode: EditorModeEnum;
  brush: string | null;
}

export enum EditorModeEnum {
  Brush = "brush",
  Tile = "tile",
  Select = "select",
}
