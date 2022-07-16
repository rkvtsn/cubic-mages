import { CellBaseModel } from "types/CellModel";

export interface EditorPanelState {
  isBrush: boolean;
  cell: CellBaseModel | null;
}
