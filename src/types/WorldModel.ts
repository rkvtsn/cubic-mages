import CellModel from "./CellModel";

export interface WorldModel {
  id: string | null;
  name: string;
  world: CellModel[];
}

export default WorldModel;
