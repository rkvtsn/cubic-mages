import EffectModel from "types/EffectModel";
import { PlayerModel } from "types/PlayerModel";
import WorldModel from "types/WorldModel";

export interface WorldMapProps {
  onClick?: (
    tileId: number,
    cellId: number,
    e: React.MouseEvent<HTMLElement>
  ) => void;
  worldMap: WorldModel;
  selectedCells?: number[];
  players?: PlayerModel[];
  effects?: EffectModel[];
}
