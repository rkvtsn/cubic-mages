import { CellNameType } from "types/CellModel";

export enum SpawnDirection {
  Top,
  Right,
  Bottom,
  Left,
}

export interface EncounterSpawnModel {
  direction: RumorSpawnModel;
}

export interface RumorSpawnModel {
  location: CellNameType;
  description: string;
  direction: SpawnDirection;
}

export interface DayModel {
  description: string;
  rumorSpawn: RumorSpawnModel;
  encounterSpawns: EncounterSpawnModel[];
}
