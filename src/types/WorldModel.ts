import CellModel from "./CellModel";

export interface WorldModel {
  id: string | null;
  name: string;
  cells: CellModel[];
}

export default WorldModel;
