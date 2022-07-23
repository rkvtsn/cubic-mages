import CellModel from "./CellModel";

export interface WorldModel {
  id: string;
  name: string;
  world: CellModel[];
}

export default WorldModel;
