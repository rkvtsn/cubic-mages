import { CellNameType } from "./CellModel";

export interface EncounterModel {
  id: string;
  description: string;
  location: CellNameType;
}

export default EncounterModel;
